import React from "react";
import './App.css';


function IDCard(props){
  console.log("props", props)
  return (
    <div className="id-card">
      <img src={props.picture} alt="id"/>
      <div className="id-card-informations">
      <p>Last name: {props.lastName}</p>
      <p>First name: {props.firstName}</p>
      <p>Gender: {props.gender}</p>
      <p>Height: {props.height}</p>
      <p>Birth: {props.birth.toDateString()}</p>
      </div>
    </div>
  )
}

function Greetings(props){
  console.log("Greetings props:", props)
  let greet;

  if (props.lang ==="de"){
    return greet='Hallo'
  }
  else if (props.lang === "en"){
    return greet= "Hello"
  }
  else if (props.lang==="es"){
    return greet="Hola"
  }
  else if (props.lang ==="fr"){
    return greet="Bonjour"
  }
  else greet="Hello";

  return (
  <div className="Greeting">
    <p> {greet}{props.children}</p>
  </div>
  )
}

function Random({min, max}) {
 let result = Math.round(Math.random() * (max - min) + min);
 console.log("Random number result",result)
  return(
  <div className="random-values" >
    <p>Random value between {min} and {max} = {result} </p>
  </div>
  )
}


function BoxColor({r, g, b}){
  function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  }
  
  function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }
let hexColor = rgbToHex(r,g,b)
  return <div 
    style = {{
    backgroundColor: `rgb(${r},${g},${b})`,
    border: `solid black`,
    padding: `30px`,
    width:`30%`}}>
    <p>rgb({r},{g},{b})</p>
    <p>{hexColor}</p>
    </div>;
}

function CreditCard (props){
  let logo;

  if (props.type === "Visa"){
    logo="https://www.freepnglogos.com/uploads/visa-card-logo-9.png"
  }
  else if (props.type === "Master Card") {
    logo="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/1200px-MasterCard_Logo.svg.png"
  }

  console.log('Credit Card:', props)

  return (
    <div
    className="credit-card"
    style = {{
    backgroundColor: `${props.bgColor}`,
    color: `${props.color}`,
    width: `50%`,
    }}>
      <img
      src={logo}
      alt="logo"
      style = {{
        width: `30%`
        }}/>

      <div className="credit-card-informations" >
      <p>{props.number}</p>
      <p>{props.expirationMonth}/{props.expirationYear}</p>
      <p>{props.bank}</p>
      <p>{props.owner}</p>
      </div>
      </div>
  )
}

function Rating(children){
  let star;

  console.log("Rating",children)
 
if (children = '0'){
star = "☆☆☆☆☆"
}
else if(children > "0" && children <= "1" ){
  star = "★☆☆☆☆"
}
else if(children > "1" && children <= "2" ){
  star = "★★☆☆☆"
}
else if(children > "2" && children <= "3" ){
  star = "★★★☆☆"
}
else if(children > "3" && children <= "4" ){
  star = "★★★★☆"
}
else if(children > "4" && children <= "5" ){
  star = "★★★★★"
}


  return(
    <div className="Ratings">
    {star}
  </div>
  )
  
}

function App() {
  return (
    <div className="App">
   
    <IDCard
lastName='Doe'
firstName='John'
gender='male'
height={178}
birth={new Date("1992-07-14")}
picture="https://randomuser.me/api/portraits/men/44.jpg"
/>

   
<Greetings lang="de">
  Ludwig
</Greetings>
<Random min={3} max={79}/>
<BoxColor r={255} g={21} b={0} />
<CreditCard
  type="Visa"
  number="0123456789018845"
  expirationMonth={3}
  expirationYear={2021}
  bank="BNP"
  owner="Maxence Bouret"
  bgColor="#11aa99"
  color="white" 
/>
<Rating>0</Rating>
<Rating>0.49</Rating>
<Rating>1.5</Rating>
<Rating>3</Rating>
<Rating>4</Rating>
<Rating>5</Rating>
</div>
  );
}

export default App;
