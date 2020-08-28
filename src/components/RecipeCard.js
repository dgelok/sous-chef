import React, {useState} from 'react';
import {Card, Button} from 'react-bootstrap';
import APIkey from '../APIkeys';
// import {useHistory} from 'react-router';
// import { withRouter } from "react-router-dom";
import {useDispatch} from 'react-redux'
import {setIndividualRecipe} from '../actions/actions'
import {Redirect} from 'react-router-dom'

const RecipeCard = (props) => {

    let [redirect, updateRedirect] = useState(false)

    let dispatch = useDispatch()
    // let history = useHistory()

    let handleSubmit = (e) =>{
        e.preventDefault();
        console.log("A card button was clicked")
    }
    
    let visitRecipe = async (e) =>{
      e.preventDefault();
      console.log("let's go see this recipe")
      console.log(props.recipe.id)
      let URL = `https://api.spoonacular.com/recipes/${props.recipe.id}/information?apiKey=${APIkey}`
      try {
          let response = await fetch(URL);
          let results = await response.json()
          console.log(results)
          dispatch(setIndividualRecipe(results))
          
      }
      catch (error) {
          console.log("didn't work!")
          console.log(error)
      }
      updateRedirect(true);
      

      
      // props.history.push('/Recipe')
      
      // store in global state
      // navigate to recipe
      

    }
    return (
      redirect ?
      <Redirect to="/Recipe" />
      :
    <>
      <Card style={{ width: '18rem' }} className="m-2">
        <Card.Img variant="top" src={props.recipe.image} />
            <Card.Body>
                <Card.Title>{props.recipe.title}</Card.Title>
                {/* <Card.Subtitle>{props.recipe.price}</Card.Subtitle>
                <Card.Text>{props.recipe.description}</Card.Text> */}
                <Button variant="primary" className="m-1" onClick={handleSubmit}>Add to List</Button>
                <Button variant="secondary" className="m-1" onClick={visitRecipe}>See More</Button>
            </Card.Body>
        </Card>
    </>
  )
}

export default RecipeCard
