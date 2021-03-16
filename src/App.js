import React from 'react';
import logo from './logo.svg';
import LikeButton from "./Components/LikeButton";
import ClickablePicture from "./Components/ClickablePicture";
import Dice from "./Components/Dice";
import Carousel from "./Components/Carousel";
import './App.css';

//Iteration 1
function IdCard(props){
  const date = Intl.DateTimeFormat('en-US',{
    year: 'numeric',
    month: 'long',
    day: '2-digit' }).format(props.birth);
      return (
    <div style={{ margin:`50px`, width:`400px`, display: `flex`, padding: `10px`, border: `1px solid grey`}}>
      <div>
      <img src={props.picture} alt=""/>
      </div>
      <div>
      <p><strong>First name:</strong> {props.firstName}</p>
      <p><strong>Last name:</strong> {props.lastName}</p>
      <p><strong>Gender:</strong> {props.gender}</p>
      <p><strong>Height:</strong> {props.height}</p>
      <p><strong>Birth:</strong> {date}</p>
      </div>

    </div>
  );
}

//Iteration 2
function Greetings(props){
  if (props.lang === "de"){
    return <p>Hallo {props.children}</p>
  }
  if (props.lang === "en"){
    return <p>Hello {props.children}</p>
  }
  if (props.lang === "es"){
    return <p>Ola {props.children}</p>
  }
  if (props.lang === "fr"){
    return <p>Bonjour {props.children}</p>
  }
}

//Iteration 3
function Random(props){
    const result = Math.floor(Math.random() * (props.max - props.min) + props.min);
    return <p>Random value between {props.min} and {props.max} is {result}</p>
  }

//Iteration 4
function BoxColor(props){
  return (
    <div style={{ margin:`50px`, width: `500px`, backgroundColor: `rgb(${props.r},${props.g},${props.b})`, padding: `15px`, color: `white`}}>
      <p>This box color is : rgb({props.r},{props.g},{props.b}) </p>
    </div>
  );
}

//Iteration 5
function CreditCard(props){
  return (
    <div style={{ margin:`50px`, width:`350px`, borderRadius: `15px`, backgroundColor: `${props.bgColor}`, color: `${props.color}`, border: `1px solid grey`}}>
      <p>{props.type}</p>
      <p><strong>{props.number}</strong></p>
      <p>Expires {props.expirationMonth}/{props.expirationYear}  {props.bank}</p>
      <p>{props.owner}</p>
    </div>
  );
}

//Iteration 6
function Rating(props){
  if (Math.round(props.children) === 0){
    return <p>☆☆☆☆☆</p>
  }
  if (Math.round(props.children) === 1){
    return <p>★☆☆☆☆</p>
  }
  if (Math.round(props.children) === 2){
    return <p>★★☆☆☆</p>
  }
  if (Math.round(props.children) === 3){
    return <p>★★★☆☆</p>
  }
  if (Math.round(props.children) === 4){
    return <p>★★★★☆</p>
  }
  if (Math.round(props.children) === 5){
    return <p>★★★★★</p>
  }
}

//Iteration 7
function DriverCard(props){
  if (Math.round(props.rating) === 0){
   var rating = <p>☆☆☆☆☆</p>
  }
  if (Math.round(props.rating) === 1){
    var rating = <p>★☆☆☆☆</p>
  }
  if (Math.round(props.rating) === 2){
    var rating = <p>★★☆☆☆</p>
  }
  if (Math.round(props.rating) === 3){
    var rating = <p>★★★☆☆</p>
  }
  if (Math.round(props.rating) === 4){
    var rating = <p>★★★★☆</p>
  }
  if (Math.round(props.rating) === 5){
    var rating = <p>★★★★★</p>
  }

  return (
    <div style={{ borderRadius: `15px`, display: `flex`, margin:`50px`, width:`550px`, backgroundColor: `dodgerblue`, color: `white`, justifyContent: `center`}}>
      <div>
      <img src={props.img} style={{ width: `100px`, borderRadius: `50%`}} alt=""/>
      </div>
      <div>
      <p><strong>{props.name}</strong></p>
      {rating}
      <p>{props.car.model} - {props.car.licensePlate}</p>
      </div>

    </div>
  )
}


//the APP
function App() {
  return (
    <div className="App">

<h2>Iteration 1</h2>
<div style={{ display: `flex`, justifyContent: `center`}}>
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
</div>

<h2>Iteration 2</h2>
<Greetings lang="de">Ludwig</Greetings>
<Greetings lang="fr">François</Greetings>

<h2>Iteration 3</h2>
<Random min={1} max={6}/>
<Random min={1} max={100}/>

<h2>Iteration 4</h2>
<div style={{ display: `flex`, justifyContent: `center`}}>
<BoxColor r={255} g={0} b={0} />
<BoxColor r={128} g={255} b={0}/>
</div>

<h2>Iteration 5</h2>
<div style={{ display: `flex`, justifyContent: `center`}}>
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

<h2>Iteration 6</h2>
<Rating>0</Rating>
<Rating>1.49</Rating>
<Rating>1.5</Rating>
<Rating>3</Rating>
<Rating>4</Rating>
<Rating>5</Rating>

<h2>Iteration 7</h2>
<div style={{ display: `flex`, justifyContent: `center`}}>
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

  <h2>Iteration 8</h2>
  <LikeButton/>
  <LikeButton/>

  <h2>Iteration 9</h2>
  <ClickablePicture
  img='/img/persons/maxence.png'
  imgClicked='/img/persons/maxence-glasses.png'/>

<h2>Iteration 10</h2>
<Dice/>

<h2>Iteration 11</h2>
<Carousel
  imgs={[
    'https://randomuser.me/api/portraits/women/1.jpg',
    'https://randomuser.me/api/portraits/men/1.jpg',
    'https://randomuser.me/api/portraits/women/2.jpg',
    'https://randomuser.me/api/portraits/men/2.jpg'
  ]}
/>

    </div>
  );
}

export default App;
