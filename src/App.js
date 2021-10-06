import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Nav from './common/Nav';
import Iteration1 from './components/Iteration1';
import Iteration2 from './components/iteration2';
import Iteration3 from './components/iteration3';

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/iteration1">
          <Iteration1 />
        </Route>
        <Route path="/iteration2">
          <Iteration2 />
        </Route>
        <Route path="/iteration3">
          <Iteration3 />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
