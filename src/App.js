import React, { Component } from 'react';
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



const App = () => {
    return (
      <>
        <Navbar />

        <Switch>
        <Route path='/' exact component={IndexPage} />
          <Route path='/idCards' exact component={StudentsPage} />
        </Switch>

       <Greetings lang="de"/>
       <Greetings lang="fr"/>
        
      </>
    );
  }

export default App;
