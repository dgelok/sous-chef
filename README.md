# SousChef


SousChef is your personalized recipe planning and shopping assistant! Search through over 380,000 different recipes, pick the ones you want to create, and SousChef will give you an itemized shopping list, ordered by grocery aisle.

SousChef was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).   



<img src="public/demo.gif">
  
  
    
     

## How it works:

Using the Redux/React framework, the entire site is under the control of a single router and assembled using React components. Search queries are sent to the Spoonacular API, returning a list of potential recipes or detailed information for a particular recipe. Search results are stored in and passed from state via both class-based components (mapStateToProps) and hooks (useState), depending on the component. 

State stores the most recent search results, a list of recipes (selected by the user), advanced detail for one particular recipe (looked up by user) and a list of ingredients filtered from the selected recipes. 

Design is enabled utilizing a combination of CSS and Bootstrap. 



## Tools used in the project:

### Languages:
<ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript (via Node.js)</li>
    <li>XML</li>
</ul>

### Modules (for Node.js)
<ul>
    <li>react</li>
    <li>redux</li>
    <li>react-redux</li>
    <li>react-router</li>
    <li>react-router-dom</li>
    <li>react-dom</li>
    <li>bootstrap</li>
    <li>react-bootstrap</li>
    <li>uuid</li>
</ul>

### Other
<ul>
    <li>Node.js</li>
    <li>Postman</li>
    <li>Bootstrap</li>
    <li>Chrome Redux DevTools</li>
</ul>

### APIs 
<ul>
    <li>Spoonacular API - https://spoonacular.com/food-api</li>
</ul>

## Goals

### Base Goals
<ul>
    <li>Gain familiarity with Redux</li>
    <li>Grow in familiarity with React</li>
    <li>Use bootstrap and react-bootstrap for layout and UI</li>
    <li>Users can search recipes, refining searches by keyword, cusine, and type of dish</li>
    <li>Users can save favorited recipes</li>
    <li>Users are given an organized grocery list</li>
</ul>

### Stretch Goals Completed

<ul>
    <li>Grocery list can delete items that users do not need, or restore all items if needed</li>
    <li>Grocery list is organized by aisle</li>
</ul>

### Future Goals 

<ul>
    <li>Users can create their own recipes</li>
    <li>Users can store and update their pantry contents (ingredients they already have)</li>
    <li>Grocery list automatically adds similar ingredients together (1 tbsp soy sauce + 1 tbsp soy sauce will render as 2 tbsp soy sauce on grocery page)</li>
    <li>Irrelevant items (water, etc) are automatically removed from groceries, as are irrelevent measurements (1 dash pepper)</li>
</ul>

## Challenges and Solutions

#### Solo Project Planning:
After deciding on the project idea, instead of launching directly into development I took a couple hours to sketch out architecture, flow, and order. This preliminary plan allowed me to move through development much more smoothly, and was very important: previous projects of this size were handled by a team, and I needed to cover all bases for this one independently. 

Any snags were handled by referencing my notes, then google searching, and finally by asking for help from my teacher/TA. Particular thanks to [Veronica Lino](https://github.com/vlino2015) and [John Kearney](https://github.com/JohnKearney2020) for their assistance.  

#### Class vs Functional Components:
One primary goal of this project was to gain a more thorough understanding of React; ergo, I decided to use both class and functional components, utilizing both hooks and lifecycle methods. Took a little longer, but was worth it. 

#### API issues:
Spoonacular's API is amazing and wonderfully large, but contains significant inconsistencies in its data. Some recipes would store an ingredient in a different aisle, some measurements are inconsistently marked (tablespoon vs Tbsp), and some are inconsistently labeled (chicken thigh vs boneless chicken thigh vs boneless skinless chicken thigh). There were additional inconsistencies, but nevertheless I would maintain that Spoonacular has provided a great service to developers and I would continue to use it.

To fix this, I abandoned the goal of trying to add all similar ingredients together, and simply created an individual string which I rendered for the user. Recipes without instructions were rendered conditionally, and we provided a means to delete individual ingredients from the grocery list.

## Code Snippets

Async event handler: added data to state:

```
let myIngredients = useSelector(state => state.ingredientsList)
let newIngredientsParser = (recipe) =>{

    for (let i of recipe.extendedIngredients) {
            // console.log(i)
            myIngredients.push({
                aisle: i.aisle,
                amount: i.amount,
                unit: i.unit,
                name: i.name,
                id: recipe.id,
                isvisible: true,
                uuid: uuidv1()
            })
    }

    dispatch(addToIngredientsList(myIngredients))
}


let addRecipe = async (e) =>{
    e.preventDefault();
    let URL = `https://api.spoonacular.com/recipes/${props.recipe.id}/information?apiKey=${APIkey}`
    try {
        let response = await fetch(URL);
        let results = await response.json()
        dispatch(addRecipeToShopping(results))
        newIngredientsParser(results)
        
    }
    catch (error) {
        console.log("didn't work!")
        console.log(error)
    }
    
    console.log("A recipe was added to the shopping list")
}
```

Conditional rendering and react-bootstrap components:
```
return (
      redirect ?
      <Redirect to="/Recipe/" />
      :
    <>
        <Card style={{ width: '18rem' }} className="m-2">
            <Card.Img variant="top" src={props.recipe.image} />
            <Card.Body className="d-flex flex-column justify-content-between">
                <Card.Title>{props.recipe.title}</Card.Title>
                {/* <Card.Subtitle>{props.recipe.price}</Card.Subtitle>
                <Card.Text>{props.recipe.description}</Card.Text> */}
                <div>
                <Button variant="primary" className="m-1" onClick={addRecipe}>Add to List</Button>
                <Button variant="secondary" className="m-1" onClick={visitRecipe}>More Info</Button>
                </div>
            </Card.Body>
        </Card>
    </>
)
```

Bootstrap classes and custom components:
```
const ingredientCards = myKeys.map((aisle, index) =>{
    return <ShoppingCard key={index} name={aisle} items={ingObj[aisle]}/>
})

let cards;
if (myGroceries.length === 0) {
    cards = "No recipes selected yet. Try finding some new ones and adding them to your cart!"
  } 
else {
    cards = myGroceries.map((r, index) =>{
        return <GroceryCard key={index} recipe={r} />
    })
}

return (
    <>
        <div className="bgImage2">
            <Container>
                <Row className="m-0 d-flex justify-content-center">
                    <h1 className="display-3 p-4">Planned Recipes</h1>
                </Row>
                <Row className="m-1 d-flex justify-content-center">
                    {cards}
                </Row>
                <Row className="mt-5 d-flex justify-content-center">
                    <h1 className="display-3 p-3">Let's go Shopping!</h1>
                </Row>
                <Row className="mt-3 d-flex justify-content-center">
                    <Button className="m-3" onClick={showIngredientsButton}>Re-display all Items</Button>
                </Row>
                <Row className='d-flex justify-content-center'>
                    {ingredientCards}
                </Row>
            </Container>
        </div>
    </>
)
```