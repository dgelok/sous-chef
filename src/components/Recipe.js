import React, {useEffect} from 'react'
import {useSelector} from 'react-redux'
import {Jumbotron, Button, Row, Col} from 'react-bootstrap'
import {useDispatch} from 'react-redux'
import {addRecipeToShopping, addToIngredientsList} from '../actions/actions'
import '../css/search.css'
import {v1 as uuidv1} from 'uuid'


const Recipe = () => {


  let dispatch = useDispatch()
  let myIngredients = useSelector(state => state.ingredientsList)
  let newIngredientsParser = (recipe) =>{
    // const myIngredients = useSelector(state => state.ingredientsList)
    // console.log("so far so good")
    // console.log(recipe)
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

  let handleClick = () =>{
    dispatch(addRecipeToShopping(myRecipe))
    newIngredientsParser(myRecipe)
    console.log("A recipe was added to the shopping list")
  }
  const myRecipe = useSelector(state => state.individualRecipe)
  
  useEffect(()=>{window.scrollTo(0,0)}, [])

  //stole this from StackOverflow -- converts API string into valid HTML.
  const renderHTMLContent = (htmlContent) =>
  React.createElement('div', {
    dangerouslySetInnerHTML: { __html: htmlContent},
  });

  let summary = renderHTMLContent(myRecipe.summary)

  let steps;
  if (myRecipe.analyzedInstructions.length === 0) {
    steps = "no instructions to display!"
  }
  else {
    steps = myRecipe.analyzedInstructions[0].steps.map((s, index)=>{
      return <li key={index}>{s.step}</li>
    })
  }

  return (
    <>
      <div className="bgImage2" id="first">
      <Jumbotron className="">
        <h1 className="display-3">{myRecipe.title}</h1>
        <br />
        <img src={myRecipe.image} alt="pic of the recipe"/>
        <p>
          <Button className="m-4" variant="primary" onClick={handleClick}>Add to Shopping List</Button>
        </p>
        {summary}
      </Jumbotron>

      <Row className="d-flex justify-content-center">
        <Col className='col-5'>
          <ol>
            {steps}
          </ol>
        </Col>
        <Col className='col-5'>
          <ul>
            {myRecipe.extendedIngredients.map((r, index) =>{
              return <li key={index}>{r.amount} {r.unit} {r.name}</li>
            })}
          </ul>
        </Col>
      </Row>
      </div>
          </>
  )
}

export default Recipe
