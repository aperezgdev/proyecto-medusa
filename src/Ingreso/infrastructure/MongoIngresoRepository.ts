import { type MongoClient } from 'mongodb'
import { inject, singleton } from 'tsyringe'
import { type Criteria } from '../../Shared/domian/Criteria/Criteria.js'
import { MongoRepository } from '../../Shared/infrastructure/MongoRepository.js'
import { Ingreso } from '../domain/Ingreso.js'
import { type IngresoId } from '../domain/IngresoId.js'
import { type IngresoRepository } from '../domain/IngresoRepository.js'

interface IngresoDocument {
  _id: string
  ingresoCantidad: number
  ingresoConcepto: { id: string, conceptoNombre: string }
  ingresoFecha: Date
  cuenta: {
    id: string
    cuentaCantidad: number
    user: {
      id: string
      usuario: string
      nombre: string
      apellido: string
      oficio: string
      contrasena: string
    }
  }
  resultadoCuenta: number
  user: {
    id: string
    usuario: string
    nombre: string
    apellido: string
    oficio: string
    contrasena: string
  }
}

@singleton()
export class MongoIngresoRepository extends MongoRepository<Ingreso> implements IngresoRepository {
  constructor(@inject('MongoClient') private readonly mongoClient: Promise<MongoClient>) {
    super(mongoClient)
  }

  protected collectionName(): string {
    return 'ingresos'
  }

  async save(ingreso: Ingreso): Promise<void> {
    await this.persist(ingreso.id.value, ingreso)
  }

  async delete(idIngreso: IngresoId): Promise<void> {
    await this.erase(idIngreso.value)
  }

  async matching(criteria: Criteria): Promise<Ingreso[]> {
    const ingresos = await this.searchByCriteria<IngresoDocument>(criteria)
    return ingresos.map(
      ({ _id, ingresoCantidad, ingresoConcepto, ingresoFecha, cuenta, resultadoCuenta, user }) => {
        return Ingreso.fromPrimitives({
          id: _id,
          ingresoCantidad,
          ingresoConcepto,
          ingresoFecha,
          cuenta,
          resultadoCuenta,
          user
        })
      }
    )
  }
}
