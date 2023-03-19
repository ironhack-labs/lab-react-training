// import logo from './logo.svg';
import './App.css';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import Random from './components/Random';
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreditCard';
import ClickablePicture from './components/ClickablePicture';
import LikeButton from './components/LikeButton';
import Dice from './components/Dice';

function App() {
  return (
    <div className="App">
      <div className='bg-orange-200 font-bold my-1'>Id Card</div>
      <IdCard
        lastName='Doe'
        firstName='John'
        gender='male'
        height={178}
        birth={new Date("1992-07-14")}
        picture="https://randomuser.me/api/portraits/men/44.jpg" />
      <IdCard
        lastName='Delores '
        firstName='Obrien'
        gender='female'
        height={172}
        birth={new Date("1988-05-11")}
        picture="https://randomuser.me/api/portraits/women/44.jpg" />
      <div className='bg-orange-200 font-bold my-1'>Greetings</div>
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>
      <div className='bg-orange-200 font-bold my-1'>Random</div>
      <Random min={1} max={6} />
      <Random min={1} max={100} />
      <div className='bg-orange-200 font-bold my-1'>Box Color</div>
      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />
      <div className='bg-orange-200 font-bold my-1'>Credit Card</div>
      <div className='flex'>
        <CreditCard
          type="Visa"
          number="0123456789018845"
          expirationMonth={3}
          expirationYear={2021}
          bank="BNP"
          owner="Maxence Bouret"
          bgColor="#11aa99"
          color="white"
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
          color="white"
        />
      </div>
      <div className='bg-orange-200 font-bold my-1'>Clickable Picture</div>
      <ClickablePicture
        img='maxence.png'
        imgClicked='maxence-glasses.png'
      />
      <div className='bg-orange-200 font-bold my-1'>LikeButton</div>
      <div className='flex justify-center gap-2'>
        <LikeButton />
        <LikeButton />
      </div>
      <div className='bg-orange-200 font-bold my-1'>Dice</div>
      <Dice />
    </div>
  );
}

export default App;
