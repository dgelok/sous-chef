const initialState = {
    searchResults: [],
    shoppingList: []
}

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
        default :
            return state
    }
}

export default reducer