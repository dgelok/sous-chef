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
          {myRecipe.instructions}
        </Col>
        <Col>
        <ul>
          <li>ingredient here</li>
          <li>ingredient here</li>
          <li>ingredient here</li>
        </ul>
        </Col>
      </Row>

          </>
  )
}

export default Recipe
