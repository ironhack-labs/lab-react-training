import './App.css';
import IdCard from './components/IdCard'
import Greetings from './components/Greetings'
import Random from './components/Random'
import BoxColor from './components/BoxColor'
import CreditCard from './components/CreditCard'
import LikeButton from './components/LikeButton';
import ClickablePicture from './components/ClickablePicture';
import maxence from './assets/images/maxence.png'
import maxenceGlasses from './assets/images/maxence-glasses.png'
import Dice from './components/Dice';
import Carousel from './components/Carousel';
import NumbersTable from './components/NumbersTable';
import FaceBook from './components/FaceBook'
import SignupPage from './components/SignupPage';

function App() {
  return (
    <div className="App">
      <IdCard lastName='Doe' firstName='John' gender='male' height={178} birth={new Date("1992-07-14")} picture="https://randomuser.me/api/portraits/men/44.jpg" />
      <IdCard lastName='Delores' firstName='Obrien' gender='female' height={172} birth={new Date("1988-05-11")} picture="https://randomuser.me/api/portraits/women/44.jpg" />
      <hr></hr>
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>
      <hr></hr>
      <Random min={1} max={6}/>
      <Random min={1} max={100}/>
      <hr></hr>
      <BoxColor style={{color: 'white'}} r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />
      <hr></hr>
      <div className='allCreditCards'>
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
      <hr />
      <LikeButton />
      <hr />
      <ClickablePicture
        img={maxence}
        imgClicked={maxenceGlasses}
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
      <hr />
      <FaceBook />
      <hr />
      <SignupPage />
      <hr />
    </div>
  );
}

export default App;
