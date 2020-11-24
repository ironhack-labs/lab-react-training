import React from 'react';
import logo from './logo.svg';
import './App.css';

const IdCard = (props) => (<div style={{border: "1px solid black"}}>
      <p><strong>First Name: </strong>{props.lastName}</p>
      <p><strong>Last Name: </strong>{props.firstName}</p>
      <p><strong>Gender: </strong>{props.gender}</p>
      <p><strong>Height: </strong>{props.height}</p>
      <p><strong>Birth: </strong>{props.birth}</p>
      <img src={props.picture}/>
    </div>
)

const Greetings = (props) => (<h4 lang={props.lang} style={{border: "1px solid black"}}>Hello {props.children}</h4>)

const Random = (props) => (<h4>Random value between {props.min} and {props.max} => { const random = (props) => {
  return Math.floor(Math.random() * ({props.max}-{props.min}+{props.min}))
}}</h4>

const BoxColor = (props) => (
  <div style={{backgroundColor: "{props.r}{props.g}{props.b}", border= "1px solid black", textAlign="center", color={props.textcolor}}}>
    <p>
      rgb({props.r},{props.g},{props.b})<br/>#{props.hex}
    </p>
  </div>
)



const CreditCard = (props) => (
  <div style={{backgroundColor={props.bgColor}, borderRadius="3px", padding="6px", width="100px", height="60px"}}>
            function Visa(props){
          return './img/visa.png'
        }

        function MasterCard(props){
          return './img/master-card.svg'
        }

        function Type(props){
          const typeV = props.typeV
          if (typeV){
            return <Visa/>
          } else {
            return <MasterCard/>
          }
        }
    <img src={props.type} style={{float="right", width="15px"}}/>
    <br/>
    <h3 style={{color={props.color}, float="center"}}>{props.number}</h3>
    <br/>
    <p style={{color={props.color}, float="right"}}>Expires {props.expirationMonth}/{expiration.Year}     {props.bank}<b/>{props.owner}</p>
  </div>
)

function App() {
  return (
    <div className="App">
      <div>
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
      <div>
        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="fr">François</Greetings>
      </div>
      <div>
        <Random min={1} max={6}/>
        <Random min={1} max={100}/>
      </div>
      <div>
        <BoxColor r={255} g={0} b={0} hex='ff0000' textcolor='white'/>
        <BoxColor r={128} g={255} b={0} hex='80ff00' textcolor='black'/>
      </div>
      <div>
      <CreditCard
        type={true}
        number="0123456789018845"
        expirationMonth={3}
        expirationYear={2021}
        bank="BNP"
        owner="Maxence Bouret"
        bgColor="#11aa99"
        color="white" />
      <CreditCard
        type={false}
        number="0123456789010995"
        expirationMonth={3}
        expirationYear={2021}
        bank="N26"
        owner="Maxence Bouret"
        bgColor="#eeeeee"
        color="#222222" />
      <CreditCard
        type={true}
        number="0123456789016984"
        expirationMonth={12}
        expirationYear={2019}
        bank="Name of the Bank"
        owner="Firstname Lastname"
        bgColor="#ddbb55"
        color="white" />
      </div>

    </div>
  );
}

export default App;
