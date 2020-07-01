import React from 'react';
import ReactDOM from 'react-dom';
import IdCard from './IdCard';
import Greetings from './Greetings';
import Random from './Random';
import BoxColor from './BoxColor';

class App extends React.Component {
    state = {
        personA: {
            lastName: "Doe",
            firstName: "John",
            gender: "male",
            height: 178,
            birth:"1992-07-14",
            picture:"https://randomuser.me/api/portraits/men/44.jpg"
          },
          personB: {
            lastName:"Delores",
            firstName:"Obrien",
            gender:"female",
            height: 172,
            birth: "1988-05-11",
            picture:"https://randomuser.me/api/portraits/women/44.jpg"   
          },
        };

    render() {
        return (
            <div>
                <h2>IdCard</h2>
                <IdCard
                firstName={this.state.personA.firstName}
                lastName={this.state.personA.lastName}
                gender={this.state.personA.gender}
                height={this.state.personA.height}
                birth={this.state.personA.birth}
                picture={this.state.personA.picture} 
                />
                <br />
                <IdCard
                firstName={this.state.personB.firstName}
                lastName={this.state.personB.lastName}
                gender={this.state.personB.gender}
                height={this.state.personB.height}
                birth={this.state.personB.birth}
                picture={this.state.personB.picture} 
                />
            </div>

        );
    };
};
<Greetings lang="de">Ludwig</Greetings>;
<Greetings lang="fr">François</Greetings>;
<Random min={1} max={6}/>; 
<Random min={1} max={100}/>;
<BoxColor r={255} g={0} b={0}>#ff0000</BoxColor>;
<BoxColor r={128} g={255} b={0}>#80ff00</BoxColor>;

export default App;