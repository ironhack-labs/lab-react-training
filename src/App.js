import React from 'react';
import logo from './logo.svg';
import './App.css';
import IdCard from './components/IdCard';

// const IdCards = [
//   {
//     lastName: "Herrero",
//     firstName: "Pedro",
//     gender: "male",
//     height: 182,
//     birth: new Date ("1992-07-14"),
//     picture: "https://randomuser.me/api/portraits/men/44.jpg"
//   },
//   {
//     lastName: "Díaz",
//     firstName: "Ana",
//     gender: "feminine",
//     height: 170,
//     birth: new Date ("1990-07-14"),
//     picture: "https://randomuser.me/api/portraits/women/44.jpg"
//   }
// ]

function App() {
  return (
    <div className="App">
          <IdCard
            lastName='Doe'
            firstName='John'
            gender='male'
            height='178'
            birth={new Date("1992-07-14")}
            picture="https://randomuser.me/api/portraits/men/44.jpg"
          />

          <IdCard
            lastName='Delores '
            firstName='Obrien'
            gender='female'
            height='172'
            birth={new Date("1988-05-11")}
            picture="https://randomuser.me/api/portraits/women/44.jpg"
          />
    </div>
  );
}

export default App;

