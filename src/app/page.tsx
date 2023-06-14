"use client"

import { Header } from './components/Header'

export default function Home() {
  const links = [
    { url: "/", label: "Home" }
  ]
  
  return (
    <main>
      <Header links={links} />
    </main>
  )
}
