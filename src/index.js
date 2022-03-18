import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router} from 'react-router-dom';
import './index.css';
import Home from './Home';
import Bar from "./Bar";

ReactDOM.render(
    <Router>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route exact path='/bar'>
        <Bar />
      </Route>
    </Router>
    ,
  document.getElementById('root')
);

