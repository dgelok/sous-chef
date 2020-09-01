import React from 'react'
import {Card, Button} from 'react-bootstrap'
import {deleteRecipeFromShopping} from '../actions/actions'
import {useDispatch} from 'react-redux'


const GroceryCard = (props) => {
    let dispatch = useDispatch()
    let deleteRecipe = () =>{
        console.log('delete button pressed')
        console.log(props.recipe.id)
        dispatch(deleteRecipeFromShopping(props.recipe))
    }
  return (
    <>
      <Card style={{ width: '10rem' }} className="m-2">
        <Card.Img variant="top" src={props.recipe.image} />
        <Card.Body className="d-flex flex-column justify-content-between">
            <Card.Title>{props.recipe.title}</Card.Title>
            {/* <Card.Subtitle>{props.recipe.price}</Card.Subtitle>
            <Card.Text>{props.recipe.description}</Card.Text> */}
            <Button variant="primary" className="m-1" onClick={deleteRecipe}>Delete from List</Button>
        </Card.Body>
      </Card>
    </>
  )
}

export default GroceryCard
