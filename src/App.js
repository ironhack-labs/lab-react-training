import React, { Component } from 'react';
//Components
import IdCard from './card/idCard';
import CreditCards from './creditCard/CreditCards'
import Rating from './rating/Rating'
import DriverCard from './driverCard/DriverCard'
import LikeButtons from './likeButton/LikeButtons'
import ClickablePicture from './clickablePicture/ClickablePicture'
import Dice from './dice/Dice'
import Carousel from './carousel/Carousel'
import NumbersTable from './numbersTable/NumbersTable'
import Facebook from './facebook/Facebook'
import SignupPage from './signupPage/SignupPage'
import AddStudent from './addStudent/AddStudent'
import TextareaAndSelectTagDemo from './textareaAndSelectTagDemo/TextareaAndSelect'

//JSON files - data
import students from './data/berlin.json'
// const students = require('./data/berlin.json')
import creditCards from './data/creditCard.json'
// const creditCards = require('./data/creditCard.json')
import drivers from './data/drivers.json'
// const drivers = require('./data/drivers.json')
import diceArr from './data/dice.json'
// const diceArr = require('./data/dice.json')

const colors = ['purple','blue','green','yellow','orange','red'];

class App extends Component {

  constructor(props){
    super(props);
    //making array of uniq countries
    this.countries = new Set(students.map(st=> st.country))
    
    this.state = {
      isLoading: true,
      isValidEmail : {
        status: undefined,
        msg: 'We\'ll never share your email with anyone else'
      },
      greetings: '',
      dice: diceArr[0],
      selectedCountry:'',
      diceArr,
      image: './img/persons/maxence.png',
      ratings: [0,1.49,1.5,3,4,5],
      students,
      drivers,
      creditCards,
      colors:{
        color1: colors[0],
        color2: colors[0]
      },
     counters: {
      count1:0,
      count2:0,
     },
      error: null
    }
  }
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=--=-=-=-
  randomColor(){
    return colors[Math.floor(Math.random()*colors.length)]
  }
  randomDice(){
    return diceArr[Math.floor(Math.random()*diceArr.length)]
  }
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=--=-=-=-
   counter =(id)=>{
     const {counters,colors}= this.state
   if(id === 'like'){
    this.setState({
      counters: {
        count1: counters.count1 +1,
        count2: counters.count2,
      },
      colors: {
        color1: this.randomColor(),
        color2: colors.color2
  
      }
      })
   }
   if(id === 'dislike'){
    this.setState({
      counters: {
        count1: counters.count1,
        count2: counters.count2 +1,
      },
      colors: {
        color1: colors.color1,
        color2: this.randomColor(),
      }
      })
   }
  }
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=--=-=-=-
  changeImg(){
    const {image} = this.state
    this.setState({
      image: image === './img/persons/maxence.png'? './img/persons/maxence-glasses.png': './img/persons/maxence.png'
    })
  }
 //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=--=-=-=-
 getRandomDice(){
   this.setState({
     dice: this.randomDice()
    })
  }
  //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=--=-=-=-
  findCountry(e){
    const selectedCountry = e.target.innerText
    console.log("selectedCountry", selectedCountry)
    this.setState({
      selectedCountry
    })
    // const selectedCountries = profile.filter(student => student.country === country)
  }
  //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=--=-=-=-
  handleChange = (e)=>{
    const {value} = e.target

    this.validateEmail(value) ? this.setState({ isValidEmail: {status: true, msg: 'You typed a valid email'}}) : this.setState({ isValidEmail:  {status: false, msg: 'You typed  invalid email'}})
    
  }
  validateEmail(email) {
        // eslint-disable-next-line
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
      }
      handleSubmit = (e)  => {
        e.preventDefault()
        // eslint-disable-next-line
        let myInput = document.getElementById("exampleInputPassword1");
        let selectOption = document.querySelectorAll("#exampleInputNationality1 option");
        console.log(selectOption)
      }
  //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=--=-=-=-
  addTheStudent(theStudent){
    const studentsCopy = [...this.state.students]
    studentsCopy.push(theStudent)
    this.setState({
      students: studentsCopy
    })
  }
  render() {
    // eslint-disable-next-line
    
    const { students, ratings, drivers, colors, counters, image, dice, selectedCountry, isValidEmail, greetings } = this.state;
    return (
      <div className="App">
        <IdCard students={students}/>
        <CreditCards  creditCards={creditCards}/>
        <Rating ratings={ratings}/>
        <DriverCard  drivers={drivers}/>
        <LikeButtons colors={colors} counters={counters} onClick={(e)=> {
          const {id}= e.target
          this.counter(id)
        }}/>
        <ClickablePicture changeImg={()=>this.changeImg()} imgSrc = {image} />
        <Dice dice={dice} getRandomDice={()=> this.getRandomDice()}/>
        <Carousel students={students} />
        <NumbersTable limit= {12} />
        <Facebook countries={this.countries} students={students}  findCountry={(e)=> this.findCountry(e)} country={selectedCountry}/>
        <SignupPage handleChange={(e)=> this.handleChange(e)} handleSubmit={e=> this.handleSubmit(e)} isValidEmail={isValidEmail} greetings={greetings}/> 
        <AddStudent  addTheStudent={this.addTheStudent.bind(this)}/>
        {/* or => */}
        {/* <AddStudent  addTheStudent={(theStudent)=> this.addTheStudent(theStudent)}/> */}
        <TextareaAndSelectTagDemo />
      </div>
    );

  }
}

export default App;
