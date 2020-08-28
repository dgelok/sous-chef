import React from 'react'
import {useSelector} from 'react-redux'
import {Jumbotron, Button, Row, Col} from 'react-bootstrap'
import {useDispatch} from 'react-redux'
import {addRecipeToShopping} from '../actions/actions'


const Recipe = () => {

  let dispatch = useDispatch()

  let handleClick = () =>{
    dispatch(addRecipeToShopping(myRecipe))
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
        <img src={myRecipe.image} />
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
