import { FormLogin } from '../components/FormLogin'

export const Login = () => {
  return (
    <main className="flex flex-row w-full">
      <section className="w-[70%] h-screen bg-gradient-to-l from-fuchsia-600 to-pink-600"></section>
      <section className="flex w-[30%] h-screen justify-center items-center">
        <article className="flex flex-col w-[80%] h-[30%] justify-center items-center gap-[15%]">
          <img src="/Medusa.png" className="w-1/2"></img>
          <FormLogin />
        </article>
      </section>
    </main>
  )
}
