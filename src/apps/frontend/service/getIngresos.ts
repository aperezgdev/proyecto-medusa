const FETCH_OPTIONS = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json'
  }
}

export const getIngresos = async (idUsuario: string) => {
  const result = await fetch('http://localhost:3001/ingresos/' + idUsuario, {
    ...FETCH_OPTIONS
  })
  return await result.json()
}
