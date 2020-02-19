import React, { Component } from 'react';
import IdCardComponent from './components/IdCardComponent';
import GreetingsComponent from './components/GreetingsComponent';
import RandomNumberComponent from './components/RandomNumberComponent';
import BoxColorComponent from './components/BoxColorComponent';
import CreditCardComponent from './components/CreditCardComponent';
import creditCardComponent from './components/CreditCardComponent';

class App extends Component {

    render() {
        return (

            <div className = "App">

            <h1> IdCard </h1>    
            <IdCardComponent 
                lastName = 'Doe'
                firstName = 'John'
                gender = 'male'
                height = { 1.78 }
                birth = { new Date("1992-07-14") }
                picture = "https://randomuser.me/api/portraits/men/44.jpg" 
            />
            <IdCardComponent 
                lastName='Delores '
                firstName='Obrien'
                gender='female'
                height={1.72}
                birth={new Date("1988-05-11")}
                picture="https://randomuser.me/api/portraits/women/44.jpg"
            />
            <h1> Greetings </h1>
            <GreetingsComponent lang="de">Ludwig</GreetingsComponent>
            <GreetingsComponent lang="fr">François</GreetingsComponent>
            
            <h1>Random Number</h1>
            <RandomNumberComponent max={6} min={1}></RandomNumberComponent>
            <RandomNumberComponent min={1} max={100}></RandomNumberComponent>
            
            <h1>Box Color</h1>
            <BoxColorComponent r={255} g={0} b={0} ></BoxColorComponent>
            <BoxColorComponent r={128} g={255} b={0}></BoxColorComponent>
            
            <h1>Credit Card</h1>
            <CreditCardComponent
                type="Visa"
                number="0123456789018845"
                expirationMonth={3}
                expirationYear={2021}
                bank="BNP"
                owner="Maxence Bouret"
                bgColor="#11aa99"
                color="white"
            />
            <CreditCardComponent
                type="Master Card"
                number="0123456789010995"
                expirationMonth={3}
                expirationYear={2021}
                bank="N26"
                owner="Maxence Bouret"
                bgColor="#eeeeee"
                color="#222222"
            />
            <CreditCardComponent
                type="Visa"
                number="0123456789016984"
                expirationMonth={12}
                expirationYear={2019}
                bank="BBVA"
                owner="Eunice Aboites"
                bgColor="#ddbb55"
                color="white"
            />
            </div>
        );
    }
}

export default App;