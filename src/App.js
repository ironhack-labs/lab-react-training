import React from 'react';
// Styling
import 'bootstrap/dist/css/bootstrap.min.css';

// Components
import Navbar from './components/navbar/Nabvar'

// Page - Views Components
import IndexPage from './components/pages-views/index/IndexPage'
import StudentsPage from './components/pages-views/students-index/StudentsIndex'

// RRD Components
import {Switch, Route} from 'react-router-dom'
import Greetings from './components/greetings/Greetings';
import Random from './components/random/Random'



const App = () => {
    return (
      <>
        <Navbar />

        <Switch>
        <Route path='/' exact component={IndexPage} />
          <Route path='/idCards' exact component={StudentsPage} />
        </Switch>

       <Greetings lang="en"/>
       <Greetings lang="fr"/>
       <Greetings lang="sp"/>

       <Random min="2" max="6" />
      </>
    );
  }

export default App;
