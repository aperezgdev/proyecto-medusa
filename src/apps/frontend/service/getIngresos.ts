
export const getIngresos = async (token: string) => {
  const FETCH_OPTIONS = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    }
  }

  const result = await fetch('http://localhost:3001/ingresos/', {
    ...FETCH_OPTIONS
  })

  return await result.json()
}
