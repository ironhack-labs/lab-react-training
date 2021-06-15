import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import IdCard from "./components/IdCard";
import Greetings from "./components/Greetings";
import RandomNumber from "./components/Random";
import BoxColor from "./components/BoxColor";
export default class App extends Component {

  render(){
      const cards = [{
          lastName: "Doe",
          firstName: "John",
          gender: "Male",
          height: "1.75m",
          birth: "01-01-1980",
          picture: "img/persons/maxence.png"
        },
        {
          lastName: "Doe",
          firstName: "John",
          gender: "Male",
          height: "1.75m",
          birth: "01-01-1980",
          picture: "img/persons/maxence-glasses.png"
        }
      ];
      const greetings = [{
        lang: "es",
        children: "John",
      },
      {
        lang: "fr",
        children: "John",
      }
    ];
      return(
          <div className="App">
              <section className="iteration1">
                <h1>Iteration 1</h1>
                  {cards.map((idCard, index_idCard)=>(
                      <IdCard
                      key={index_idCard}
                      lastName={idCard.lastName}
                      firstName={idCard.firstName}
                      gender={idCard.gender}
                      height={idCard.height}
                      birth={idCard.birth}
                      picture={idCard.picture}
                      />
                  ))}
              </section>
              <section className="iteration2">
                <h1>Iteration 2</h1>
                <Greetings lang="de">Ludwig</Greetings>
                <Greetings lang="fr">Ludwig</Greetings>
              </section>
              <section className="iteration3">
                <h1>Iteration 3</h1>
                <RandomNumber min="1" max="6"/>
                <RandomNumber min="1" max="100"/>
              </section>
              <section className="iteration4">
                <h1>Iteration 4</h1>
                <BoxColor r="255" g="0" b="0"/>
                <BoxColor r="128" g="255" b="0"/>
              </section>
          </div>
      )
  }
}