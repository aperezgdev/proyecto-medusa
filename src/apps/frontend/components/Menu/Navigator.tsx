import { MenuLink } from './MenuLink'

const links = [
  {
    link: 'MOVIMIENTOS',
    url: '/movimientos'
  },
  {
    link: 'GASTOS',
    url: '/gastos'
  },
  {
    link: 'INGRESOS',
    url: '/ingresos'
  },
  {
    link: 'BALANCE',
    url: '/balance'
  }
]

export const Navigator = () => {
  return (
    <nav className="flex flex-col justify-center items-center w-[100%]">
      <ul className="flex flex-col gap-6 w-[80%] justify-center items-center">
        {links.map(({ link, url }) => (
          <MenuLink key={link} link={link} url={url} />
        ))}
      </ul>
    </nav>
  )
}
