import logo from './logo.svg';
import './App.css';
import IdCard from './components/idCard.jsx'
import Greetings from './components/greeting.jsx'
import Random from './components/random.jsx'
import BoxColor from './components/boxcolor.jsx'
import CreditCard from './components/CreditCard.jsx'
import Rating from './components/Rating.jsx'
import DriverCard from './components/DriverCard.jsx'
import LikeButton from './components/LikeButton.jsx'
import ClickablePicture from './components/ClickablePicture.jsx'
import img from './assets/images/maxence.png'
import img2 from './assets/images/maxence-glasses.png'
import Dice from './components/Dice'
import Carousel from './components/Carousel'
import NumbersTable from './components/NumbersTable'



function App() {
  return (
    <div className="App">
        <IdCard
      lastName='Doe'
      firstName='John'
      gender='male'
      height={178}
      birth={new Date("1992-07-14").toDateString()}
      picture="https://randomuser.me/api/portraits/men/44.jpg"
    />

    <IdCard
      lastName='Delores '
      firstName='Obrien'
      gender='female'
      height={172}
      birth={new Date("1988-05-11").toDateString()}
      picture="https://randomuser.me/api/portraits/women/44.jpg"
    />
<div>
  <h1>Greetings:</h1>
<Greetings lang="de"> Ludwig</Greetings>
<Greetings lang="en"> Adam</Greetings>
<Greetings lang="es"> Hector</Greetings>
<Greetings lang="fr"> François</Greetings>
</div>

<div>
  <h1>Random numbers:</h1>
<Random min={1} max={6}/>
<Random min={1} max={100}/>
</div>
<div>
  <BoxColor r={255} g={0} b={0} />
  <BoxColor r={128} g={255} b={0} />
</div>

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
<div>
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
<div>
<LikeButton/>
<LikeButton/>
</div>
<div>
<ClickablePicture
  img={img}
  imgClicked= {img2}
/>
</div>
<div>
<Dice/>
</div>

<div>
<NumbersTable limit={12} />
</div>

<div>
<Carousel
  images={[
    'https://randomuser.me/api/portraits/women/1.jpg',
    'https://randomuser.me/api/portraits/men/1.jpg',
    'https://randomuser.me/api/portraits/women/2.jpg',
    'https://randomuser.me/api/portraits/men/2.jpg'
  ]}
/>
</div>


</div>
    </div>
    

  );
}

export default App;
