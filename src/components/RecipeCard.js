import React from 'react'
import {Card, Button} from 'react-bootstrap'



const RecipeCard = (props) => {

    let handleSubmit = (e) =>{
        e.preventDefault();
        console.log("A card button was clicked")
    }

  return (
    <>
      <Card style={{ width: '18rem' }} className="m-2">
        <Card.Img variant="top" src={props.recipe.image} />
            <Card.Body>
                <Card.Title>{props.recipe.title}</Card.Title>
                {/* <Card.Subtitle>{props.recipe.price}</Card.Subtitle>
                <Card.Text>{props.recipe.description}</Card.Text> */}
                <Button variant="primary" className="m-1" onClick={handleSubmit}>Add to List</Button>
                <Button variant="secondary" className="m-1" onClick={handleSubmit}>See More</Button>
            </Card.Body>
        </Card>
    </>
  )
}

export default RecipeCard
