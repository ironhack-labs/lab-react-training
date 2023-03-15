import './App.css';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import Random from './components/Random';
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreditCard/CreditCard';
import Rating from './components/Rating/Rating';
import DriverCard from './components/DriverCard/DriverCard';

function App() {
  return (
    <div className="App ">
      <div>
        <h1 className="ms-3">IdCard</h1>
        <IdCard
          lastName="Doe"
          firstName="John"
          gender="male"
          height='178'
          birth={new Date('1992-07-14')}
          picture="https://randomuser.me/api/portraits/men/44.jpg"
        />

        <IdCard
          lastName="Delores "
          firstName="Obrien"
          gender="female"
          height='172'
          birth={new Date('1988-05-11')}
          picture="https://randomuser.me/api/portraits/women/44.jpg"
        />
      </div>
      <div>
        <h1 className="ms-3">Greetings</h1>
        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="fr">François</Greetings>
      </div>
      <div>
        <h1 className="ms-3">Random</h1>
        <Random min='1' max='6' />
        <Random min='1' max='100' />
      </div>
      <div>
        <h1 className="ms-3">BoxColor</h1>
        <BoxColor r='255' g='0' b='0' />
        <BoxColor r='128' g='255' b='0' />
      </div>
      <div>
        <h1 className="ms-3">CreditCard</h1>
        <div className="row align-items-center">
          <div className="col p-1">
            <CreditCard
              type="Visa"
              number="0123456789018845"
              expirationMonth='3'
              expirationYear='2021'
              bank="BNP"
              owner="Maxence Bouret"
              bgColor="#11aa99"
              color="white"
            />
          </div>
          <div className="col p-1">
            <CreditCard
              type="Master Card"
              number="0123456789010995"
              expirationMonth='3'
              expirationYear='2021'
              bank="N26"
              owner="Maxence Bouret"
              bgColor="#eeeeee"
              color="#222222"
            />
          </div>
          <div className="col p-1">
            <CreditCard
              type="Visa"
              number="0123456789016984"
              expirationMonth='12'
              expirationYear='2019'
              bank="Name of the Bank"
              owner="Firstname Lastname"
              bgColor="#ddbb55"
              color="white"
            />
          </div>
        </div>
        <h1 className="ms-3">Rating</h1>
        <div className="fs-1 ms-4">
          <Rating>0</Rating>
          <Rating>1.49</Rating>
          <Rating>1.5</Rating>
          <Rating>3</Rating>
          <Rating>4</Rating>
          <Rating>5</Rating>
        </div>
        <h1 className="ms-3">Driver Card</h1>
        <div className="ms-3">
          <DriverCard
            name="Travis Kalanick"
            rating='4.2'
            img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
            car={{
              model: 'Toyota Corolla Altis',
              licensePlate: 'CO42DE',
            }}
          />

          <DriverCard
            name="Dara Khosrowshahi"
            rating='4.9'
            img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
            car={{
              model: 'Audi A3',
              licensePlate: 'BE33ER',
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
