import React from 'react'
import RecipeCard from './RecipeCard'
// import data from '../utils/data'

const SearchResults = (props) => {
    
    let myCards;
    console.log(props.recipes)
    if (props.recipes.length === 0) {
        myCards = "...waiting"
    } 
    else {
        myCards = props.recipes.map((r, index) =>{
            return <RecipeCard key={index} recipe={r}/>
        })
    }
    

    return (
    <>
      {myCards}

    </>
  )
}

export default SearchResults
