import React, {useState} from 'react';
import {Card, Button} from 'react-bootstrap';
import APIkey from '../APIkeys';
// import {useHistory} from 'react-router';
// import { withRouter } from "react-router-dom";
import {setIndividualRecipe} from '../actions/actions'
import {Redirect} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {addRecipeToShopping} from '../actions/actions'

const RecipeCard = (props) => {

    let [redirect, updateRedirect] = useState(false)

    let dispatch = useDispatch()
    // let history = useHistory()

    let addRecipe = async (e) =>{
        e.preventDefault();
        let URL = `https://api.spoonacular.com/recipes/${props.recipe.id}/information?apiKey=${APIkey}`
        try {
            let response = await fetch(URL);
            let results = await response.json()
            console.log(results)
            dispatch(addRecipeToShopping(results))
            
        }
        catch (error) {
            console.log("didn't work!")
            console.log(error)
        }
        
        console.log("A recipe was added to the shopping list")
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
                <Button variant="primary" className="m-1" onClick={addRecipe}>Add to List</Button>
                <Button variant="secondary" className="m-1" onClick={visitRecipe}>More Info</Button>
            </Card.Body>
        </Card>
    </>
  )
}

export default RecipeCard
