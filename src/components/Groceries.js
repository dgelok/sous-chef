import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {Row, Container, Button} from 'react-bootstrap'
import GroceryCard from './GroceryCard'
import ShoppingCard from './ShoppingCard'
import {showIngredients} from '../actions/actions'
import '../css/search.css'

const Groceries = () => {

  const myGroceries = useSelector(state => state.shoppingList);
  const myIngredients = useSelector(state => state.ingredientsList);
  const dispatch = useDispatch();

  // console.log(myIngredients)
  let ingObj = {}
  for (let item of myIngredients) {
    
    if (ingObj[item.aisle] === undefined) {
      ingObj[item.aisle] = [{
        amount: item.amount,
        unit: item.unit,
        name: item.name,
        id: item.id,
        isvisible: item.isvisible,
        uuid: item.uuid
    }]
    }
    else {
      ingObj[item.aisle].push({
        amount: item.amount,
        unit: item.unit,
        name: item.name,
        id: item.id,
        isvisible: item.isvisible,
        uuid: item.uuid
    })
    }
  }

  let showIngredientsButton = (e) =>{
    e.preventDefault();
    dispatch(showIngredients())
  }
  // ingObj is now an object with keys (aisles) and values (array of ingredients)
  // console.log(ingObj)
  let myKeys = Object.keys(ingObj);
  // myKeys is now an array of aisle names 
  // console.log(myKeys)
  
  // let results = Object.keys(ingObj).map((thing, index) =>{
  //   return <ShoppingCard value={thing}/>
  // })
  const ingredientCards = myKeys.map((aisle, index) =>{
    return <ShoppingCard key={index} name={aisle} items={ingObj[aisle]}/>
  })

  let cards;
  if (myGroceries.length === 0) {
    cards = "No recipes selected yet. Try finding some new ones and adding them to your cart!"
  } 
  else {
      cards = myGroceries.map((r, index) =>{
      return <GroceryCard key={index} recipe={r} />
  })
}

//   if (props.recipes.length === 0) {
//     myCards = "Try it out!"
// } 
// else {
//     myCards = props.recipes.map((r, index) =>{
//         return <RecipeCard key={index} recipe={r}/>
//     })
// }

  return (
    <>
    <div className="bgImage2">
    <Container>
      <Row className="m-0 d-flex justify-content-center">
        <h1 className="display-3 p-4">Planned Recipes</h1>
      </Row>
      <Row className="m-1 d-flex justify-content-center">
        {cards}
      </Row>
      <Row className="mt-5 d-flex justify-content-center">
        <h1 className="display-3 p-3">Let's go Shopping!</h1>
      </Row>
      <Row className="mt-3 d-flex justify-content-center">
        <Button className="m-3" onClick={showIngredientsButton}>Re-display all Items</Button>
      </Row>
      <Row className='d-flex justify-content-center'>
        {ingredientCards}
      </Row>
    </Container>
    </div>
    </>
  )
}

export default Groceries
