import React from 'react'
import {Form, Button} from 'react-bootstrap'

const MyListItem = (props) => {

    // console.log(props)
    let handleClick = (e) =>{
        e.preventDefault();
        console.log(e.target.recipeid)
    }
  return (
    <>
    
    <Form className="d-flex justify-content-between">
        
          <div className="m-1">{props.text}</div>
          <div>
          {/* <button onClick={handleClick}>Edit</button> */}
          <Button type="submit" recipeid={props.id} onClick={handleClick}>X</Button>
          </div>
        
    </Form>
    </>
  )
}

export default MyListItem
