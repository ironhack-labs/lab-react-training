import { useState } from 'react'
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



function App() {

  const colorsArray = ['purple','blue','green','yellow','orange','red'];
  
  const [likes, setLikes] = useState(0);
  const [likesSecond, setLikesSecond] = useState(0);
  const [color, setColor] = useState(0);
  const [colorSecond, setcolorSecond] = useState(0);
  const [visible, setVisible] = useState(true);
  const [dice, setDice] = useState('./images/dice-empty.png');

  //Handler functions
  const handleLike = () => {
    setLikes(likes + 1)
    if(color === colorsArray.length - 1){
      setColor(0)
    }else {
      setColor(color + 1)
    }
    console.log(colorsArray[color])
    
  }

  //Handle secon Like
  const handleLikeSecond = () => {
    setLikesSecond(likesSecond + 1)
    if(color === colorsArray.length - 1){
      setColor(0)
    }else {
      setcolorSecond(colorSecond + 1)
    }
    console.log(colorsArray[color])
    
  }

  //Handle visibility
  const toggleVisibility = () =>{
    setVisible(!visible);
    console.log(visible)
  }

  const randomDice = () => {
        setDice('../images/dice-empty.png');

        setTimeout(() => {
          setDice(`./images/dice${Math.floor(Math.random() * (6 - 1 + 1)) + 1}.png`)
        }, 1000)
        
    }

  return (
    <div className="App">
    <h1>Id Card</h1>
      <IdCard
        lastName='Doe'
        firstName='John'
        gender='male'
        height={178}
        birth={new Date("1992-07-14")}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />

    <IdCard
        lastName='Delores '
        firstName='Obrien'
        gender='female'
        height={172}
        birth={new Date("1988-05-11")}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
/>
      <h1>Greetings</h1>
      <Greetings
        lang='es'
        children='Ludwig'
      />

      <Greetings
        lang='fr'
        children='François'
      />

    <Random
      min={2}
      max={8}
    />

<Random
      min={8}
      max={15}
    />

  <BoxColor
    red={'250'}
    green={'200'}
    blue={'200'}

  />

<BoxColor
    red={'0'}
    green={'120'}
    blue={'180'}

  />
<div className="creditCard-container">
<CreditCard
  type="https://5c6c2a0de07b084ce35373ee--determined-aryabhata-a8a833.netlify.app/img/visa.png"
  number="0123456789018845"
  expirationMonth={3}
  expirationYear={2021}
  bank="BNP"
  owner="Maxence Bouret"
  bgColor="#11aa99"
  color="white" 
/>
    
<CreditCard
  type="https://5c6c2a0de07b084ce35373ee--determined-aryabhata-a8a833.netlify.app/img/master-card.svg"
  number="0123456789010995"
  expirationMonth={3}
  expirationYear={2021}
  bank="N26"
  owner="Maxence Bouret"
  bgColor="#eeeeee"
  color="#222222"
/>
    
<CreditCard
  type="https://5c6c2a0de07b084ce35373ee--determined-aryabhata-a8a833.netlify.app/img/visa.png"
  number="0123456789016984"
  expirationMonth={12}
  expirationYear={2019}
  bank="Name of the Bank"
  owner="Firstname Lastname"
  bgColor="#ddbb55"
  color="white" 
/>
</div>


<Rating rating={0}></Rating>
<Rating rating={1.49}></Rating>
<Rating rating={1.5}></Rating>
<Rating rating={3}></Rating>
<Rating rating={4}></Rating>
<Rating rating={5}></Rating>

<DriverCard
  name="Travis Kalanick"
  rating={4.2}
  img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
  car={{
    model: "Toyota Corolla Altis",
    licensePlate: "CO42DE"
  }}
/>

<DriverCard
  name="Dara Khosrowshahi"
  rating={4.9}
  img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
  car={{
    model: "Audi A3",
    licensePlate: "BE33ER"
  }}
/>
<div className="like-buttons-container">
<LikeButton
  likesFunction = {handleLike}
  likes = {likes}
  colors = {colorsArray[color]}
/>

<LikeButton
  likesFunction = {handleLikeSecond}
  likes = {likesSecond}
  colors = {colorsArray[colorSecond]}
/>
</div>

 

<ClickablePicture 
visibleFunction = {toggleVisibility}
visibility = {visible}
 />

  <Dice
    diceFunction = {randomDice}
    dice = {dice}
  />

    </div>
  );
}

export default App;
