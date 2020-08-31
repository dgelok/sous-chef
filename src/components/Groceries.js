import React from 'react'
import {useSelector} from 'react-redux'
import {Row, Container} from 'react-bootstrap'
import GroceryCard from './GroceryCard'
import {ingredientsParser} from '../utils/ingredientsParser.js'
import ShoppingCard from './ShoppingCard'

const Groceries = () => {

  const myGroceries = useSelector(state => state.shoppingList);
  const myIngredients = ingredientsParser(myGroceries);
  console.log(myIngredients)
  
  let keys = Object.keys(myIngredients)
  let results = keys.map((k, index) =>{
        return <ShoppingCard key={index} name={k} values={myIngredients[k]} />
    })

  // const ingredientlist = myGroceries.map(r =>{
  //   return r.extendedIngredients.map((i, index) =>{
  //     return <li key={index}>{i.amount} {i.unit} {i.name}</li>
  //   })
  // })

  const cards = myGroceries.map((r, index) =>{
    return <GroceryCard key={index} recipe={r} />
  })

  

  return (
    <>
    <Container>
      <Row className="m-1">
        {cards}
      </Row>
      <Row className="m-0 d-flex justify-content-center">
        <h1>Let's go Shopping!</h1>
      </Row>
      <Row>
        {results}
      </Row>
    </Container>
    </>
  )
}

export default Groceries
