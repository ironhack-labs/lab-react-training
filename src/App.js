import './App.css';
import IdCard from './components/IdCard/IdCard';
import Greetings from './components/Greetings/Greetings';
import Random from './components/Random/Random';
import BoxColor from './components/BoxColor/BoxColor';
import LikeButton from './components/LikeButton/LikeButton';
import ClickablePicture from './components/ClickablePicture/ClickablePicture';
import img from '../src/assets/images/maxence.png'
import imgClicked from '../src/assets/images/maxence-glasses.png'
import Dice from './components/Dice/Dice';
import Carousel from './components/Carousel/Carousel';
import NumbersTable from './components/NumbersTable/NumbersTable';




function App() {
  return (
    <div className="App">

<IdCard
  lastName='Doe'
  firstName='John'
  gender='male'
  height={178}
  birth={new Date("1992-07-14").toString()}
  profilePic="https://randomuser.me/api/portraits/men/44.jpg"
/>

<IdCard
  lastName='Delores '
  firstName='Obrien'
  gender='female'
  height={172}
  birth={new Date("1988-05-11").toString()}
  profilePic="https://randomuser.me/api/portraits/women/44.jpg"
/>
  <Greetings lang="es">Ludwig</Greetings>
  <Greetings lang="fr">François</Greetings>

  <Random min={1} max={6}/>
  <Random min={1} max={100}/>

  <BoxColor r={255} g={0} b={0} />
  <BoxColor r={128} g={255} b={0} />

  <LikeButton />

  <ClickablePicture
  img={img}
  imgClicked={imgClicked}
  />

  <Dice />

  <Carousel
  images={[
    'https://randomuser.me/api/portraits/women/1.jpg',
    'https://randomuser.me/api/portraits/men/1.jpg',
    'https://randomuser.me/api/portraits/women/2.jpg',
    'https://randomuser.me/api/portraits/men/2.jpg'
  ]}
  />

  <NumbersTable limit={12} />


    </div>
  );
}

export default App;
