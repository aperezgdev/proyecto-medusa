export class ConceptoNoEncontradoError extends Error {
  constructor() {
    const errorMessage = 'El concepto no existe'
    super(errorMessage)
    this.name = ConceptoNoEncontradoError.name
  }
}
