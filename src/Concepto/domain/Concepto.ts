import { AggregateRoot } from '../../Shared/domian/AggregateRoot'
import { ConceptoId } from './ConceptoId.js'
import { ConceptoNombre } from './ConceptoNombre.js'

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
      id: this.id.value,
      conceptoNombre: this.conceptoNombre.value
    }
  }

  static fromPrimitives(primitives: { id: string, conceptoNombre: string }) {
    return new Concepto(
      new ConceptoId(primitives.id),
      new ConceptoNombre(primitives.conceptoNombre)
    )
  }
}
