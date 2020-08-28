import React, { Component } from 'react'
import SearchInputs from './SearchInputs'
import SearchResults from './SearchResults'
import {Container, Row} from 'react-bootstrap'
import APIkey from "../APIkeys"
import data from '../utils/data'
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
    console.log("ReRendering")
    return (
      <>
        <Container>
            <h3 className="m-5">Here's the search page</h3>
            <SearchInputs changeState={this.changeState}/>
            <br />
            <br />
            <br />
            <Row>
                <SearchResults recipes={this.props.searchResults}/>
            </Row>
        </Container>
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

