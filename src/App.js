import React from 'react'
import './App.css'
import { Link } from 'react-router-dom'

const App = () => {
  return (
    <>
      <div class="bgImage">
        <div class="hero-text">
          <h1 style={{fontSize:"50px"}}>Welcome to SousChef!</h1>
          <h5>Your personalized shopping and meal-prep manager</h5>
          <Link to="/Search"><button>Find Recipes</button></Link>
          
        </div>
      </div>
    </>
  )
}

export default App
