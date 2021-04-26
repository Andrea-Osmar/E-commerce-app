import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import './App.css';
import Homepage from './pages/homepage/homepage.component'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component= {Homepage} />
        </Switch>
      </BrowserRouter>
    </>
    )
}

export default App;
