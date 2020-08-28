import React, { Component } from 'react'
import {Form, Button} from 'react-bootstrap'
import APIkey from "../APIkeys"
import { connect } from 'react-redux'
import {updateSearchResults} from '../actions/actions'

class SearchInputs extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
        loading: true
      }
    }

    handleClick = async (e) =>{
        e.preventDefault();
        // console.log(e.target.cuisine.value)
        // console.log(e.target.type.value)
        // console.log(e.target.keywords.value)

        let URL = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${APIkey}&cuisine=${e.target.cuisine.value}&number=50&query=${e.target.keywords.value}`
        try {
            let response = await fetch(URL);
            let results = await response.json()
            console.log(results.results)
            this.props.onSearchUpdate(results.results);
            console.log("Before change state")
            this.props.changeState()
            console.log("After change state")
        }
        catch (error) {
            console.log("didn't work!")
            console.log(error)
        }
    
        // call the prop (showRecipes(dataFromAPICall))
        // if it doesn't auto-refresh, create local state and put it in there too.
        // ...because this.setState() will trigger a re-render.
    }
    render() {
        return (
            <>
            <Form onSubmit={this.handleClick}>
                <Form.Row className="align-items-center m-2">
                    <Form.Group className="m-1" controlId="cuisine">
                        <Form.Label>Select Cuisine</Form.Label>
                        <Form.Control as="select" size="sm" custom>
                        <option>any</option>
                        <option>African</option>
                        <option>American</option>
                        <option>British</option>
                        <option>Cajun</option>
                        <option>Carribean</option>
                        <option>Chinese</option>
                        <option>Eastern European</option>
                        <option>European</option>
                        <option>French</option>
                        <option>German</option>
                        <option>Greek</option>
                        <option>Indian</option>
                        <option>Irish</option>
                        <option>Italian</option>
                        <option>Japanese</option>
                        <option>Jewish</option>
                        <option>Korean</option>
                        <option>Latin American</option>
                        <option>Mediterranean</option>
                        <option>Mexican</option>
                        <option>Middle Eastern</option>
                        <option>Nordic</option>
                        <option>Southern</option>
                        <option>Spanish</option>
                        <option>Thai</option>
                        <option>Vietnamese</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group className="m-1" controlId="type">
                        <Form.Label>Select Type</Form.Label>
                        <Form.Control as="select" size="sm" custom>
                        <option>any</option>
                        <option>Main Course</option>
                        <option>Side Dish</option>
                        <option>Dessert</option>
                        <option>Appetizer</option>
                        <option>Salad</option>
                        <option>Bread</option>
                        <option>Breakfast</option>
                        <option>Soup</option>
                        <option>Beverage</option>
                        <option>Sauce</option>
                        <option>Marinade</option>
                        <option>Fingerfood</option>
                        <option>Snack</option>
                        <option>Drink</option>
                        
                        
                        </Form.Control>
                    </Form.Group>
                    <Form.Group className="m-1" controlId="keywords">
                        <Form.Label>Search Terms</Form.Label>
                        <Form.Control size="sm" type="text" placeholder="any" />
                    </Form.Group>
                    
                    <Button type="submit" className="mt-4 ml-1">
                        Submit
                    </Button>
                </Form.Row>
            </Form>
            </>
        )
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onSearchUpdate: (recipes)=>dispatch(updateSearchResults(recipes))
    }
}

let mapStateToProps = (state) =>{
    return {
        searchResults: state.searchResults
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchInputs)
