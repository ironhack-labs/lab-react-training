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
    return hex.length == 1 ? "0" + hex : hex;
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
<BoxColor r={255} g={21} b={0} /></div>
  );
}

export default App;
