import React from 'react'
import SearchInputs from './SearchInputs'
import SearchResults from './SearchResults'
import {Container} from 'react-bootstrap'

const Search = () => {
  return (
    <>
    <Container>
        <h3 className="m-5">Here's the search page</h3>
        <SearchInputs/>
        <br />
        <br />
        <br />
        <SearchResults/>
        
    </Container>
    </>
  )
}

export default Search
