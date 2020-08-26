const initialState = {
    recipes: [],
    searchResults: [],
    groceryList: []
}

let reducer = (state=initialState, action) =>{
    switch (action.type) {
        case "ADD_RECIPE" :
            return {
                ...state,
                recipes: state.recipes.concat(action.newRecipe)
            };
        case "REMOVE_RECIPE" :
            return {
                ...state,
                recipes: state.recipes.filter(n =>{
                    return n.id != action.dropRecipe.id
                })
            };
        default :
            return state
    }
}

export default reducer