import React from 'react'
// import {Form, Button} from 'react-bootstrap'

const MyListItem = (props) => {

    // console.log(props)
    let handleClick = (e) =>{
        e.preventDefault();
        console.log(e.target.dataset.myid)
    }
  return (
    <>
    
    <li className="d-flex justify-content-between">
        
          <div className="m-1">{props.item}</div>
          <div>
          <button onClick={handleClick}>Edit</button>
          <button data-myid={props.myid} onClick={handleClick}>X</button>
          </div>
        
    </li>
    </>
  )
}

export default MyListItem
