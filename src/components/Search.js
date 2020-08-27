import React, { Component } from 'react'
import SearchInputs from './SearchInputs'
import SearchResults from './SearchResults'
import {Container} from 'react-bootstrap'
import APIkey from "../APIkeys"


class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cuisineType: "",
            searchTerms: "",
            mealType: ""
        };
      }
    
    componentDidMount = () =>{
        let URL = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${APIkey}&cuisine=italian`
        const getStuff = async () =>{
            try {
                let response = await fetch(URL);
                let results = await response.json()
                console.log(results.results)
            }
            catch (error) {
                console.log("didn't work!")
                console.log(error)
            }
        }
        
        
        getStuff()
    }


  render() {
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
}

export default Search

