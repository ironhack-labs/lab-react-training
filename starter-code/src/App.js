'use strict';

import React, { Component } from 'react';
import profiles from './data/berlin.json';
import 'bootstrap/dist/css/bootstrap.min.css';


const IdCard = props => {
  // function formatDate(date) { 
  //   const monthNames = [
  //     "January", "February", "March",
  //     "April", "May", "June", "July",
  //     "August", "September", "October",
  //     "November", "December"
  //   ];
  //   const day = date.getDate();
  //   const monthIndex = date.getMonth();
  //   const year = date.getFullYear();
  //   return `${day} ${monthNames[monthIndex]} ${}`
  // }
  return (<div className="profile-container">
    <img src={props.picture} alt={`${props.firstName} ${props.lastName}`}/>
    <div className="info">
      <h2><em>First name:</em> {props.firstName}</h2>
      <h2><em>Last name:</em> {props.lastName}</h2>
      <h2><em>Gender:</em> {props.gender}</h2>
      <h2><em>Height:</em> {props.height} cm</h2>
      <h2><em>Birth:</em> {props.birth.toDateString()}</h2>
    </div>
  </div>);
}

const Greetings = props => {
  const languageGreetings = {
    "de": "Hallo",
    "fr": "Bonjour",
    "es": "Hola",
    "en": "Hello",
  }
  return (<div className="profile-container">
    <h2>{languageGreetings[props.lang]} {props.children}</h2>
    </div>);
}


const Random = props => {
  const {min, max} = props;
  return (<div className="profile-container">
<h2>Random value between {min} and {max} => {Math.floor(Math.random()*(max-min+1)+min)}</h2>
  </div>);
}

const BoxColor = props => {
  const {r, g, b} = props;
  const componentToHex = (c) => {
    const hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }

  const rgbToHex = (r, g, b) => {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }

  const bgColor = { backgroundColor: `rgb(${r}, ${g}, ${b})` };
  return (<div className="box-color-card" style={bgColor}>
            <h4>{`rgb(${r}, ${g}, ${b})`}</h4>
            <h4>{rgbToHex(r, g, b)}</h4>
          </div>);
}

const CreditCard = props => {
  const { type, number, expirationMonth, expirationYear, bank, owner, bgColor, color} = props;
  const censoredNum = number.split('').map((num, index, arr) => {
    if (index < arr.length - 4) {
      return '●'
    }
    return num;
  }).join('');
  const cardLogos = {
    "Visa": "img/visa.png",
    "Master Card": "img/master-card.svg",
  }
  const colorStyle = { backgroundColor: bgColor, color: color };
  return (
    <div className="credit-card" style={colorStyle}>
      <div className="card-type"><img src={cardLogos[type]} height="30px" alt={type}/></div>
      <div className="card-num">
        <span className="censored-num">{censoredNum.slice(0, 4)}</span><span className="censored-num">{censoredNum.slice(4, 8)}</span><span className="censored-num">{censoredNum.slice(8, 12)}</span><span>{censoredNum.slice(12, 16)}</span>
      </div>
      <div className="card-info">
        <div>
          <h3 className="expiration">Expires {expirationMonth}/{expirationYear}</h3>
          <h3 className="bank">{bank}</h3>
        </div>
        <h3 className="card-holder">{owner}</h3>
      </div>
    </div>
  )
}

const Rating = props => {
  const { children } = props;
  const ratings = {
    '0': '☆☆☆☆☆',
    '1': '★☆☆☆☆',
    '2': '★★☆☆☆',
    '3': '★★★☆☆',
    '4': '★★★★☆',
    '5': '★★★★★',
  }
return (<div>{ratings[Math.round(children).toString()]}</div>);
}


const DriverCard = props => {
  const { name, rating, img, car } = props;
  return (
  <div className="driver-card">
    <div className="img-container">
      <img className="profile-img" src={img} alt={`${name} profile picture`}/>
    </div>
    <div className="driver-info">
      <h3 className="driver-name">{name}</h3>
      <Rating>{rating}</Rating>
      <h3 className="car-info"><span>{car.model}</span> - <span>{car.licensePlate}</span></h3>
    </div>
  </div>);
}

class LikeButton extends Component {
  state = {
    counter: 0,
    colorIndex: 0,
    colors: ['purple','blue','green','yellow','orange','red'],
  }

  handleClick = () => {
    console.log('click')
    let targetColorIndex = this.state.colorIndex + 1;
    if (targetColorIndex >= this.state.colors.length) {
      targetColorIndex = 0;
    }
    this.setState({
      counter: this.state.counter + 1,
      colorIndex: targetColorIndex
    })
  }

