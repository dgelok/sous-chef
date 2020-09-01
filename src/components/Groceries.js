import React from 'react'
import {useSelector} from 'react-redux'
import {Row, Container} from 'react-bootstrap'
import GroceryCard from './GroceryCard'
import ShoppingCard from './ShoppingCard'

const Groceries = () => {

  const myGroceries = useSelector(state => state.shoppingList);
  const myIngredients = useSelector(state => state.ingredientsList);

  // console.log(myIngredients)
  let ingObj = {}
  for (let item of myIngredients) {
    
    if (ingObj[item.aisle] === undefined) {
      ingObj[item.aisle] = [{
        amount: item.amount,
        unit: item.unit,
        name: item.name,
        id: item.id
    }]
    }
    else {
      ingObj[item.aisle].push({
        amount: item.amount,
        unit: item.unit,
        name: item.name,
        id: item.id
    })
    }
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


  const cards = myGroceries.map((r, index) =>{
    return <GroceryCard key={index} recipe={r} />
  })

  

  return (
    <>
    <Container>
      <Row className="m-0 d-flex justify-content-center">
        <h1>Planned Recipes:</h1>
      </Row>
      <Row className="m-1">
        {cards}
      </Row>
      <Row className="mt-5 d-flex justify-content-center">
        <h1>Let's go Shopping!</h1>
      </Row>
      <Row>
        {ingredientCards}
      </Row>
    </Container>
    </>
  )
}

export default Groceries
