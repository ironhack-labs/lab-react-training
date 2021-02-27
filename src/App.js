import React from 'react';
import './App.css';
import BoxColor from './components/box-color/BoxColor';
import Greetings from './components/greetings/Greetings';
import IdCard from './components/id-card/IdCard';
import Random from './components/random/Random'

function App() {
    return (
        <div className="container d-flex flex-column align-items-center justify-content-center">
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
            <hr/>
            <Random min={3} max={6}/>
            <Random min={1} max={100}/>
            <hr/>
            <BoxColor r={255} g={0} b={0} />
            <BoxColor r={128} g={255} b={0} />
            
        </div>
    );
}

export default App;
