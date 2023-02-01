import { Link } from 'react-router-dom'

interface PropsLink {
  link: string
  url: string
}

export const MenuLink = ({ url, link }: PropsLink) => {
  return (
    <li className="flex w-[100%]">
      <Link className="w-[100%] bg-white p-3 rounded-sm font-semibold text-lg" to={url}>
        {link}
      </Link>
    </li>
  )
}
