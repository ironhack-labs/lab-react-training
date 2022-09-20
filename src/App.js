import React from 'react';
import './App.css';
import BoxColor from './components/BoxColor/BoxColor';
import Greetings from './components/Greetings/Greetings';
import IdCard from './components/IdCard/IdCard';
import Random from './components/Random/Random';

const users = [
  {
    firstName: "Juan",
    lastName: "Perez",
    gender: "Male",
    height: 1.89,
    birth: new Date(1989, 9, 23).toDateString(),
    picture: "https://randomuser.me/api/portraits/men/23.jpg"
  },
  {
    firstName: "Maria",
    lastName: "Moran",
    gender: "Female", // ¿Cómo limito a 2 opciones male y female?
    height: 1.55, // ¿Por qué esto va entre {} en el GitHub
    birth: new Date(1994, 7, 23).toDateString(),
    picture: "https://randomuser.me/api/portraits/women/95.jpg"
  }
]
const App = () => {
  return (
    <div className='App'>
      <div className='container'>
      <div className='IdCards-container'>
        <h1>IdCard</h1>
        {users.map(user => {
          return (<IdCard key={user.lastName} firstName={user.firstName} lastName={user.lastName} gender={user.gender} height={user.height} birth={user.birth} picture={user.picture} />)
        })}
      </div>
      <div className='Greetings-container'>
        <h1>Greetings</h1>
        <Greetings lang="es">Juan</Greetings>
        <Greetings lang="en">John</Greetings>
        <Greetings lang="fr">Jean</Greetings>
        <Greetings lang="de">Hans</Greetings>
      </div>
      <div className='Random-container'>
      <h1>Random</h1>
      <Random min="1" max="5" />
      <Random min="50" max="1000" />
      </div>
      <div className='BoxColor-Container'>
        <h1>Box Color</h1>
        <BoxColor r={255} g={0} b={0} />
      </div>
      </div>
    </div>
  )
}

export default App;
