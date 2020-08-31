import React from 'react'
import {Card, ListGroup} from 'react-bootstrap'

const shoppingCard = (props) => {
  console.log(props.values)
  let myList = props.values.map(item =>{
  return <ListGroup.Item>{item}</ListGroup.Item>
    })
  return (
    <>
      <Card className="m-2 col-3">
        <Card.Body>
          <Card.Title><h4>{props.name}</h4></Card.Title>
          <ListGroup variant="flush">
            {myList}
            {/* <ListGroup.Item>Cras justo odio</ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Vestibulum at eros</ListGroup.Item> */}
          </ListGroup>
        </Card.Body>
      </Card>
    </>
  )
}

export default shoppingCard
