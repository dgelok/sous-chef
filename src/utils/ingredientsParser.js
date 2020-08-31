

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