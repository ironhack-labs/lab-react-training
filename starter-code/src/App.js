import React, { Component } from 'react';
import IdCard from './components/id-card-component/id-card';
import './App.css';
import Greetings from './components/greetings-component/greetings';
import Random from './components/rondom-component/random';
import BoxColor from './components/box-color-component/box-color';
import CreditCard from './components/credit-card-component/credit-card';
import Rating from './components/rating-component/rating';
import DriverCard from './components/driver-card-component/driver-card';
import LikeButton from './components/like-button-component/like-button';
import ClickablePicture from './components/clickable-picture-component/clickable-picture';
import Maxence from './img/persons/maxence.png';
import MaxenceWithGlass from './img/persons/maxence-glasses.png';
import Dice from './components/dice-component/dice';
import DiceImg1 from './img/dice1.png';
import DiceImg2 from './img/dice2.png';
import DiceImg3 from './img/dice3.png';
import DiceImg4 from './img/dice4.png';
import DiceImg5 from './img/dice5.png';
import DiceImg6 from './img/dice6.png';
import Carousal from './components/carousal-component/carousal';
import NumbersTable from './components/numbers-table-component/numbers-table';
import Facebook from './components/facebook-component/facebook';

class App extends Component {
 constructor(props){
   super(props);
   this.state = {
     likes: '11',
     startNo:'0',
     startNum:'0',
     likesDiff:'5',
     likeColor:{backgroundColor:'brown'},
     likeColorAnother:{backgroundColor:'blue'},
     img:Maxence,
     imgClicked:MaxenceWithGlass,
     diceImg:[DiceImg1,DiceImg2,DiceImg3,DiceImg4,DiceImg5,DiceImg6],
     selectedDice:DiceImg1,
     imgsCar:["https://randomuser.me/api/portraits/women/1.jpg", "https://randomuser.me/api/portraits/men/1.jpg","https://randomuser.me/api/portraits/women/2.jpg", "https://randomuser.me/api/portraits/men/2.jpg"],
     imgCarousal:"https://randomuser.me/api/portraits/women/1.jpg"
   }
 }
 
setStartNo = (likes,val) => {
  if(val < Number(likes)) {
    console.log(val);
    if(likes === this.state.likes) {
      this.setState({
        startNo: (++val).toString()
    })
    this.setStyle();
    } else {
      this.setState({
        startNum: (++val).toString()
    })
    this.setStyleAnotherClass();
    } 
    
  }
}
setStyle = () => {
  let col = ['red','green','blue','yellow','grey','orange','pink','purple','magenta','tomato','dark-blue']
  this.setState({
      likeColor:{backgroundColor:`${col[Math.floor(Math.random()*col.length)+1]}`}
  },()=>{
    console.log(this.state.likeColor);
  })
 
}
setStyleAnotherClass = () => {
  let col = ['red','green','blue','yellow','grey','orange','pink','purple','magenta','tomato','dark-blue']
  this.setState({
      likeColorAnother:{backgroundColor:`${col[Math.floor(Math.random()*col.length)+1]}`}
  },()=>{
    console.log(this.state.likeColorAnother);
  })
}
changePic = (val) => {
if(this.state.img === val) {
  let temp = this.state.img;
  this.setState({
    img: this.state.imgClicked,
    imgClicked: temp
  })
} 
}
randomRoll = () => {
  let random = Math.floor(Math.random()*this.state.diceImg.length);
  this.setState({
    selectedDice:this.state.diceImg[random]
  })

}
changeImg = () => {
  let randCar;
  setTimeout(() => {
  randCar = Math.floor(Math.random()*this.state.imgsCar.length);
  this.setState({
    imgCarousal:this.state.imgsCar[randCar]
  })
},4000)
  
    
}
goPrev = (prev) => {

console.log(this.state.imgCarousal)
  this.setState({
    imgCarousal:prev
  })
}
goNext = () => {
  
  this.changeImg();
}

