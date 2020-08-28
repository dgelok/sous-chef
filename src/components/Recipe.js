import React from 'react'
import {Jumbotron, Button} from 'react-bootstrap'

const Recipe = (props) => {
  return (
    <>
      
      <Jumbotron>
        <h1>Title</h1>
        <p>
          description
        </p>
        <p>
          <Button variant="primary">Add to Shopping List</Button>
        </p>
      </Jumbotron>
          </>
  )
}

export default Recipe
