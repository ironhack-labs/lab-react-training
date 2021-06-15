import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import Random from './components/Random';
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreditCard';

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


         <h1>Iteration 4 | Component: Random</h1>
           <BoxColor r={255} g={0} b={0} />
           <BoxColor r={128} g={255} b={0} />

         <h1>Iteration 5 | Component: CreditCard</h1>
           <CreditCard
              type="Visa"
              number="0123456789018845"
              expirationMonth={3}
              expirationYear={2021}
              bank="BNP"
              owner="Maxence Bouret"
              bgColor="#11aa99"
              color="white"
            />
            <CreditCard
              type="MasterCard"
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

           <h1>Iteration 6 | Component: Rating</h1>

  </section>
    )
  }
}

export default App;