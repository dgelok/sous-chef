import React from 'react'
import {Form, FormControl, Dropdown, Col, InputGroup, Button} from 'react-bootstrap'


const SearchInputs = () => {

    let handleClick = () =>{
        console.log("You clicked!")
    }

    return (
        <>
        <Form onSubmit={handleClick}>
            <Form.Row className="align-items-center">
                <Dropdown className="m-1">
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Choose Cuisine Type
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Italian</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Greek</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Mexican</Dropdown.Item>
                        <Dropdown.Item href="#/action-4">Japanese</Dropdown.Item>
                        <Dropdown.Item href="#/action-5">Thai</Dropdown.Item>
                        <Dropdown.Item href="#/action-6">Other</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                
                <Dropdown className="m-1">
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Choose Menu Type
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Breakfast</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Soup</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Dessert</Dropdown.Item>
                        <Dropdown.Item href="#/action-4">Beverage</Dropdown.Item>
                        <Dropdown.Item href="#/action-5">Snack</Dropdown.Item>
                        <Dropdown.Item href="#/action-6">Main Course</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <input className="m-1" type="text" id="keywords" ></input>
                <Col xs="auto">
                    <Button type="submit" className="m-1">
                        Submit
                    </Button>
                </Col>
            </Form.Row>
        </Form>
        </>
  )
}

export default SearchInputs
