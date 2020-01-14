import React, { Component } from 'react';
import IdCard from "./components/IdCard";
import Greetings from "./components/Greetings";
import Random from "./components/Random";
import BoxColor from "./components/BoxColor";

class App extends Component {
  render() {
    //var birth = new Date("1992-07-14");
    //birth = birth.toString();
    console.log(typeof birth);
    return (
      <div className="App">
        <h1>IdCard</h1> 
        {/* TODO: Use the IdCard component */}
        <IdCard lastName='Doe' firstName='John' gender='male' height={178} birth="1992-07-14" /*{birth}*/ picture="https://randomuser.me/api/portraits/men/44.jpg"/>
        
        <IdCard 
          lastName='Delores '
          firstName='Obrien'
          gender='female'
          height={172}
          birth="1988-05-11"
          picture="https://randomuser.me/api/portraits/women/44.jpg"
        />

        <h1>Greetings</h1>
        {/* TODO: Use the Greetings component */}
        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="fr">François</Greetings>

        <h1>Random</h1>
        <Random min={1} max={6}/>
        <Random min={1} max={100}/>
        <h1>Boxcolor</h1>
        <BoxColor r={255} g={0} b={0} />
        <BoxColor r={128} g={255} b={0} />
      </div>
    );
  }
}

export default App;
