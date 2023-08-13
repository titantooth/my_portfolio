import { useState } from 'react'
import './App.css'
import NavBar from './components/navbar/navbar.tsx'
import Banner from './components/hero/banner.tsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import Skills from './components/skills/skills.tsx'
import Projects from './components/projects/projects.tsx'





function App() {

  return (
    <div>
      <NavBar />
      <Banner />
      <Skills />
      <Projects />

    </div>
  )
}

export default App
