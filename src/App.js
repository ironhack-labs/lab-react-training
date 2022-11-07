import logo from './logo.svg';
import './App.css';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import Random from './components/Random';
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreditCard';
import Rating from './components/Rating';
import DriverCard from './components/DriverCard';
import LikeButton from './components/LikeButton';
import ClickablePicture from './components/ClickablePicture';
import Dice from './components/Dice';
import max from './assets/images/maxence.png'
import maxGlass from './assets/images/maxence-glasses.png'

function App() {
  return (
    <div className="App">
      <IdCard lastName="Ezzel" firstName="Rian" gender="m" height={170} dob="Nov 25th 1988" 写真="https://randomuser.me/api/portraits/men/44.jpg"/>

      <IdCard lastName="Delores" firstName="Obrien" gender="f" height={153} dob="May 25th 1988" 写真="https://randomuser.me/api/portraits/women/8.jpg"/>

      <h1>GREETINGS</h1>
     <Greetings lang="de" >Lurdvbig </Greetings>
     <Greetings lang="fr" >Fracious </Greetings>
     <Greetings lang="en" >Greg </Greetings>

     <h1>RANDOM</h1>
     <Random min="1" max="6"/>
     <Random min="1" max="100"/>

     <h1>BOXCOLOR</h1>
     <BoxColor r={255} g={0} b={0}/>
     <BoxColor r={128} g={255} b={0}/>

    <h1>CreditCard</h1>
    <CreditCard 
    bgColor="thistle" 
    color="white"
    expyMonth="02"
    expyYear="22"
    bank="BOA"
    owner="Uhnaiz Pyrson"
    />
    <h1>Rating</h1>
    <Rating rating>4.5</Rating>

    <h1>Driver Card</h1>
    <DriverCard name="Fredrick BurgerKing" rating={5} car={{
      model:"bigBoy",
      liscensePlate: "K4NY3"                }}
       img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg" 
      />
  <div>LIKE BUTTON</div>
    <LikeButton/>

    <div>CLICKABLE PICTURE</div>
<ClickablePicture img={max} imgClicked ={maxGlass}/>

<div>DICE</div>
<Dice />


    </div>


  );
}

export default App;
