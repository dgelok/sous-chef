import React, { Component } from 'react'
import SearchInputs from './SearchInputs'
import SearchResults from './SearchResults'
import {Container, Row} from 'react-bootstrap'
// import APIkey from "../APIkeys"
// import data from '../utils/data'
import '../css/search.css'

import {connect} from 'react-redux'

class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            individualRecipe: {},
            searchResults: [],
            loading: true
        };
      }

    changeState = () =>{

      this.setState({
        loading: !(this.state.loading)
      })
    }

  render() {
    return (
      <>
      <div className='bgImage2'>
        <Container>
          <Row className="d-flex justify-content-center pt-3">
            <h1 className="mb-5 display-3 pt-3">Search through 280,000+ recipes</h1>
            <SearchInputs changeState={this.changeState}/>
          </Row>
            <br />
            <br />
            <br />
          <Row className="d-flex justify-content-center">
            <SearchResults recipes={this.props.searchResults}/>
          </Row>
          <Row className="d-flex justify-content-center mt-5">
            <p>Can't find what you want? Try adding search terms, like "Chicken Breast" instead of "Chicken."</p>
          </Row>
        </Container>
      </div>
      </>
    )
  }
}


let mapStateToProps = (state) =>{
  return {
      searchResults: state.searchResults
  }
}

export default connect(mapStateToProps, null)(Search)

