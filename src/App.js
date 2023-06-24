import IdCard from './components/IdCard'
import Greetings from './components/Greetings';
import Random from './components/Random';
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreditCard';
import Rating from './components/Rating';
import LikeButton from './components/LikeButton';
import ClickablePicture from './components/ClickablePicture';
import Dice from './components/Dice';
import Carousel from './components/Carousel';
import NumbersTable from './components/NumbersTable';
import DriverCard from './components/DriverCard';

import img from '/Users/mauriciobenaventeibanez/reactTraining/lab-react-training/src/assets/images/maxence.png'
import toggleImg from '/Users/mauriciobenaventeibanez/reactTraining/lab-react-training/src/assets/images/maxence-glasses.png'
import dataJSON from './data/berlin.json'
import SignUp from './components/SignUp';


import Facebook from './components/Facebook';
import './App.css';

function App() {
  const idCard = [ {  
    lastName: "Delores",
    firstName:'Obrien',
    gender: 'female',
    height: 172,
    birth: "1988-05-11",
    picture: "https://randomuser.me/api/portraits/women/44.jpg"}

, { 
    lastName: "Doe",
    firstName:'John',
    gender: 'male',
    height: 178,
    birth: "1992-07-14",
    picture: "https://randomuser.me/api/portraits/men/44.jpg"
} ];
const creditCard = [
  {
    type:"Visa",
    number:"1",
    expirationMonth:3,
    expirationYear:2021,
    bank:"BNP",
    owner:"Maxence Bouret",
    bgColor:"#11aa99",
    color:"white" 
  },
  {
    type:"Master Card",
    number:"2",
    expirationMonth:3,
    expirationYear:2021,
    bank:"BNP",
    owner:"Maxence Bouret",
    bgColor:"#11aa99",
    color:"red" 
  },
  {
    type:"Oro",
    number:"3",
    expirationMonth:3,
    expirationYear:2021,
    bank:"BNP",
    owner:"Maxence Bouret",
    bgColor:"#11aa99",
    color:"red" 
  }
];


    return (
      <div className="App">
          <div>
        {idCard.map ((idCard => {
          return <IdCard idCard={idCard} key={idCard.firstName}/>
        }
        )
        )}
        </div>
        <Dice/>
        <Carousel 
        images={[
          'https://randomuser.me/api/portraits/women/1.jpg',
          'https://randomuser.me/api/portraits/men/1.jpg',
    'https://randomuser.me/api/portraits/women/2.jpg',
    'https://randomuser.me/api/portraits/men/2.jpg'
        ]}
        />
        

         <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>

      <Random min={1} max={5}>Random nº between 1-5: </Random>
      <Random min={10} max={20}>Random nº between 10-20: </Random>
      <BoxColor r={255} g={0} b={0}>rgb(255,0, 0) #ff0000  </BoxColor>
      <BoxColor r={128} g={255} b={0}>rgb(128, 255, 0) #80ff00   </BoxColor>
      <div>
      {creditCard.map((creditCard => {
return <CreditCard creditCard={creditCard} key={creditCard.number}/>

      }))}
      </div>
      <NumbersTable limit={12} />
      <Rating >0</Rating>
<Rating>1</Rating>
<Rating>1.7</Rating>
<Rating>3</Rating>
<Rating>4</Rating>
<Rating>4.7</Rating>
<LikeButton />
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
<ClickablePicture img={img} toggleImg={toggleImg} />
<Facebook data={dataJSON}/>
<SignUp/>


      </div>
    );
  
  }
 

export default App;
