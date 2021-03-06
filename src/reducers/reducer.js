const initialState = {
    searchResults: [],
    shoppingList: [],
    individualRecipe: {},
    ingredientsList: []
}
// input form
// counter

let reducer = (state=initialState, action) =>{
    switch (action.type) {
        case "ADD_RECIPE_TO_SHOPPING" :
            return {
                ...state,
                shoppingList: state.shoppingList.concat(action.recipe)
            };
        case "DELETE_RECIPE_FROM_SHOPPING" :
            return {
                ...state,
                shoppingList: state.shoppingList.filter(n =>{
                    return n.id !== action.recipe.id
                })
            };
        case "UPDATE_SEARCH_RESULTS" :
            return {
                ...state,
                searchResults: [...action.recipes]
            }
        case "SET_INDIVIDUAL_RECIPE" :
            return {
                ...state,
                individualRecipe: action.recipe
            }
        case "ADD_TO_INGREDIENTS_LIST" :
            return {
                ...state,
                ingredientsList: action.ingredients
            }
        case "DELETE_FROM_INGREDIENTS_LIST" :
            // do stuff
            return {
                ...state,
                ingredientsList: state.ingredientsList.filter(n =>{
                    return n.id !== action.recipe.id
                })
            }
        case "HIDE_INGREDIENT" :
            let newIngredients = state.ingredientsList.map(n =>{
                if (n.uuid === action.uuid) {
                    n.isvisible = false
                }
                return n
            })
            return {
                ...state,
                ingredientsList: newIngredients
            }
            
        case "SHOW_INGREDIENTS" :
            return {
                ...state,
                ingredientsList: state.ingredientsList.map(n =>{
                    n.isvisible = true;
                    return n
                })
            }
        default :
            return state
    }
}

export default reducer