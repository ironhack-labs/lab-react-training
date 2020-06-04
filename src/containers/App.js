import React from 'react';
import './App.css';
import IdCard from '../components/IdCard';
import Greetings from '../components/Greetings';
import Random from '../components/Random';


class App extends React.Component {
  render() {
    return (
      <div>
        <IdCard
          lastName='Delores'
          firstName='Obrien'
          gender='female'
          height='172'
          birth='1988-05-11'
          picture='https://randomuser.me/api/portraits/women/44.jpg'>
        </IdCard>
        <IdCard
          lastName='Doe'
          firstName='John'
          gender='male'
          height='178'
          birth='1992-07-14'
          picture='https://randomuser.me/api/portraits/men/44.jpg'>
        </IdCard>
        <Greetings
          lang = 'en'
          children = 'Solange'>
        </Greetings>
        <Greetings
          lang = 'fr'
          children = 'les enfants'>
        </Greetings>
        <Random min={3} max={78}></Random>
        <Random min={34} max={45}></Random>
      </div>
    )
  }
}

export default App;
