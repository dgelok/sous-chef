import React from 'react'
import {useSelector} from 'react-redux'
import {Jumbotron, Button, Row, Col} from 'react-bootstrap'
import {useDispatch} from 'react-redux'
import {addRecipeToShopping, addToIngredientsList} from '../actions/actions'


const Recipe = () => {


  let dispatch = useDispatch()
  let myIngredients = useSelector(state => state.ingredientsList)
  let newIngredientsParser = (recipe) =>{
    // const myIngredients = useSelector(state => state.ingredientsList)
    console.log("so far so good")
    console.log(recipe)
    for (let i of recipe.extendedIngredients) {
            console.log(i)
            myIngredients.push({
                aisle: i.aisle,
                amount: i.amount,
                unit: i.unit,
                name: i.name,
                id: recipe.id
            })
      }
    dispatch(addToIngredientsList(myIngredients))
  }

  let handleClick = () =>{
    dispatch(addRecipeToShopping(myRecipe))
    newIngredientsParser(myRecipe)
  }
  const myRecipe = useSelector(state => state.individualRecipe)
  
  //stole this from StackOverflow -- converts API string into valid HTML.
  const renderHTMLContent = (htmlContent) =>
  React.createElement('div', {
    dangerouslySetInnerHTML: { __html: htmlContent},
  });

  let summary = renderHTMLContent(myRecipe.summary)

  return (
    <>
      
      <Jumbotron className="">
        <h1>{myRecipe.title}</h1>
        <br />
        <img src={myRecipe.image} alt="pic of the recipe"/>
        <p>
          <Button className="m-2" variant="primary" onClick={handleClick}>Add to Shopping List</Button>
        </p>
        {summary}
      </Jumbotron>

      <Row>
        <Col>
          <ol>
            {myRecipe.analyzedInstructions[0].steps.map((s, index)=>{
              return <li key={index}>{s.step}</li>
            })}
          </ol>
        </Col>
        <Col>
          <ul>
            {myRecipe.extendedIngredients.map((r, index) =>{
              return <li key={index}>{r.amount} {r.unit} {r.name}</li>
            })}
          </ul>
        </Col>
      </Row>

          </>
  )
}

export default Recipe
