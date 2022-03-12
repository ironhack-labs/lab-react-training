import './App.css';
import Idcard from './Idcard.js'; //importado a funcao com o js.
import Greetings from './components/Greeting.js';
import Random from './components/Random';
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreditCard';
import Ratings from './components/Ratings';
import DriverCard from './components/DriverCard';
import LikeButton from './components/LikeButton';
import ClickablePicture from './components/ClickablePicture';
import Dice from './components/Dice';
import Carousel from './components/Carousel';
import NumbersTable from './components/NumbersTable';
import Facebook from './components/Facebook';
import SignUpPage from './components/SignUpPage';
import maxence from './assets/images/maxence.png';
import maxenceGlasses from './assets/images/maxence-glasses.png';
import dice from './assets/images/dice-empty.png';
import dice1 from './assets/images/dice1.png';
import dice2 from './assets/images/dice2.png';
import dice3 from './assets/images/dice3.png';
import dice4 from './assets/images/dice4.png';
import dice5 from './assets/images/dice5.png';
import dice6 from './assets/images/dice6.png';

const dataBase = [
  {
    lastName: 'Doe',
    firstName: 'John',
    gender: 'male',
    height: 1.78,
    birth: new Date('1992-07-14'),
    picture: 'https://randomuser.me/api/portraits/men/44.jpg',
  },
  {
    lastName: 'Delores ',
    firstName: 'Obrien',
    gender: 'female',
    height: 1.72,
    birth: new Date('1988-05-11'),
    picture: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>IdCard</h1>
      </header>
      <div>
        {dataBase.map((currentIdcardObj) => {
          return (
            <div>
              <Idcard
                dataObj={currentIdcardObj}
                // firstName={currentIdcardObj.firstName}
                // lastName={currentIdcardObj.lastName}
                // gender={currentIdcardObj.gender}
                // height={currentIdcardObj.height}
                // birth={currentIdcardObj.birth}
                // picture={currentIdcardObj.picture}
              />
            </div>
          );
        })}
      </div>
      <div>
        <h1 className="Titulos">Greetings</h1>
        <div className="card-box">
          <Greetings lang="de">Ludwig</Greetings>
        </div>
        <div className="card-box">
          <Greetings lang="en">François</Greetings>
        </div>
      </div>
      <div>
        <h1 className="Titulos">Random</h1>
        <div className="card-box">
          <Random min={1} max={6}></Random>
        </div>
        <div className="card-box">
          <Random min={1} max={100}></Random>
        </div>
      </div>
      <div>
        <h1 className="Titulos">BoxColor</h1>
        <div>
          <BoxColor r={13} g={200} b={171}></BoxColor>
        </div>
        <div>
          <BoxColor r={10} g={100} b={17}></BoxColor>
        </div>
      </div>
      <div>
        <h1 className="Titulos">CreditCard</h1>
        <div className="card-list">
          <div>
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
          </div>
          <div>
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
          </div>
          <div>
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
        </div>
      </div>
      <div>
        <h1 className='App'>Ratings</h1>
        <div>
            <Ratings>0</Ratings>
            <Ratings>1.49</Ratings>
            <Ratings>1.5</Ratings>
            <Ratings>3</Ratings>
            <Ratings>4</Ratings>
            <Ratings>5</Ratings>
        </div>
      </div>  
      <div>
        <h1 className='Titulos'>Driver Card</h1>
        <div className='driverCard'>
            <DriverCard
                name="Travis Kalanick"
                rating={4.2}
                img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
                car={{
                  model: "Toyota Corolla Altis",
                  licensePlate: "CO42DE"
                }}
            ></DriverCard>
            <DriverCard
                name="Dara Khosrowshahi"
                rating={4.9}
                img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
                car={{
                  model: "Audi A3",
                  licensePlate: "BE33ER"
                }}
            ></DriverCard>
        </div>
      </div>
      <div>
        <h1 className='Titulos'>Like Button</h1>
        <div className='likeButton'>
          <LikeButton />
        </div>
      </div>
      <div>
        <h1 className='Titulos'>Clickable Picture</h1>
        <div className='clickablePicture'>
          <ClickablePicture
          semOculos={maxence}
          comOculos={maxenceGlasses}
          />
        </div>
      </div>
      <div>
        <h1 className='Titulos'>Dice</h1>
        <div className='Dice'>
          <Dice
          semLado={dice} 
          umLado={dice1}
          doisLados={dice2}
          tresLados={dice3}
          quatroLados={dice4}
          cincoLados={dice5}
          seisLados={dice6}  
          />
        </div>
      </div> 
      <div>
        <h1 className='Titulos'>Carousel</h1>
        <div className='Carousel'>
          <Carousel />
        </div>
      </div>
      <div>
        <h1 className='Titulos'>Numbers Table</h1>
        <div className='NumbersTable'>
          <NumbersTable />
        </div>
      </div>
      <div>
        <h1 className='Titulos'> Facebook </h1>
        <div className='Facebook'>
          <Facebook />
        </div>
      </div>
      <div>
        <h1 className='Titulos'>SignUp Page</h1>
        <div className='SignUpPage'>
          <SignUpPage />
        </div>
      </div>
    </div>
  );
}

export default App;
