import React from 'react'
import {useSelector} from 'react-redux'
import {Row} from 'react-bootstrap'
import GroceryCard from './GroceryCard'


const Groceries = () => {

  const myGroceries = useSelector(state => state.shoppingList)

  const cards = myGroceries.map((r, index) =>{
    return <GroceryCard key={index} recipe={r} />
  })

  return (
    <>
      <Row className="m-1">
        {cards}
      </Row>
      
    </>
  )
}

export default Groceries
