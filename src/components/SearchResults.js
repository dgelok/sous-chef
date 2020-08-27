import React from 'react'
import RecipeCard from './RecipeCard'
import data from '../utils/data'

const SearchResults = (props) => {
    
    let myCards = data.map((r, index) =>{
        return <RecipeCard key={index} recipe={r}/>

    })
    

    return (
    <>
      {myCards}

    </>
  )
}

export default SearchResults
