import IdCard from './Components/IdCard'
import Greetings from './Components/Greetings'
import LikeButton from './Components/LikeButton'
import Random from './Components/Random'
import ClickablePicture from './Components/ClickablePicture'

import React from 'react';
//import logo from './logo.svg';
import './App.css';

function App() {
  return (
<div className="App">
      <div>
        <h1>Id Cards</h1>
      <IdCard
  picture= "https://randomuser.me/api/portraits/men/44.jpg"
  firstName="John" 
  lastName="Doe" 
  gender="male" 
  height={1.78}
  birth= {new Date("1992-07-14").toString()}
  />
 <IdCard 
  picture= "https://randomuser.me/api/portraits/women/44.jpg"
  firstName="Obrien" 
  lastName="Delores" 
  gender="female" 
  height={1.72}
  birth= {new Date("1988-05-11").toString()}
  />
    </div>

    <div>
      <h1>Greetings</h1>
      <Greetings 
      lang = "de"
      children = "Ludwig"
      />
       <Greetings 
      lang = "fr"
      children = "François"
      />
    </div>

    {/* <div>
      <h1>Random</h1>
      <Random min={1} max={6} />
      <Random min={1} max={100} />
    </div>

    <div>
      <h1>BoxColor</h1>
      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />
    </div> */}

    <div>
      <h1>CreditCard</h1>
    </div>

    <div>
      <h1>Rating</h1>
    </div>

    <div>
      <h1>DriverCard</h1>
    </div>
  
    <div>
      <h1>Like Button</h1>
      <LikeButton/>
    </div>

    <div>
      <h1>ClickablePicture</h1>
      <ClickablePicture/>
    </div>

    <div>
      <h1>Dice</h1>
    </div>

    <div>
      <h1>Carousel</h1>
    </div>

    <div>
      <h1>NumbersTable</h1>
    </div>

    <div>
      <h1>FaceBook</h1>
    </div>

    <div>
      <h1>List and Keys - FaceBook</h1>
    </div>

    <div>
      <h1>Form - SignupPage</h1>
    </div>

    <div>
      <h1>Lifting State Up - RGBColorPicker</h1>
    </div>

</div>
    );
}
export default App;