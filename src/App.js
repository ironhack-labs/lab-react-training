import React from 'react';
import './App.css';

/// ITERATION 1 DATA

const dude = [
  {
    lastName: "Montana",
    firstName: "Tony",
    gender: "Male",
    height: "1 Mètre 85",
    birth: "7 Juin 1986",
    picture: "https://cdn.shopify.com/s/files/1/2090/7523/articles/Smoking_Cigars_like_Tony_Montana_egm_cigars_2_1024x1024.jpg?v=1556622514",
  },
];

/// ITERATION 2 DATA 

const Greeting = (props) => {

  if (props.lang === "de") {
    return "Hallo !" + props.children;
  } else if (props.lang === "fr" ) {
    return "Bonjour !" + props.children;
  } else if (props.lang === "en" + props.children ) {
    return "Hello !";
  } else {return "Hola !" + props.children
 }
}

/// ITERATION 3 DATA

const Random = (props) => {

  return (
    <div>
      <p>Random value between {props.min} and {props.max} => {Math.floor(Math.random() * (props.max - props.min + 1) + props.min)} </p>
    </div>
  )
}

/// ITERATION 4 DATA

const BoxColor = (props) => {
  const divStyle = {
    background: `rgb(${props.r},${props.g},${props.b})`
  };
  return <div class="box-style" style={divStyle}>rgb({props.r},{props.g},{props.b})</div>
};

/// ITERATION 5 

const CreditCardDetails = [
  {
  type:"Visa",
  number:"0123456789018845".slice(-4),
  expirationMonth:3,
  expirationYear:2021,
  bank:"BNP",
  owner:"Maxence Bouret",
  bgColor:"#11aa99",
  color:"white"
  },
  {
  type:"Master Card",
  number:"0123456789010995".slice(-4),
  expirationMonth:3,
  expirationYear:2021,
  bank:"N26",
  owner:"Maxence Bouret",
  bgColor:"#eeeeee",
  color:"#222222"
  },
{
  type:"Visa",
  number:"0123456789016984".slice(-4),
  expirationMonth:12,
  expirationYear:2019,
  bank:"Name of the Bank",
  owner:"Firstname Lastname",
  bgColor:"#ddbb55",
  color:"white",
},
]

////

function CreditCard(props) {

    const colorStyle = {
    color: props.color,
    backgroundColor: props.bgColor
  };

let cardType = ""

  if (CreditCardDetails.type = "Visa") {
    cardType = "./img/visa.png"
  } else {
    cardType = "./img/master-card.svg"
  }

  return (

   <div class ="card-format" style={colorStyle}>

     <div class="card-img"> <img src={cardType} alt=""/></div>

      <div class="center-number"><p class="numbers">•••• •••• ••••{props.number} </p></div>
      
      <div class="center-down-one"><p>Expires &nbsp; {props.expirationMonth}/{props.expirationYear} &nbsp; {props.bank} </p></div>
     
      <div class="center-down-two"><p>{props.owner} </p></div>

    </div>
  );
}

////

function StudentCard(props) {
  return (
    <div className="Card">

      <div class="picture">

      <img src={props.picture} alt=""/>

      </div>

      <div class="details">

      <p>Last Name: {props.lastName}</p>
      <p>First Name: {props.firstName}</p>
      <p>Gender: {props.gender}</p>
      <p>Height: {props.height}</p>
      <p>Birth: {props.birth}</p>

      </div>

    </div>
  );
}

function App() {
  return (
    <div className="App">

 {dude.map((dude) => (
          <StudentCard
            picture = {dude.picture}
            lastName = {dude.lastName}
            firstName = {dude.firstName}
            gender = {dude.gender}
            height = {dude.height}
            birth = {dude.birth}
          />
        ))}

        <Greeting lang="de"> Philidenzé</Greeting>

<Random min={1} max={4} > </Random>

<BoxColor r={255} g={0} b={0} />
<BoxColor r={128} g={255} b={0} />


  {CreditCardDetails.map((CreditCardDetails) => (
    <CreditCard
      type = {CreditCardDetails.type}
      number ={CreditCardDetails.number}
      expirationMonth = {CreditCardDetails.expirationMonth}
      expirationYear = {CreditCardDetails.expirationYear}
      bank = {CreditCardDetails.bank}
      owner = {CreditCardDetails.owner}
      color = {CreditCardDetails.color}
      bgColor = {CreditCardDetails.bgColor}
/>
  ))}
    </div>
  );
}

export default App;