  render() {
  return (<button className="like-button" onClick={this.handleClick} style={{ backgroundColor: this.state.colors[this.state.colorIndex] }}>{`${this.state.counter} Like${this.state.counter === 1 ? '' : 's'}`}</button>)
  }
}

class ClickablePicture extends Component {
  state = {
    clicked: false
  }

  handleClick = () => {
    console.log('click');

    this.setState({
      clicked: !this.state.clicked
    })
  }

  render() {
    const {clicked} = this.state
    return (<img onClick={this.handleClick} src={clicked ? this.props.imgClicked : this.props.img} alt="Fancy profile picture"/> )
  }
}


class Dice extends Component {
  state = {
    roll: '3'
  }

  handleClick = () => {
    console.log('click')
    const randomRoll = () => (Math.floor(Math.random() * 6) + 1).toString()
    this.setState({
      roll: 'empty'
    })
    // await timeout(1000);
    setTimeout(() => this.setState({
      roll: randomRoll()// roll result randomly between 1 and 6 inclusive
    }), 1000)
  };

  render() {
    const diceImgs = {
      "empty": '/img/dice-empty.png',
      "1": '/img/dice1.png',
      "2": '/img/dice2.png',
      "3": '/img/dice3.png',
      "4": '/img/dice4.png',
      "5": '/img/dice5.png',
      "6": '/img/dice6.png',
    }
    // switch (this.state.roll) {
    //   case "1":
    //     return 
    // }

    return (<img onClick={this.handleClick} className="dice-img" src={diceImgs[this.state.roll]} alt={`You rolled a ${this.handleClick}`}/>)
  }

}

class Carousel extends Component {
  state = {
    currentImgIndex: 0
  }

  clickRight = () => {
    this.setState({
      currentImgIndex: this.state.currentImgIndex + 1,
    })
  }
  clickLeft = () => {
    this.setState({
      currentImgIndex: this.state.currentImgIndex - 1,
    })
  }

  render() {
    const { imgs } = this.props;
    // let btnLeft = '';
    // let btnRight = '';
    // if (this.state.currentImgIndex > 0) {
    //   btnLeft = <button className="carousel-btn carousel-btn-left" onClick={this.clickLeft}></button>
    // }
    // if (this.state.currentImgIndex < imgs.length - 1) {
    //   btnRight = <button className="carousel-btn carousel-btn-right" onClick={this.clickRight}></button>
    // }
    return (
      <div className="carousel-container">
        {this.state.currentImgIndex > 0 && <button className="carousel-btn carousel-btn-left" onClick={this.clickLeft}></button>}
        <img src={imgs[this.state.currentImgIndex]} alt="carousel image"/>
        {this.state.currentImgIndex < imgs.length - 1 && <button className="carousel-btn carousel-btn-right" onClick={this.clickRight}></button>}
      </div> )
  }
}


class NumbersTable extends Component {
  render() {
    let numbers = [];
    for (let i = 1; i <= this.props.limit; i++) {
      numbers.push(i);
    }
    return (
      <div className="numbers-table-container">
        {numbers.map((number, index) => <div key={index} className={`num-container number-${number % 2 === 0 ? 'even' : 'odd'}`}><h1>{number}</h1></div>)}
      </div>)
  }
}

class FaceBook extends Component {

  state = {
    profiles,
    selectedCountry: 'All',
  }
  
  setSelectedCountry = (e) => {
    // event handler
    console.log(e.target);
    // console.log(this.state);
    this.setState({
      selectedCountry: e.target.innerText
    })
  }

