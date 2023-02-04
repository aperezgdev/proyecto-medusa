export interface Ingreso {
  id: { value: string }
  cantidad: number
  concepto: string
  fecha: Date
  cuenta: string
  resultado: number
  user: string
}
