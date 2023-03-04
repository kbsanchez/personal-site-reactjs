import React from 'react'
import { Routes, Route } from "react-router-dom"
import NavBar from './components/NavBar'
import Home from './components/Home/Home'

export default function App() {
  return (
    <div>
      <NavBar/>
      <Home/>
    </div>
  )
}
