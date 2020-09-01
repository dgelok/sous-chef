import React from 'react'
import './App.css'
import { Link } from 'react-router-dom'
import {Button} from 'react-bootstrap'

const App = () => {
  return (
    <>
      <div className="bgImage">
        <div className="hero-text">
          <h1 style={{fontSize:"50px"}}>Welcome to SousChef!</h1>
          <h5>Your personalized shopping and meal-prep manager</h5>
          <Link to="/Search"><Button>Get Started</Button></Link>
          
        </div>
      </div>
    </>
  )
}

export default App
