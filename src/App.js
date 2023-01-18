import IdCard from './components/IdCard';
import './App.css';
import Greetings from './components/Greetings';
import Random from './components/Random';
import BoxColor from './components/BoxColor';
import Rating from './components/Rating';
import Star from './components/Star';
import LikeButton from './components/LikeButton';
import ClickablePicture from './components/ClickablePicture';
import Dice from './components/Dice'
import Carousel from './components/Carousel';
import NumbersTable from './components/NumbersTable';
import FaceBook from './components/FaceBook';

function App() {
  return (
    <div className="App">
   <IdCard
  lastName='Doe'
  firstName='John'
  gender='male'
  height={178}
  birth={new Date("1992-07-14")}
  picture= 'https://randomuser.me/api/portraits/men/44.jpg'
/>

<IdCard
  lastName='Delores '
  firstName='Obrien'
  gender='female'
  height={172}
  birth={new Date("1988-05-11")}
  picture="https://randomuser.me/api/portraits/women/44.jpg"
/>

  <Greetings lang="Hallo" name="Ludwig" ></Greetings>
  <Greetings lang="Hello" name="John"></Greetings>
  <Greetings lang="Ola" name="Horhe"></Greetings>
  <Greetings lang="Bonjour"name="François"></Greetings>
    
  <Random min={1} max={6}/>
  <Random min={1} max={100}/>

  <BoxColor r={255} g={0} b={0} />
  <BoxColor r={128} g={255} b={0} />

  <Rating>
    <Star star={0}/>
    <Star star={1.49}/>
    <Star star={1.5}/>
    <Star star={4}/>
    <Star star={5}/>
  </Rating>

  <LikeButton/>
  <ClickablePicture
  img='maxence.png'
  imgClicked='maxence-glasses.png'
   />
<br/>
  <Dice />
  <br/>
  <Carousel
  images={[
    'https://randomuser.me/api/portraits/women/1.jpg',
    'https://randomuser.me/api/portraits/men/1.jpg',
    'https://randomuser.me/api/portraits/women/2.jpg',
    'https://randomuser.me/api/portraits/men/2.jpg'
  ]}
  />
<br/>
<NumbersTable limit={12} />
<br/>
<FaceBook />
    </div>

  
  );
}

export default App;
