import { inject, singleton } from 'tsyringe'
import { type IngresoId } from '../domain/IngresoId'
import { type IngresoRepository } from '../domain/IngresoRepository'

@singleton()
export class IngresoDelete {
  constructor(@inject('IngresoRepository') readonly ingresoRepository: IngresoRepository) {}

  async run(idIngreso: IngresoId) {
    await this.ingresoRepository.delete(idIngreso)
  }
}