  render() {
    // console.log(profiles);
    const studentCountries = new Set(['All', ...this.state.profiles.map(profile => profile.country)]);
    return (
      <div className="facebook-container">
        <div className="country-selector-btns">
          {Array.from(studentCountries).map((country, index) => {
          return <div key={index} onClick={this.setSelectedCountry}><button className={`country-btn ${this.state.selectedCountry === country ? 'selected' : ''}`}>{country}</button></div>
          })}
        </div>

        <div className="profiles-container">
          {this.state.profiles.map((profile, index) => {
            const { firstName, lastName, country, img, isStudent } = profile;
            return (
          <div key={index} className={`profile-container ${this.state.selectedCountry === 'All' || this.state.selectedCountry === country ? 'selected' : 'unselected'}`}>
                <img src={img} alt={`Profile picture for ${firstName} ${lastName}`}/>
                <div className="info">
                  <h2><em>First name:</em> {firstName}</h2>
                  <h2><em>Last name:</em> {lastName}</h2>
                  <h2><em>Country:</em> {country}</h2>
                  <h2><em>Type:</em> {isStudent ? "Student" : "Teacher"}</h2>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

class SignUp extends Component {

  state = {
    email: null,
    password: null,
    nationality: null,
    countries: ["England", "USA", "Malaysia", "Germany", "Sweden", "Nigeria", "Italy", "Scotland", "Kazakhstan", "Russia", "Catalonia", "France", "Israel", "Brazil", "Taiwan", "Turkey", "Norway" ]
  }

  isInputValid = (e) => {
    console.log(e.target)
    switch (e.target.id) {
      case 'email':
        return this.setState({
          email: e.target.validity.valid
        });
      case 'password':
        return this.setState({
          password: (e.target.validity.valid && e.target.textLength > 7)
        });
    }
    
  }
  render() {
    console.log(this.state)
    return (
      <form action="#" method="POST">
        <div className="signup-page-container form-row my-5">
          <div className="email-container form-group col-auto">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" onInput={this.isInputValid} placeholder="jesus@example.com" className={`form-control-lg ${this.state.email ? 'is-valid bg-success' : 'is-invalid'}`}/>
            {this.state.email ? <p className="text-success">Your email looks mighty fine!</p> : <p className="text-danger">Invalid email!</p>}
          </div>
          <div className="password-container form-group col-auto mx-5">
            <label htmlFor="password">Password</label>
            <input id="password" onInput={this.isInputValid} type="password" placeholder="hunter2" 
            className={`form-control-lg ${this.state.password ? 'is-valid bg-success' : 'is-invalid'}`} />
            {this.state.password ? <p className="text-success">Lookin' good!</p> : <p className="text-danger">Your password is too weak!</p>}
          </div>
          <div className="nationality-container form-group col-auto">
            <label htmlFor="nationality">Nationality</label>
            <select className="form-control-lg">
              {this.state.countries.map((country, index) => {
                return (
                    <option key={index} id="nationality" className="country-option form-control-lg" value={country}>{country}</option>);
              })}
            </select>
          </div>
        </div>
      </form>
    )
  }
}


class App extends Component {
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
          firstName='Delores'
          lastName="O'Brian"
          gender='female'
          height={172}
          birth={new Date("1988-05-11")}
          picture="https://randomuser.me/api/portraits/women/44.jpg"
        />
        <h1>Greetings</h1>
          <Greetings lang="de">Ludwig</Greetings>
          <Greetings lang="fr">François</Greetings>

        <h1>Random</h1>
          <Random min={1} max={6}/>
          <Random min={1} max={100}/>

        <h1>Box colour</h1>
          <BoxColor r={255} g={0} b={0} />
          <BoxColor r={128} g={255} b={0} />

        <h1>Credit Cards</h1>
        <div className="credit-profile-container">
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
        <h1>Rating</h1>
        <div className="rating-container">
          <Rating>0</Rating>
          <Rating>1.49</Rating>
          <Rating>1.5</Rating>
          <Rating>3</Rating>
          <Rating>4</Rating>
          <Rating>5</Rating>
        </div>
        <div className="driver-profile-container">
          <DriverCard 
            name="Travis Kalanick"
            rating={4.2}
            img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
            car={{
              model: "Toyota Corolla Altis",
              licensePlate: "CO42DE"
            }} 
          />
          <DriverCard 
            name="Dara Khosrowshahi"
            rating={4.9}
            img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
            car={{
              model: "Audi A3",
              licensePlate: "BE33ER"
            }} 
          />
        </div>
        <div className="like-btn-container">
          <LikeButton></LikeButton>
          <LikeButton></LikeButton>
        </div>
        <div className="fancy-clickable-pic-container">
          <ClickablePicture
            img="/img/persons/maxence.png"
            imgClicked="/img/persons/maxence-glasses.png"
          />
        </div>
        <div className="dice-container">
          <Dice />
        </div>
        <Carousel imgs={["https://randomuser.me/api/portraits/women/1.jpg", "https://randomuser.me/api/portraits/men/1.jpg","https://randomuser.me/api/portraits/women/2.jpg", "https://randomuser.me/api/portraits/men/2.jpg"]} />
        <NumbersTable limit={12} />
        <FaceBook />
        <SignUp />
      </div>
    );
  }
}

export default App;
