import React, { Component } from 'react';
//Components
import IdCard from './card/idCard';
import CreditCards from './creditCard/CreditCards'
import Rating from './rating/Rating'

//JSON files - data
const students = require('./data/berlin.json')
const creditCards = require('./data/creditCard.json')

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      isLoading: true,
      ratings: [0,1.49,1.5,3,4,5],
      students,
      creditCards,
      error: null
    }
  }

 
  render() {
    // eslint-disable-next-line 
    const { isLoading, students, error, ratings } = this.state;
    return (
      <div className="App">
        <IdCard students={students}/>
        <CreditCards  creditCards={creditCards}/>
        <Rating ratings={ratings}/>
      </div>
    );
  }
}

export default App;
