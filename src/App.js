import React, { Component } from 'react';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import Random from './components/Random';
import BoxColor from './components/BoxColor';
import moment from 'moment';



class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>IdCard</h1>
        <IdCard
          picture="https://randomuser.me/api/portraits/men/44.jpg"
          firstName={"John"}
          lastName={"Doe"}
          gender={"male"}
          height={"1.78m"}
          birth={new Date("1992-07-14")}>       
          </IdCard>
        <IdCard
          picture="https://randomuser.me/api/portraits/women/44.jpg"          
          firstName={"Obrien"}
          lastName={"Delores"}
          gender={"female"}
          height={"1.72m"}
          birth={new Date("1988-05-11")}>       
        </IdCard>
        <h1>Greetings</h1>
        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="fr">François</Greetings>
        <h1>Random</h1>
        <Random text="Random value between 1 and 6 =>" min={1} max={6}/>
        <Random text="Random value between 1 and 100 =>" min={1} max={100}/>
        <h1>BoxColor</h1>
        <BoxColor r={255} g={0} b={0} />
        <BoxColor r={128} g={255} b={0} />  
      </div>
    );
  }
}

export default App;
