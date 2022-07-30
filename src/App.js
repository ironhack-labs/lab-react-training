import logo from './logo.svg';
import './App.css';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import Random from './components/Random';
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreditCar';
import Rating from './components/Rating';
import DriverCard from './components/DriverCard';
import LikeButton from './components/LikeButton';
import ClickablePicture from './components/ClickablePicture';

function App() {
  return (
    <div className="App">
      {/*** <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> </header>*/}

        <IdCard 
        lastName='Doe'
        firstName='John'
        gender='male'
        height={178}
        birth={("1992-07-14")}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
        />
        <IdCard
        lastName='Delores '
        firstName='Obrien'
        gender='female'
        height={172}
        birth={("1988-05-11")}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
/>

<Greetings lang="de">Ludwig</Greetings>
<Greetings lang="fr">François</Greetings>
<Greetings lang="es">François</Greetings>

<Random min={1} max={6}></Random>
<Random min={1} max={100}></Random>

<BoxColor r={255} g={0} b={0} />
<BoxColor r={128} g={255} b={0} />

<div className='allCard'>
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

<div>
<Rating>0</Rating>
<Rating>1.49</Rating>
<Rating>1.5</Rating>
<Rating>3</Rating>
<Rating>4</Rating>
<Rating>5</Rating>
</div>


<div className='AppDriveCard'>
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
</div>

<div>
  <LikeButton color={['purple','blue','green','yellow','orange','red']}></LikeButton>
</div>

<div className='clickPicture'>
  <ClickablePicture  img='https://previews.123rf.com/images/jemastock/jemastock1705/jemastock170504862/77903166-dibujo-cara-chico-sonriente-ilustraci%C3%B3n-de-vector-de-dise%C3%B1o-de-avatar.jpg'
        imgClicked="https://previews.123rf.com/images/jemastock/jemastock1705/jemastock170509810/78457957-cara-hombre-arte-pop-estilo-imagen-vector-ilustraci%C3%B3n.jpg"/>
</div>


    </div>
  );
}

export default App;
