import './App.css';
import IdCard from './components/IdCard/IdCard';
import personsArray from "./iteration1.json"
import Greetings from './components/Greetings/Greetings';
import Random from './components/Random/Random';
import { Divider } from 'antd';
import BoxColor from './components/BoxColor/BoxColor';
import CreditCard from './components/CreditCard/CreditCard';
import creditCardArray from './CreditCard.json'
import Ratings from './components/Ratings/Ratings';
import DriverCard from './components/DriverCard/DriverCard';
import driversArray from "./DriversArray.json"
import LikeButton from './components/LikeButton/LikeButton';
import ClickablePicture from './components/ClickablePicture/ClickablePicture';
import picture from './assets/images/maxence.png'
import pictureWithGlasses from './assets/images/maxence-glasses.png'
import Dice from './components/Dice/Dice';
import Carousel from './components/Carousel/Carousel';
import carouselImages from './CarouselImages.json'
import NumbersTable from './components/NumbersTable/NumbersTable';
import Facebook from './components/Facebook/Facebook';
import SignupPage from './components/SignupPage/SignupPage';
import RGBColorPicker from './components/RGBColorPicker/RGBColorPicker';

function App() {
  console.log(creditCardArray)
  return (
    <div className="App">
    <Divider>Iteration 1: Persons' Card</Divider>

    <IdCard personsArray={personsArray}/>
    
      <Divider>Iteration 2: Language Conditional</Divider>

      <Greetings  lang="fr"> François</Greetings>
      <Greetings lang="ger"> Hans</Greetings>
      
      <Divider>Iteration 3: Random Number Generator</Divider>

      <div className='flex'>
      <p className='number-random'>Generate a random number between 5 & 25:<span className='randomizer'> <Random min={5} max={25}/> </span></p>
      <p className='number-random'>Generate a random number between 0 & 100:<span className='randomizer'><Random min={0} max={100}/> </span> </p>
      </div>
      <Divider>Iteration 4: Color Boxes</Divider>
      <div className='flex'>
      <BoxColor r={152} g={120} b={45}/>
      <BoxColor r={12} g={50} b={122}/>
      </div>
      <Divider>Iteration 5: Credit Cards</Divider>
      <div className='flex'>
      <CreditCard creditCardArray={creditCardArray}/>
      </div>
      <Divider>Iteration 6: Ratings</Divider>
      <Ratings> 2</Ratings>
      <Ratings> 4.3</Ratings>
      <Ratings> 1</Ratings>
      <Ratings> 0</Ratings>
      
      <Divider>Iteration 7: Driver Card</Divider>
      <DriverCard driversArray={driversArray}/>
      <Divider>Iteration 8: State Like Button</Divider>
      <LikeButton/>
      <Divider>Iteration 9: Click the Picture!</Divider>
      <ClickablePicture picture={picture} pictureWithGlasses={pictureWithGlasses}/>
      <Divider>Iteration 10: Click the Dice!</Divider>
      <Dice />
      <Divider>Iteration 11: Carousel</Divider>
      <Carousel carouselImages={carouselImages}/>
      <Divider>Iteration 12: Numbers Table</Divider>
      <NumbersTable limit={22}/>
      <Divider>Iteration 13 +14: Facebook Simple & Advanced Country Filter</Divider>
      <Facebook/>
      <Divider>Iteration 15: SignUp Form</Divider>

      <SignupPage/>
      <Divider>Iteration 16: RGB Color Picker</Divider>
      <RGBColorPicker/>

    </div>
  );
}

export default App;
