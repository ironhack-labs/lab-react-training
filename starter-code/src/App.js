import React, { Component } from 'react';
<<<<<<< HEAD
import Idcard from './components/Idcard';
=======
import Card from './componnents/Card'
import Greatings from './componnents/Greatings';
import Random from './componnents/Random'
>>>>>>> f79f6601906e89f643518cb5a887680bce96c237

class App extends Component {
  render() {
  return (
      <div className="App">
        <h1>IdCard</h1>
<<<<<<< HEAD
        <Idcard
        lastName='Doe'
        firstName='John'
        gender='male'
        height={178}
        birth={new Date("1992-07-14")}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
        />

        <h1>IdCard</h1>
        <Idcard
        lastName='Thompson'
        firstName='Johana'
        gender='female'
        height={165}
        birth={new Date("1993-10-11")}
        picture="https://randomuser.me/api/portraits/women/8.jpg"
        />


        <h1>Greetings</h1>
        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="fr">François</Greetings>
      </div>
=======
        <Card img="https://randomuser.me/api/portraits/men/44.jpg"
              lastName="Doe"
              firstName="John"
              gender="Male"
              height={178}
              birth={new Date("1992-07-04")}  />
              
              <Card img="https://randomuser.me/api/portraits/women/8.jpg"
              lastName="Obrien"
              firstName="Delores"
              gender="Female"
              height={172}
              birth={new Date("1993-10-04")}  />
        <h1>Greetings</h1>
        <Greatings idioma="de"> Ricardo</Greatings>
        <Greatings idioma="fr"> Rish</Greatings>
        <Greatings idioma="en"> Ricardo</Greatings>
        <Greatings idioma="es"> Risha</Greatings>


        <h1>Random</h1>
        <Random min={1} max={6}/>
        <Random min={4} max={100}/>       
        <h1></h1> 


    </div>
>>>>>>> f79f6601906e89f643518cb5a887680bce96c237
    );
  }
}

export default App;
