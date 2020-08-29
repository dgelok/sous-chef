export let ingredientsParser = (groceries) =>{
    let rawList = []
    for (let i = 0; i < groceries.length; i++) {
        let add = [...groceries[i].extendedIngredients]
        rawList = [...rawList, ...add]
    }
    console.log(rawList)
    
    let midList = {}
    for (let k=0; k < rawList.length; k++) {
        if (rawList[k].name in midList) {
            console.log("there already")
        }
        else {
            console.log("not there yet")
        }
    }
}