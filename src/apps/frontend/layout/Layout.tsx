import { Menu } from '../components/Menu/Menu'

interface PropsLayout {
  children: React.ReactElement
}

export const Layout = ({ children }: PropsLayout) => {
  return (
    <>
      <Menu />
      <main className="flex flex-row w-4/5">{children}</main>
    </>
  )
}
