# SousChef


SousChef is your personalized recipe planning and shopping assistant! Search through over 380,000 different recipes, pick the ones you want to create, and SousChef will give you an itemized shopping list, ordered by grocery aisle.

SousChef was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).   



<img src="public/demo.gif">
  
  
    
     

## How it works:

Using the Redux/React framework, the entire site is under the control of a single router and assembled using React components. Search queries are sent to the Spoonacular API, returning a list of potential recipes or detailed information for a particular recipe. Search results are stored in and passed from state via both class-based components (mapStateToProps) and hooks (useState), depending on the component. 

State stores the most recent search results, a list of recipes (selected by the user), advanced detail for one particular recipe (looked up by user) and a list of ingredients filtered from the selected recipes. 

Design is enabled utilizing a combination of CSS and Bootstrap. 



## Tools used in the project:

#### Languages:
<ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript (via Node.js)</li>
    <li>XML</li>
</ul>

#### Modules (for Node.js)
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

#### Other
<ul>
    <li>Node.js</li>
    <li>Postman</li>
    <li>Bootstrap</li>
</ul>

#### APIs 
<ul>
    <li>Spoonacular API - https://spoonacular.com/food-api</li>
</ul>

## Goals

#### Base Goals
<ul>
    <li>Gain familiarity with Redux</li>
    <li>Grow in familiarity with React</li>
    <li>Use bootstrap and react-bootstrap for layout and UI</li>
    <li>Users can search recipes, refining searches by keyword, cusine, and type of dish</li>
    <li>Users can save favorited recipes</li>
    <li>Users are given an organized grocery list</li>
</ul>

#### Stretch Goals Completed

<ul>
    <li>Grocery list can delete items that users do not need, or restore all items if needed</li>
    <li>Grocery list is organized by aisle</li>
</ul>

#### Future Goals 

## Challenges and Solutions

## Code Snippets

