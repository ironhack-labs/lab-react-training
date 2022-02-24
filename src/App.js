import './App.css';
import Icards from './components/Icards';
import Greetings2 from './components/Greetings2';
import Random from './components/Random';
import BoxColor from './components/BoxColor'
import LikeButton from './components/LikeButton';
import ClickablePicture from './components/ClickablePicture';
import Dice from './components/Dice';

function App() {

  return (  

    <>
    
    <Icards
     lastName='Doe'
     firstName='John'
     gender='male'
     height={178}
     birth={new Date("1992-07-14").toLocaleDateString()}
     picture="https://randomuser.me/api/portraits/men/44.jpg" />

    <Icards 
        lastName='Delores '
        firstName='Obrien'
        gender='female'
        height={172}
        birth={new Date("1988-05-11").toLocaleDateString()}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
    />

     
    
    <Greetings2 />
    <Random min={1} max={100} />
    <BoxColor r={54} g={90} b={86} />
    <LikeButton/>

    <ClickablePicture
      img="./assets/images/maxence.png"
      imgClicked="./assets/images/maxence-glasses.png"
    />

    <Dice/>

  

  </>
  
  );


}

export default App;
