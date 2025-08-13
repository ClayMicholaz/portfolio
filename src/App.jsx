import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
      <div
        id="scroll-container"
        className="snap-y snap-mandatory h-screen overflow-y-scroll"
      >
        <Navbar />
        <section id='hero'><Hero /></section>
        <section id='projects'><Projects /></section>
        <section id='skills'><Skills /></section>
        <section id='contact'><Contact /></section>
      </div>
    </>
  )
}

export default App
