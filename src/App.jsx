import { useState } from 'react'

import './App.css'
import Nav from './components/Nav/Nav'

function App() {


  return (
    <div className="container-fluid" id='main-container'>
      <div className="header">
        <Nav />
      </div>
      <div className="body"></div>
      <div className="footer"></div>
    </div>
  )
}

export default App
