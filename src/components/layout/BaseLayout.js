import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav} from 'react-bootstrap'


const BaseLayout = (props) => {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Navbar.Brand>Sous-Chef</Navbar.Brand>
        <Nav className="mr-auto pl-2">
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/Search">Search Recipes</Link>
            <Link className="nav-link" to="/Groceries">Grocery List</Link>
        </Nav>
    </Navbar>
    {props.children}
    </>
  )
}

export default BaseLayout
