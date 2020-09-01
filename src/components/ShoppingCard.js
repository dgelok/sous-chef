import React from 'react'
import {Card, ListGroup} from 'react-bootstrap'
import MyListItem from './MyListItem'

const shoppingCard = (props) => {

    console.log(props)
  

  // console.log(props.values)
  // let myList = props.values.map((item, index) =>{
  // return  <MyListItem key={index} myid={index} item={item} /> 

  
        // <li key={index} className="d-flex justify-content-between">
        //   <div className="m-1">{item}</div>
        //   <div>
        //   <button onClick={handleClick}>Edit</button>
        //   <button key={index} onClick={handleClick}>X</button>
        //   </div>
        // </li>
    // })
  return (
    <>
      <Card className="m-1 col-5">
        <Card.Body>
          <Card.Title><h4>{props.name}</h4></Card.Title>
          <ListGroup variant="flush" className="d-flex justify-content-between">
            {/* {myList}  */}
            List Items go here
          </ListGroup>
        </Card.Body>
      </Card>
    </>
  )
}

export default shoppingCard
