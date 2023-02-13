interface UserIngreso {
  id: string
  usuario: string
  nombre: string
  apellido: string
  oficio: string
  contrasena: string
}

export interface Ingreso {
  id: { value: string }
  cantidad: number
  concepto: { id: string, conceptoNombre: string }
  fecha: string
  observaciones: string
  localidad: string
  cuenta: { id: string, cantidad: number, user: UserIngreso }
  resultado: number
  user: UserIngreso
}
