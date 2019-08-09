import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import RandomBeer from './pages/RandomBeer';
import ListBeer from './pages/ListBeer';
import Home from './pages/Home';
import NewBeer from './pages/NewBeer';
import SingleBeer from './pages/SingleBeer';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/beers' exact component={ListBeer} />
          <Route path='/beers/:id' exact component={SingleBeer} />
          <Route path='/random-beer' exact component={RandomBeer} />
          <Route path='/new-beer' exact component={NewBeer} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
