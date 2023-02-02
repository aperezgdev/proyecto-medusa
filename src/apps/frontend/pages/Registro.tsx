import React from 'react'
import { FormRegistro } from '../components/FormRegistro'

export const Registro = () => {
  return (
    <main className="flex flex-row w-full">
      <section className="flex w-[30%] h-screen justify-center items-center">
        <article className="flex flex-col w-[80%] h-[30%] justify-center items-center gap-[15%]">
          <img src="/Medusa.png" className="w-1/2"></img>
          <FormRegistro />
        </article>
      </section>
      <section className="w-[70%] h-screen bg-gradient-to-l from-fuchsia-600 to-pink-600"></section>
    </main>
  )
}
