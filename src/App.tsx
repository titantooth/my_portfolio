import { useState } from 'react'
import './App.css'
import NavBar from './components/navbar/navbar.tsx'
import Banner from './components/hero/banner.tsx'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  return (
    <div>
      <NavBar />
      <Banner />
    </div>
  )
}

export default App
