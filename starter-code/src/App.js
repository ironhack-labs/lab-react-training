import React, { Component } from 'react';
import IdCard from "./components/IdCard"
import Random from "./components/Random"
import BoxColor from "./components/BoxColor"
import CreditCard from "./components/CreditCard"
import Rating from "./components/Rating"
import DriverCard from "./components/DriverCard"
import Greetings from "./components/Greetings"
import LikeButton from "./components/LikeButton"
import ClickablePicture from  "./components/ClickablePicture"
import Dice from  "./components/Dice"
import Carousel from  "./components/Carousel"


import data from './data/berlin.json'

class App extends Component {
  state = {
    dataPeople: data,
    count: 0,
    count2:0,
    imgChange: true,
    diceState: "/img/dice-empty.png",
    carousel: 0
  }

  increment = () => {
    const { count } = this.state 
    this.setState({ count: count + 1 })
  }
  increment2 = () => {
    const { count2 } = this.state 
    this.setState({ count2: count2 + 1 })
  }
 
  changeGeaorge = () => {
    this.setState({imgChange: !this.state.imgChange})
  }

  changeDice = () => {
    let randomNum = Math.floor(Math.random() * 5)+1
    let imageAdress = `/img/dice${randomNum}.png`

    console.log(imageAdress)
    setTimeout(()=> {
      this.setState({ diceState: imageAdress})
    },3000)
  }

  nextCarousel = (step) => {
    const { carousel } = this.state
    if (step === "left") {
      if (this.state.carousel === 0) {
        return this.setState({ carousel: 3 })
      }
      return this.setState({ carousel: carousel - 1 })
    } else {
      if (this.state.carousel === 3) {
        return this.setState({ carousel: 0 })
      }
      return this.setState({ carousel: carousel + 1 })
    }
  }

  render() {
    return (
      <div className="App">
        <h1>IdCard</h1>
        <IdCard 
          lastName='Doe'
          firstName='John'
          gender='male'
          height={178}
          birth={new Date("1992-07-14")}
          picture="https://randomuser.me/api/portraits/men/44.jpg"
        />
        <IdCard 
          lastName='Delores '
          firstName='Obrien'
          gender='female'
          height={172}
          birth={new Date("1988-05-11")}
          picture="https://randomuser.me/api/portraits/women/44.jpg"
        />
     
        <h1>Greetings</h1>
        <Greetings lang="de"> Ludwig</Greetings>
        <Greetings lang="fr"> François</Greetings>

        <h1>Random</h1>
        <Random min={1} max={6}/>
        <Random min={1} max={100}/>


      <h2>Colors</h2>
      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />

      <h2>Credit cards</h2>
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

        <h2>Stars</h2>
        <Rating>0</Rating>
        <Rating>1.49</Rating>
        <Rating>1.5</Rating>
        <Rating>3</Rating>
        <Rating>4</Rating>
        <Rating>5</Rating>

        <h2>Driver Card</h2>
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

          <h2>Clicable button</h2>
          <LikeButton increment={this.increment} count={this.state.count}/> 
          <LikeButton increment={this.increment2} count={this.state.count2}/> 

          <ClickablePicture
            changeGeaorge={this.changeGeaorge}
            imgChange={this.state.imgChange}
            img="/img/persons/maxence.png"
            imgClicked="/img/persons/maxence-glasses.png" />

          <Dice
          diceState={this.state.diceState}
          changeDice={this.changeDice}
           />

          <Carousel
            step={this.state.carousel}
            change={this.nextCarousel}
            imgs={["https://randomuser.me/api/portraits/women/1.jpg", "https://randomuser.me/api/portraits/men/1.jpg","https://randomuser.me/api/portraits/women/2.jpg", "https://randomuser.me/api/portraits/men/2.jpg"]} />

            

      </div>

  
    );
  }
}

export default App;
