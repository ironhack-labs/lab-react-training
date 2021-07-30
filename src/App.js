import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import IdCard from "./components/Iteration1.js";
import Greetings from "./components/Iteration2.js";
import Random from "./components/Iteration3.js";
import BoxColor from './components/Iteration4.js';
import LikeButton from './components/Iteration8.js';
import ClickablePicture from './components/Iteration9';
function App() {
  const cards = [
    {
      lastName:'Doe',
      firstName:'John',
      gender:'male',
      height:178,
      birth:new Date("1992-07-14"),
      picture:"https://randomuser.me/api/portraits/men/44.jpg"
    },
    {
      lastName:'Delores',
      firstName:'Obrien',
      gender:'female',
      height:172,
      birth:new Date("1988-05-11"),
      picture:"https://randomuser.me/api/portraits/women/44.jpg",  
    }
  ];
  return (
    <section>
      <div>
        {
          cards.map((card,index_card) => (
            <IdCard 
              key={index_card}
              lastname={card.lastName}
              firstname={card.firstName}
              gender={card.gender}
              height={card.height/100 + "m"}
              birth={card.birth.toString().slice(0, 15)}
              picture={card.picture}
            />))
        }
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
        <BoxColor r={255} g={0} b={0} />
        <BoxColor r={128} g={255} b={0} />

      </div>
      <div>
        <LikeButton/><LikeButton/>
      </div>
      <div>
        <ClickablePicture imgNormal='/img/persons/maxence.png' imgClicked='/img/persons/maxence-glasses.png'/>
      </div>
    </section>
  );
}


export default App;
