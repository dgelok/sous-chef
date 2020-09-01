import React from 'react'
import {Form, Button} from 'react-bootstrap'
import {useDispatch} from 'react-redux'
import {hideIngredient} from '../actions/actions'

const MyListItem = (props) => {

  let dispatch = useDispatch()
    // console.log(props)
    let handleClick = (e) =>{
        e.preventDefault();
        console.log(props.uuid)
        dispatch(hideIngredient(props.uuid))
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
