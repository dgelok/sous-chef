import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore} from 'redux';
import {BrowserRouter, Switch, Route, withRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import reducer from './reducers/reducer';
import BaseLayout from './components/layout/BaseLayout';
import Search from './components/Search';
import Groceries from './components/Groceries';
import Recipe from './components/Recipe';
import RecipeCard from './components/RecipeCard';


let saveToLocalStorage = (state) =>{

  try {
    const serializeState = JSON.stringify(state);

    localStorage.setItem('state', serializeState);
  }
  catch (error) {
    console.log("Couldn't save to local Storage")
    console.log(error)
  }
}

let loadFromLocalStorage = () =>{
  try {
    const serializeState = localStorage.getItem('state');
    if (serializeState == null) {
      return undefined;
    }
    else {
      let result = JSON.parse(serializeState)
      return result
    }
  }
  catch (error) {
    console.log("Couldn't load from local Storage")
    console.log(error)
  }
}

let persistedState = loadFromLocalStorage()

let store = createStore(reducer, persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

// this happens EVERY TIME THERE'S AN UPDATE TO THE REDUX STORE
store.subscribe(()=>{

  //call function, pass in the state
  saveToLocalStorage(store.getState())
})


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <BaseLayout>
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/Search" component={Search} />
          <Route exact path="/Recipe" component={Recipe} />
          <Route exact path="/Groceries" component={Groceries} />
          <Route exact path="/RecipeCard" component={RecipeCard} />
        </Switch>
      </BaseLayout>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

