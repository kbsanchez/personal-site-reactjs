import React from 'react'
import { Route, Routes } from "react-router-dom"
import NavBar from './components/NavBar/NavBar'
import Home from './components/Home/Home'
import ContactMe from './components/ContactMe'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Interests from './components/Interests'

export default function App() {
  return (
      <div>
        <NavBar/>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/interests" element={<Interests />} />
          <Route path="/contact" element={<ContactMe />} />
        </Routes>
      </div>
  )
}
