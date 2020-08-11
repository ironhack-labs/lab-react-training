import React from 'react'
import IdCard from './components/Idcard/IdCard'
import Greetings from './components/Greetings/Greetings'
import Random from './components/RandomNum/RandomNum'
import BoxColor from './components/Boxcolor/BoxColor'
import CreditCard from './components/Creditcard/CreditCard'
import Rating from './components/Rating/Rating'
import DriverCard from './components/DriverCard/DriverCard'
import LikeButton from './components/Likebutton/LikeButton'
import ClickablePicture from './components/Clickablepicture/ClickablePicture'
import Dice from './components/Dice/Dice'

function App() {

  const creditCards = 
  [{
      cardImg: "./img/visa.png",
      number: "0123456789018845",
      expirationMonth: 3,
      expirationYear: 2021,
      bank: "BNP",
      owner: "Maxence Bouret",
      bgColor: "#11aa99",
      color: "white"
    },
    {
      cardImg: "./img/master-card.svg",
      number: "0123456789010995",
      expirationMonth: 3,
      expirationYear: 2021,
      bank: "N26",
      owner: "Maxence Bouret",
      bgColor: "#eeeeee",
      color: "white"
    },
    {
      cardImg: "./img/visa.png",
      number: "0123456789016984",
      expirationMonth: 12,
      expirationYear: 2019,
      bank: "Firstname Lastname",
      owner: "Maxence Bouret",
      bgColor: "#ddbb55",
      color: "white"
    }];

    
    const creditCardList = creditCards.map((elem, index) => (
      <CreditCard 
      key={index}
      cardImg={elem.cardImg}
      number={elem.number}
      expirationMonth={elem.expirationMonth}
      expirationYear={elem.expirationYear}
      bank={elem.bank}
      owner={elem.owner}
      bgColor={elem.bgColor}
      color={elem.color}
    />
    ));

    const driverCards = 
     [{
        name: "Travis Kalanick",
        rating:  '4.2',
        img: "https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width: 620&height: 428",
        car: {
            model: "Toyota Corolla Altis",
          licensePlate: "CO42DE"
        }
    },
    {
        name: 'Dara Khosrowshahi',
        rating: '4,9',
        img: "https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg",
        car: {
          model: 'Audi A3',
          licensePlate: 'BE33ER'
        }
     }];
  
    const driverCardList = driverCards.map((elem, index) => (
      <DriverCard
        key={index}
        name={elem.name}
        rating={elem.rating}
        img={elem.img}
        

      />

    ));
  return (
    <div className="App">
      <IdCard
        lastName='Doe'
        firstName='John'
        gender='male'
        height={178}
        birth='1992'
        img="https://randomuser.me/api/portraits/men/44.jpg"/>
      
      <IdCard
        lastName='Delores '
        firstName='Obrien'
        gender='female'
        height={172}
        birth="1988-05-11"
        img="https://randomuser.me/api/portraits/women/44.jpg"/>

      <hr></hr>

      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="es">Carlos</Greetings>
      <Greetings lang="en">Peter</Greetings>
      <Greetings lang="fr">JB</Greetings>

      <hr></hr>

      <Random min={1} max={6}/>
      <Random min={1} max={100}/>

      <hr></hr>

      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />

      <hr></hr>

      {creditCardList}

      <hr></hr>

      <Rating>0</Rating>
      <Rating>1.49</Rating>
      <Rating>1.5</Rating>
      <Rating>3</Rating>
      <Rating>4</Rating>
      <Rating>5</Rating>

      <hr></hr>

      {/* {driverCardList} PROBLEMA CON MODEL Y LICENSE PLATE */}

      <DriverCard 
        name="Travis Kalanick"
        rating= '4.2'
        img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
        car={{
           model: "Toyota Corolla Altis",
          licensePlate: "CO42DE"
         }}
      />

      <DriverCard 
        name= 'Dara Khosrowshahi'
        rating= '4,9'
        img= "https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
        car= {{
          model: 'Audi A3',
          licensePlate: 'BE33ER'
        }}
      />

        <hr></hr>

      <LikeButton />
      <LikeButton />

        <hr></hr>

        <ClickablePicture 
          img='./img/persons/maxence.png'
          imgClicked='/img/persons/maxence-glasses.png'
        />

        <hr></hr>

        <Dice />

        <hr></hr>
    </div>
  );
}

export default App;
