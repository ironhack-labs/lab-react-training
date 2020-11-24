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

function random(){
  Math.random()
}

const Random = (props) => (<h4>Random value between 1 and 6 => {props.</h4>)

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
    </div>
  );
}

export default App;
