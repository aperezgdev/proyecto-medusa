import { container } from 'tsyringe'
import { IngresoDelete } from '../../../Ingreso/application/IngresoDelete.js'
import { IngresosSelect } from '../../../Ingreso/application/IngresoSelect.js'
import { MongoIngresoRepository } from '../../../Ingreso/infrastructure/MongoIngresoRepository.js'

container.register('IngresoSelect', {
  useClass: IngresosSelect
})

container.register('IngresoDelete', {
  useClass: IngresoDelete
})

container.register('IngresoRepository', {
  useClass: MongoIngresoRepository
})
