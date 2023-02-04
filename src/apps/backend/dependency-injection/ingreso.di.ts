import { container } from 'tsyringe'
import { IngresosSelect } from '../../../Ingreso/application/IngresoSelect.js'
import { MongoIngresoRepository } from '../../../Ingreso/infrastructure/MongoIngresoRepository.js'

container.register('IngresoSelect', {
  useClass: IngresosSelect
})

container.register('IngresoRepository', {
  useClass: MongoIngresoRepository
})
