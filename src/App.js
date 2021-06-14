import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import Random from './components/Random';

class App extends Component {
  render(){
    return(
      <section>
      <div className="App-logo2">
       <img src={logo} className="App-logo" alt="logo" />
       </div>
      <div className="App">
      <h1>Iteration 1 | Component: IdCard</h1>
    </div>
    <article className="id_cards">
    <IdCard
       Lastname='Doe'
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
    </article>

    <h1>Iteration 2 | Component: Greetings</h1>
        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="fr">François</Greetings>

     <h1>Iteration 3 | Component: Random</h1>
        <Random min={1} max={6}/>
        <Random min={1} max={100}/>
    </section>
    )
  }
}

export default App;
