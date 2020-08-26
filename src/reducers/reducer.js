const initialState = {
    key: true
}

let reducer = (state=initialState, action) =>{
    switch (action.type) {
        case "ADD" :
            return state
        default :
            return state
    }
}

export default reducer