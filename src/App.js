import React from 'react';
import './App.css';
import BoxColor from './components/box-color/BoxColor';
import CreditCard from './components/credit-card/CreditCard';
import Greetings from './components/greetings/Greetings';
import IdCard from './components/id-card/IdCard';
import Random from './components/random/Random'

function App() {
    return (
        <div className="d-flex flex-column align-items-center justify-content-center">
            <div>
                <IdCard
                    picture='https://pbs.twimg.com/profile_images/1347118337122127872/HR7mPBgg.jpg'
                    firstName='Asier'
                    lastName='Bayón'
                    gender='male'
                    height={1.77}
                    birth={new Date('October 1, 1995')}
                />
                <IdCard
                    picture='https://img6.custompublish.com/getfile.php/4774463.1046.zlnmmlttupjlsw/Jornet.jpg?return=www.ski-nordique.net'
                    firstName='Kilian'
                    lastName='Jornet'
                    gender='male'
                    height={1.70}
                    birth={new Date('October 1, 1995')}
                />
            </div>
            <hr />
            <Greetings lang='es'>Asier</Greetings>
            <Greetings lang='de'>Asier</Greetings>
            <hr />
            <Random min={3} max={6} />
            <Random min={1} max={100} />
            <hr />
            <BoxColor r={255} g={0} b={0} />
            <BoxColor r={128} g={255} b={0} />
            <hr />
            <div className="row container d-flex justify-content-center py-5">
                <CreditCard
                    className="col-3"
                    type="Visa"
                    number="0123456789018845"
                    expirationMonth={3}
                    expirationYear={2021}
                    bank="BNP"
                    owner="Maxence Bouret"
                    bgColor="#11aa99"
                    color="white" />
                <CreditCard
                    className="col-3 mx-2"
                    type="Master Card"
                    number="0123456789010995"
                    expirationMonth={3}
                    expirationYear={2021}
                    bank="N26"
                    owner="Maxence Bouret"
                    bgColor="#eeeeee"
                    color="#222222" />
                <CreditCard
                    className="col-3"
                    type="Visa"
                    number="0123456789016984"
                    expirationMonth={12}
                    expirationYear={2019}
                    bank="Name of the Bank"
                    owner="Firstname Lastname"
                    bgColor="#ddbb55"
                    color="white" />
            </div>
        </div>
    );
}

export default App;
