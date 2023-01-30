import { type ConceptoId } from './ConceptoId'

export class ConceptoNotFoundError extends Error {
  constructor(idConcepto: ConceptoId) {
    const errorMessage = `El concepto con id ${idConcepto.value} no existe`
    super(errorMessage)
    this.name = ConceptoNotFoundError.name
  }
}
