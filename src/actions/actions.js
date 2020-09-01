
export let addRecipeToShopping = (recipe) =>{
    return {
        type: "ADD_RECIPE_TO_SHOPPING",
        recipe: recipe
    }
}

export let deleteRecipeFromShopping = (recipe) =>{
    return {
        type: "DELETE_RECIPE_FROM_SHOPPING",
        recipe: recipe
    }
}

export let addToIngredientsList = (ingredients) =>{
    return {
        type: "ADD_TO_INGREDIENTS_LIST",
        ingredients: ingredients
    }
}

export let deleteFromIngredientsList = (recipe) =>{
    return {
        type: "DELETE_FROM_INGREDIENTS_LIST",
        recipe: recipe
    }
}

export let updateSearchResults = (recipes) =>{
    return {
        type: "UPDATE_SEARCH_RESULTS",
        recipes: recipes
    }
}

export let setIndividualRecipe = (recipe) =>{
    return {
        type: "SET_INDIVIDUAL_RECIPE",
        recipe: recipe
    }
}