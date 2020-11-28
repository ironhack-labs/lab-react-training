import React, { Component } from "react";
import './App.css';
import IdCard from "./components/IdCard";
import Greetings from './Components/Greetings';

export default class App extends Component{

render (){

  return (
    <div>
            <div className="App">
            <h1> Say hello to ReactJS</h1>
            </div>
          <header className="App-header" />
                    
            <IdCard
            lastName='Doe'
            firstName='John'
            gender='male'
            height={178}
            birth={"1992-07-14"}
            picture="https://randomuser.me/api/portraits/men/44.jpg"
          />

          <IdCard
            lastName='Delores '
            firstName='Obrien'
            gender='female'
            height={172}
            birth={"1988-05-11"}
            picture="https://randomuser.me/api/portraits/women/44.jpg"
            />
  </div>
// iteracion #2



  );
  
}
}


