import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Nav from './common/Nav';
import Iteration1 from './components/Iteration1';
import Iteration2 from './components/iteration2';
import Iteration3 from './components/iteration3';
import Iteration4 from './components/iteration4';
import Iteration5 from './components/iteration5';
import Iteration6 from './components/iteration6';
import Iteration7 from './components/iteration7';

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
        <Route path="/iteration4">
          <Iteration4 />
        </Route>
        <Route path="/iteration5">
          <Iteration5 />
        </Route>
        <Route path="/iteration6">
          <Iteration6 />
        </Route>
        <Route path="/iteration7">
          <Iteration7 />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
