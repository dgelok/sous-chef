import React from 'react'
import {Card, ListGroup} from 'react-bootstrap'
import MyListItem from './MyListItem'

const shoppingCard = (props) => {

  
  // console.log(props.items)
  let filteredList = props.items.filter(item =>{
    return item.isvisible
  })
  // console.log(filteredList)

  let listItems = filteredList.map((item, index) =>{
    let myvar = `${item.amount} ${item.unit} ${item.name}`
    return <MyListItem key={index} uuid={item.uuid} id={item.id} text={myvar}/>
  })

  
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
            
            {listItems}
          </ListGroup>
        </Card.Body>
      </Card>
    </>
  )
}

export default shoppingCard
