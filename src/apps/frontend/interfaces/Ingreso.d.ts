export interface Ingreso {
  id: { value: string }
  cantidad: number
  concepto: { id: string, conceptoNombre: string }
  fecha: Date
  cuenta: { id: string, cantidad: number, user: User }
  resultado: number
  user: User
}
