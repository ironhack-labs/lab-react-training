import React from 'react';
import logo from './logo.svg';
import './App.css';

function IdCard(props){
  return (
      <div className="id-card">
        <div className="image-card">
          <img src={props.picture}></img>
        </div>
        <div className="text-card">
          <p><strong>First Name: </strong>{props.firstName}</p>
          <p><strong>Last name: </strong>{props.lastName}</p>
          <p><strong>Gender: </strong>{props.gender}</p>
          <p><strong>Height: </strong>{props.height}</p>
          <p><strong>Birth: </strong>{props.birth}</p>
        </div>
      </div>
  );
}

function Greetings(props){
  let greetingsMessage = '';
  let lang = props.lang;
  switch(lang) {
    case 'de': 
      greetingsMessage = "Guten Tag";
      break;
    case 'en':
      greetingsMessage = "Hello";
      break;
    case 'es':
      greetingsMessage = "Hola";
      break;
    case 'fr':
      greetingsMessage = "Bonjour";
      break;
    default:
      greetingsMessage = "Hallo";
  }
  return (
    <div className="greetings-card">
      <p><strong>{greetingsMessage} {props.children}</strong></p>
    </div>
  )
}


function App() {
  return (
    <div>
      <div>
        <h1 className="title">IdCard</h1>
        <IdCard lastName='Doe' firstName='John' gender='male' height={178} birth={new Date("1992-07-14").toLocaleDateString()} picture="https://randomuser.me/api/portraits/men/44.jpg"/>
        <IdCard lastName='Delores ' firstName='Obrien' gender='female' height={172} birth={new Date("1988-05-11").toLocaleDateString()} picture="https://randomuser.me/api/portraits/women/44.jpg"/>
      </div>
      <div>
        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="fr">François</Greetings>
        <Greetings lang="en">Lynn</Greetings>
      </div>
    </div>
  );
}

export default App;
