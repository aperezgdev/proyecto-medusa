const FETCH_OPTIONS = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json'
  }
}

export const getConcepto = async (idConcepto: string) => {
  const result = await fetch('http://localhost:3001/ingresos/' + idConcepto, {
    ...FETCH_OPTIONS
  })
  return await result.json()
}