  render() {
    return (
      <div className="App">
       
        {/* TODO: Use the IdCard component */}
        <div className="id-cards">
            <h1>IdCard</h1>
            <IdCard lastName='Doe'
                    firstName='John'
                    gender='male'
                    height={178}
                    birth={new Date("1992-07-14")}
                    picture="https://randomuser.me/api/portraits/men/44.jpg"/>
            <IdCard lastName='Delores '
                    firstName='Obrien'
                    gender='female'
                    height={172}
                    birth={new Date("1988-05-11")}
                    picture="https://randomuser.me/api/portraits/women/44.jpg"
            />
        </div>
        <div className="greetings">
            <h2>Greetings</h2>
              {/* TODO: Use the Greetings component */}
             <Greetings lang="de" children="Ludwig" />
             <Greetings lang="fr" children="François" />
        </div>
        <div className="randoms">
            <h2>Randoms</h2>
            <Random min={1} max={6}/>
            <Random min={1} max={100}/>
        </div>
        <div className="box-colors">
            <h2>BoxColors</h2>
            <BoxColor r={255} g={0} b={0} />
            <BoxColor r={128} g={255} b={0} />
       </div>
       <h2>Credit cards</h2>
       <div className="credit-cards">
          <CreditCard 
            type="Visa"
            number="0123456789018845"
            expirationMonth={3}
            expirationYear={2021}
            bank="BNP"
            owner="Maxence Bouret"
            bgColor="#11aa99"
            color="white" />
         <CreditCard 
            type="Master Card"
            number="0123456789010995"
            expirationMonth={3}
            expirationYear={2021}
            bank="N26"
            owner="Maxence Bouret"
            bgColor="#eeeeee"
            color="#222222" />
         <CreditCard 
            type="Visa"
            number="0123456789016984"
            expirationMonth={12}
            expirationYear={2019}
            bank="Name of the Bank"
            owner="Firstname Lastname"
            bgColor="#ddbb55"
            color="white" />
       </div>
       <div>
          <Rating rate = '0'></Rating>
          <Rating rate = '1.49'></Rating>
          <Rating rate = '1.5'></Rating>
          <Rating rate = '3'></Rating>
          <Rating rate = '4'></Rating>
          <Rating rate = '5'></Rating>
       </div>
       <div className="driver-cards">
          <DriverCard 
              name="Travis Kalanick"
              rating={4.2}
              img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
              car={{
                   model: "Toyota Corolla Altis",
                   licensePlate: "CO42DE"
                  }} />
           <DriverCard 
              name="Dara Khosrowshahi"
              rating={4.9}
              img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
              car={{
                    model: "Audi A3",
                    licensePlate: "BE33ER"
                   }} />
        </div>
        <div className="like-buttons">
          <LikeButton likes = {this.state.likes} 
                      startNo={this.state.startNo} 
                      likeColor={this.state.likeColor}
                      setStartNo = {this.setStartNo}
                      setStyle = {this.setStyle}
                      /> 
          <LikeButton likes = {this.state.likesDiff}
                      startNo={this.state.startNum} 
                      likeColor={this.state.likeColorAnother}
                      setStartNo = {this.setStartNo}
                      setStyle = {this.setStyle}
          />
        </div>
        <div className="click-pic">
           <ClickablePicture
             img={this.state.img}
             imgClicked={this.state.imgClicked}
             changePic = {this.changePic} />
        </div>
        <div className="dice">
          <Dice diceImg = {this.state.diceImg}
                selectedDice = {this.state.selectedDice}
                randomRoll = {this.randomRoll}
          />
        </div>
        <div className="carousal">
        <Carousal
            imgsCar={this.state.imgsCar}
            imgCarousal = {this.state.imgCarousal}
            changeImg = {this.changeImg} 
              goPrev = {this.goPrev}
              goNext = {this.goPrev}
            />
        </div>
        <br />
        <div className="numbers-table">
          <NumbersTable limit={12} 
          /> 
        </div>
        <br />
        <br />
        <br />
        <div className="facebook">
          <Facebook />
        </div>
      </div>
    );
  }
}

export default App;
