import { inject, singleton } from 'tsyringe'
import { type UserId } from '../../User/domain/UserId'
import { type IngresoRepository } from '../domain/IngresoRepository'
import { IngresoUserCriteria } from '../domain/IngresoUserCriteria.js'

@singleton()
export class IngresosSelect {
  constructor(@inject('IngresoRepository') readonly ingresoRepository: IngresoRepository) {}

  async run(idUsuario: UserId) {
    const ingresos = await this.ingresoRepository.matching(new IngresoUserCriteria(idUsuario.value))
    return ingresos.map((ingreso) => ingreso.toPrimitives())
  }
}
