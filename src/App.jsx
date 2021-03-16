import IdCard from './Components/IdCard'
import Greetings from './Components/Greetings'

import React from 'react';
import logo from './logo.svg';
import './App.css';

function Card() {
  return (
    <div className="App">
 <IdCard
  picture= "https://randomuser.me/api/portraits/men/44.jpg"
  firstName="John" 
  lastName="Doe" 
  gender="male" 
  height={1.78}
  birth= {new Date("1992-07-14").toString()}/>
 <IdCard 
  picture= "https://randomuser.me/api/portraits/women/44.jpg"
  firstName="Obrien" 
  lastName="Delores" 
  gender="female" 
  height={1.72}
  birth= {new Date("1988-05-11").toString()}/>
    </div>
  );
}

function Greets() {

}


export default Card;
export default Greets;
