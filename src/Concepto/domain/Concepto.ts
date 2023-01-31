import { AggregateRoot } from '../../Shared/domian/AggregateRoot'
import { type ConceptoId } from './ConceptoId'
import { type ConceptoNombre } from './ConceptoNombre'

export class Concepto extends AggregateRoot {
  readonly id: ConceptoId
  readonly conceptoNombre: ConceptoNombre

  constructor(id: ConceptoId, nombre: ConceptoNombre) {
    super()
    this.id = id
    this.conceptoNombre = nombre
  }

  toPrimitives() {
    return {
      id: this.id,
      conceptoNombre: this.conceptoNombre
    }
  }
}
