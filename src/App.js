import React from 'react';
//import logo from './logo.svg';
import './App.css';

const IdCard = (props)=>{
  return <div className="IdCard" >
  <div className="Idcol">
  <img src={props.picture} name="picture" alt="idimage"></img>
  </div>
  <div className="Idcol">
  <div className="Idrow">
  <p><b>First Name:</b>{props.firstName}</p>
  </div>
  <div className="Idrow">
  <p><b>Last Name:</b>{props.lastName}</p>
  </div>
  <div className="Idrow">
  <p><b>Gender:</b>{props.gender}</p>
  </div>
  <div className="Idrow">
  <p><b>Height:</b>{props.height}</p>
  </div>
  <div className="Idrow">
  <p> <b>Birth:</b>{props.birth}</p>
  </div>
  </div>
  </div>
}




const Cards = (props)=>{
  return <div> <IdCard
  lastName='Doe'
  firstName='John'
  gender='male'
  height={178}
  birth={new Date("1992-07-14").toDateString()}
  picture="https://randomuser.me/api/portraits/men/44.jpg"
/>
<IdCard
  lastName='Delores '
  firstName='Obrien'
  gender='female'
  height={172}
  birth={new Date("1988-05-11").toDateString()}
  picture="https://randomuser.me/api/portraits/women/44.jpg"
/>
  </div>
}

const Greetings=(props)=>{
  if(props.lang==="de"){
    return <div className="greetings">
    <h1>Hallo {props.children}</h1>
  </div>
  } else if(props.lang==="fr"){
    return <div className="greetings">
    <h1>Bonjour {props.children}</h1>
  </div>
  } else if(props.lang==="es"){
    return <div className="greetings">
    <h1>Hola {props.children}</h1>
  </div>
  }else if(props.lang==="en"){
    return <div className="greetings">
    <h1>Hello {props.children}</h1>
  </div>
  }
}

const Random =(props)=>{
  const res= Math.floor(Math.random() *(props.max-props.min))
  return <div className="random">
  <h1>Random value between {props.min} and {props.max} => {res}</h1>
  </div>
}

const BoxColor=(props)=>{
  const divStyle={
    backgroundColor: `rgb(${props.r},${props.g},${props.b})`,
    color:"white",
    borderStyle: "solid",
    borderColor:"black",
    margin:"1em"
  }
  return <div className="boxColor" style={divStyle}>
  <h2>rgb({props.r},{props.g},{props.b})</h2>
  </div>
}

const CreditCard=(props)=>{
  const divStyle={
    backgroundColor:`${props.bgcolor}`,
    color:`${props.color}`,
    display:"flex"
  }
  if(props.type==="Visa"){
    return <div className="CCard" style={divStyle}>
    <img src="./img/visa.png" name="CCard" alt="Visa"></img>
    <h1>{props.number}</h1>
    <p>Expires {props.expirationMonth}/{props.expirationYear}   {props.bank}</p>
    <p>{props.owner}</p>

    </div>
  }else   if(props.type==="Master Card"){
    return <div className="CCard" style={divStyle}>
    <img src="./img/master-card.svg" name="CCard" alt="MasterCard"></img>
    <h1>{props.number}</h1>
    <p>Expires {props.expirationMonth}/{props.expirationYear}   {props.bank}</p>
    <p>{props.owner}</p>
    </div>
  }
}


function App() {
  return (
    <div className="App">
    <Cards/>
    <Greetings lang="de">Ludwig</Greetings>
    <Greetings lang="fr">François</Greetings>
    <Random min={1} max={6}/>
    <Random min={1} max={100}/>
    <BoxColor r={255} g={0} b={0} />
    <BoxColor r={128} g={255} b={0} />
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
  );
}

export default App;
