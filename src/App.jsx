import logo from './logo.svg';
import './App.css';
import Person from './components/IdCard'
import Greetings from './components/Greetings';
import Random from './components/Random';
import Boxcolor from './components/Boxcolor';
import Likes from './components/LikeButton';
import ClickablePicture from './components/ClickablePicture';
import imgMaxAlgo from './assets/images/maxence.png';
import gafas from './assets/images/maxence-glasses.png'
import Dice from './components/Dice';
import diceEmpty from './assets/images/dice-empty.png';
import Carousel from './components/Carousel';






function App() {

  return (

    <>
      <Person
        lastName='Doe'
        firstName='John'
        gender='male'
        height={178}
        birth={new Date("1992-07-14").toDateString()}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />

      <Person
        lastName='Delores '
        firstName='Obrien'
        gender='female'
        height={172}
        birth={new Date("1988-05-11").toDateString()}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />
      <div>
        <Greetings lang="fr">Ludwig</Greetings>

        <Random min={1} max={100} />

        <Boxcolor classname='colorNumbers' r={255} g={30} b={200} />

        <Likes />

        <ClickablePicture img={imgMaxAlgo} gafas={gafas} />

        <Dice dice={diceEmpty} />

        <Carousel />
      </div>
    </>

  );
}

export default App;
