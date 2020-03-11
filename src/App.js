import React, { Component } from 'react';
//Components
import IdCard from './card/idCard';
import CreditCards from './creditCard/CreditCards'
import Rating from './rating/Rating'
import DriverCard from './driverCard/DriverCard'
import LikeButtons from './likeButton/LikeButtons'
import ClickablePicture from './clickablePicture/ClickablePicture'

//JSON files - data
const students = require('./data/berlin.json')
const creditCards = require('./data/creditCard.json')
const drivers = require('./data/drivers.json')

const colors = ['purple','blue','green','yellow','orange','red'];


console.log("Output for: imgSrc")

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      isLoading: true,
      image: './img/persons/maxence.png',
      ratings: [0,1.49,1.5,3,4,5],
      students,
      drivers,
      creditCards,
      colors:{
        color1: colors[Math.floor(Math.random()*colors.length)],
        color2: colors[Math.floor(Math.random()*colors.length)]
      },
     counters: {
      count1:0,
      count2:0,
     },
      error: null
    }
  }

   counter1 =()=>{
    this.setState({
    counters: {
      count1: this.state.counters.count1 +1,
      count2: this.state.counters.count2,
    },
    colors: {
      color1: colors[Math.floor(Math.random()*colors.length)],
      color2: this.state.colors.color2

    }
    })
  }
   counter2 =()=>{
    this.setState({
    counters: {
      count1: this.state.counters.count1,
      count2: this.state.counters.count2 +1,
    },
    colors: {
      color1: this.state.colors.color1,
      color2: colors[Math.floor(Math.random()*colors.length)],

    }

    })
  }

  changeImg(){
    const {image} = this.state
    this.setState({
      image: image === './img/persons/maxence.png'? './img/persons/maxence-glasses.png': './img/persons/maxence.png'
    })
  }
 
  render() {
    // eslint-disable-next-line 
    const { students, ratings, drivers, colors, counters, image } = this.state;
    return (
      <div className="App">
        <IdCard students={students}/>
        <CreditCards  creditCards={creditCards}/>
        <Rating ratings={ratings}/>
        <DriverCard  drivers={drivers}/>
        <LikeButtons colors={colors} counters={counters} onClick={(e)=> {
          console.log(e.target.id)
          e.target.id === 'likes1' ? this.counter1() : this.counter2()
        }}/>
        <ClickablePicture changeImg={()=>this.changeImg()} imgSrc = {image} />
      </div>
    );
  }
}

export default App;
