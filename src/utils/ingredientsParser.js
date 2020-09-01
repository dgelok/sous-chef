

export let newIngredientsParser = (recipe) =>{
    let newIngredients = {}
    for (let i in recipe.extendedIngredients) {
        if (newIngredients[i.aisle] === undefined) {
            newIngredients[i.aisle] = [{
                amount: i.amount,
                unit: i.unit,
                name: i.name,
                id: i.id
            }]
        }
        else {
            newIngredients[i.aisle].push({
                amount: i.amount,
                unit: i.unit,
                name: i.name,
                id: i.id
            })
        }
    }
}

export let ingredientsParser = (groceries) =>{
    console.log(groceries)
    let rawList = []
    for (let i = 0; i < groceries.length; i++) {
        let add = [...groceries[i].extendedIngredients]
        rawList = [...rawList, ...add]
    }
    // console.log(rawList)
    
    let groceryList = {};

    for (let item of rawList) {
        if (groceryList[item.aisle] === undefined) {
            groceryList[item.aisle] = [
                [`${item.amount} ${item.unit} ${item.name}`]
            ]
        }
        else {
            groceryList[item.aisle].push([`${item.amount} ${item.unit} ${item.name}`])
        }
    }

    
    return groceryList

}