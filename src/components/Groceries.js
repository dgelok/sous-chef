import React from 'react'
import {useSelector} from 'react-redux'
import {Row} from 'react-bootstrap'
import GroceryCard from './GroceryCard'



const Groceries = () => {

  const myGroceries = useSelector(state => state.shoppingList)

  const ingredientlist = myGroceries.map(r =>{
    return r.extendedIngredients.map((i, index) =>{
      return <li key={index}>{i.amount} {i.unit} {i.name}</li>
    })
  })

  const cards = myGroceries.map((r, index) =>{
    return <GroceryCard key={index} recipe={r} />
  })

  return (
    <>
      <Row className="m-1">
        {cards}
      </Row>
      <Row>
        <ul>
          {ingredientlist}
        </ul>
      </Row>
    </>
  )
}

export default Groceries
