import React from 'react'
import { Route, Routes } from "react-router-dom"
import NavBar from './components/NavBar/NavBar'
import Home from './components/Home/Home'
import ContactMe from './components/ContactMe/ContactMe'
import Projects from './components/Projects/Projects'
import Resume from './components/Resume/Resume'
import Interests from './components/Interests'

export default function App() {
  return (
      <div style={{overflow: 'hidden'}}>
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
