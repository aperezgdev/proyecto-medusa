export const eliminarIngreso = async (idIngreso: string, token: string) => {
  const FETCH_OPTIONS = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    }
  }

  await fetch('http://localhost:3001/ingresos', {
    ...FETCH_OPTIONS,
    body: JSON.stringify({ idIngreso })
  }).catch((err) => {
    console.error(err)
  })
}
