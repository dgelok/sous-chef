import React from 'react'
import {useSelector} from 'react-redux'
import {Jumbotron, Button, Row, Col} from 'react-bootstrap'

const Recipe = () => {

  const myRecipe = useSelector(state => state.individualRecipe)
  
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
          <Button className="m-2" variant="primary">Add to Shopping List</Button>
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
