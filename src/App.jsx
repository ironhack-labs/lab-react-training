import logo from './logo.svg';
import './App.css';
import IdCard from './components/IdCard/IdCard';
import Greetings from './components/Greetings/Greetings';
import Random from './components/Random/Random';
import BoxColor from './components/BoxColor/BoxColor';
import CreditCard from './components/CreditCard/CreditCard';
import Rating from './components/Rating/Rating';
import LikeButton from './components/LikeButton/LikeButton';
import ClickablePicture from './components/ClickablePicture/ClickablePicture';
import max from "./assets/images/maxence.png"
import maxGlases from "./assets/images/maxence-glasses.png"
import Dice from './components/Dice/Dice';
import Carousel from './components/Carousel/Carousel';
import NumbersTable from './components/NumbersTable/NumbersTable';


function App() {
  return (
    <div className="App">
      <h1> IdCard</h1>
      <hr />
      <div className='box'>
        <IdCard
          lastName='Doe'
          firstName='John'
          gender='male'
          height={178}
          birth={new Date("1992-07-14")}
          picture="https://randomuser.me/api/portraits/men/44.jpg"
        />
      </div>
      <div className='box'>
        <IdCard
          lastName='Delores '
          firstName='Obrien'
          gender='female'
          height={172}
          birth={new Date("1988-05-11")}
          picture="https://randomuser.me/api/portraits/women/44.jpg"
        />
      </div>

      <Greetings lang="de">Ludwig</Greetings>
      <hr />
      <Greetings lang="fr">François</Greetings>
      <hr />

      <hr />
      <Random min={1} max={6} />
      <Random min={1} max={100} />
      <hr />
      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />
      <hr />
      <CreditCard
        type="Visa"
        number="0123456789018845"
        expirationMonth={3}
        expirationYear={2021}
        bank="BNP"
        owner="Maxence Bouret"
        bgColor="#11aa99"
        color="black"
      />



      <CreditCard
        type="Master Card"
        number="0123456789010995"
        expirationMonth={3}
        expirationYear={2021}
        bank="N26"
        owner="Maxence Bouret"
        bgColor="#eeeeee"
        color="#222222"
      />



      <CreditCard
        type="Visa"
        number="0123456789016984"
        expirationMonth={12}
        expirationYear={2019}
        bank="Name of the Bank"
        owner="Firstname Lastname"
        bgColor="#ddbb55"
        color="black"
      />

      <hr />
      <Rating>0</Rating>
      <Rating>1.49</Rating>
      <Rating>1.5</Rating>
      <Rating>3</Rating>
      <Rating>4</Rating>
      <Rating>5</Rating>
      <hr />
      <LikeButton />
      <LikeButton />
      <hr />
      <ClickablePicture
        img={max}
        imgClicked={maxGlases}
      />
      <hr />
      <Dice />
      <hr />
      <Carousel
        images={[
          'https://randomuser.me/api/portraits/women/1.jpg',
          'https://randomuser.me/api/portraits/men/1.jpg',
          'https://randomuser.me/api/portraits/women/2.jpg',
          'https://randomuser.me/api/portraits/men/2.jpg'
        ]}
      />
      <hr />
      <NumbersTable limit={12} />
    </div >


  );
}

export default App;
