import React from 'react'
import {Form, FormControl, Input, Dropdown, Col, InputGroup, Button} from 'react-bootstrap'


const SearchInputs = () => {

    let handleClick = (e) =>{
        e.preventDefault();
        console.log(e.target.cuisine.value)
        console.log(e.target.type.value)
        console.log(e.target.keywords.value)
    }

    return (
        <>
        <Form onSubmit={handleClick}>
            <Form.Row className="align-items-center m-2">

                <Form.Group className="m-1" controlId="cuisine">
                    <Form.Label>Select Cuisine</Form.Label>
                    <Form.Control as="select" size="sm" custom>
                    <option>any</option>
                    <option>Italian</option>
                    <option>Mexican</option>
                    <option>Japanese</option>
                    <option>Vegetarian</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group className="m-1" controlId="type">
                    <Form.Label>Select Type</Form.Label>
                    <Form.Control as="select" size="sm" custom>
                    <option>any</option>
                    <option>Breakfast</option>
                    <option>Soup</option>
                    <option>Dessert</option>
                    <option>Main Course</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group className="m-1" controlId="keywords">
                    <Form.Label>Search Terms</Form.Label>
                    <Form.Control size="sm" type="text" placeholder="any" />
                </Form.Group>
                
                <Button type="submit" className="mt-4 ml-1">
                    Submit
                </Button>
                
                {/* <Col xs="auto">
                <label for="exampleFormControlSelect1">Select Type</label>
                <select class="form-control" id="exampleFormControlSelect1">
                    <option>Breakfast</option>
                    <option>Soup</option>
                    <option>Dessert</option>
                    <option>Beverage</option>
                    <option>Main Course</option>
                </select>
                </Col> */}


                {/* <Dropdown className="m-1">
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Choose Cuisine Type
                    </Dropdown.Toggle>

                    <Dropdown.Menu id="cuisine">
                        <Dropdown.Item href="#/action-1">Italian</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Greek</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Mexican</Dropdown.Item>
                        <Dropdown.Item href="#/action-4">Japanese</Dropdown.Item>
                        <Dropdown.Item href="#/action-5">Thai</Dropdown.Item>
                        <Dropdown.Item href="#/action-6">Other</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown> */}
                
                {/* <Dropdown className="m-1">
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Choose Menu Type
                    </Dropdown.Toggle>

                    <Dropdown.Menu id="Type">
                        <Dropdown.Item href="#/action-1">Breakfast</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Soup</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Dessert</Dropdown.Item>
                        <Dropdown.Item href="#/action-4">Beverage</Dropdown.Item>
                        <Dropdown.Item href="#/action-5">Snack</Dropdown.Item>
                        <Dropdown.Item href="#/action-6">Main Course</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown> */}
                
            </Form.Row>
        </Form>
        </>
  )
}

export default SearchInputs
