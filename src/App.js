import './App.css';
import BoxColor from './components/BoxColor';
import ClickablePicture from './components/ClickablePicture';
import CreditCard from './components/CreditCard';
import Dice from './components/Dice';
import DriverCard from './components/DriverCard';
import Greetings from './components/Greetings';
import IdCard from './components/IdCard';
import LikeButton from './components/LikeButton';
import Random from './components/Random';
import Rating from './components/Rating';

function App() {
  return (
    <div className="App">

      <h1 className='text-center mt-3'>Iteration 1</h1>
      <IdCard
        lastName='Doe'
        firstName='John'
        gender='male'
        height={178}
        birth="1992-07-14"
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />
      <IdCard
        lastName='Delores '
        firstName='Obrien'
        gender='female'
        height={172}
        birth="1988-05-11"
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />

      <h1 className='text-center mt-5'>Iteration 2</h1>
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>

      <h1 className='text-center mt-5'>Iteration 3</h1>
      <Random min={1} max={6} />
      <Random min={1} max={100} />

      <h1 className='text-center mt-5'>Iteration 4</h1>
      <BoxColor r={250} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />

      <h1 className='text-center mt-5'>Iteration 5</h1>
      <div className='d-flex flex-row justify-content-center'>
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

      <h1 className='text-center mt-5'>Iteration 6</h1>
      <Rating>0</Rating>
      <Rating>1.49</Rating>
      <Rating>1.5</Rating>
      <Rating>3</Rating>
      <Rating>4</Rating>
      <Rating>5</Rating>

      <h1 className='text-center mt-5'>Iteration 7</h1>
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

      <h1 className='text-center mt-5 mb-3'>Iteration 8</h1>
      <div className="d-flex flex-row justify-content-center">
        <LikeButton />
        <LikeButton />
      </div>

      <h1 className='text-center mt-5 mb-3'>Iteration 9</h1>
      <div className='d-flex flex-row justify-content-center'>
        <ClickablePicture
          img="/maxence.png"
          imgClicked="/maxence-glasses.png"
        />
      </div>

      <h1 className='text-center mt-5 mb-3'>Iteration 10</h1>
      <div className='d-flex flex-row justify-content-center'>
        <Dice />
      </div>


    </div>
  );
}

export default App;
