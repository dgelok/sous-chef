import React from 'react'
import {Dropdown} from 'react-bootstrap'


const SearchInputs = () => {
  return (
    <>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
            Choose a Cusine
        </Dropdown.Toggle>

        <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Greek</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Italian</Dropdown.Item>
            <Dropdown.Item href="#/action-3">American</Dropdown.Item>
            <Dropdown.Item href="#/action-4">Chinese</Dropdown.Item>
            <Dropdown.Item href="#/action-5">Mexican</Dropdown.Item>
            <Dropdown.Item href="#/action-6">Other</Dropdown.Item>
        </Dropdown.Menu>
    </Dropdown>
    </>
  )
}

export default SearchInputs
