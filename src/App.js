import React from 'react';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import RandomNumber from './components/RandomNumber';
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreditCard';
import Rating from './components/Rating';
import './App.css'
import DriverCard from './components/DriverCard';
import LikeButton from './components/LikeButton';
import ClickedImg from './components/ClickedImg';
import Dice from './components/Dice';
import Caroussel from './components/Caroussel';
import NumbersTable from './components/NumbersTable';
import profiles from './data/berlin.json'
import FbProfiles from './components/FbProfile';


function App() {

  const iDCardData = [
    {
      lastName: "Doe",
      firstName: "John",
      gender: "male",
      height: 178,
      date: new Date('1992-07-14').toLocaleDateString(),
      picture: "https://randomuser.me/api/portraits/men/44.jpg"
    },
    {
      lastName: "Dolores",
      firstName: "Obrien",
      gender: "female",
      height: 170,
      date: new Date('1990-07-14').toLocaleDateString(),
      picture: "https://randomuser.me/api/portraits/women/44.jpg"
    }
  ]
  
  const drivers = [
    {
      name: "Travis Kalanick",
      rating: 4.2,
      img: "https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428",
      car: {
        model: "Toyota Corolla Altis",
        licensePlate: "CO42DE"
      }
    },
    {
      name: "Dara khosrowsahi",
      rating: 4.9,
      img: "https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg",
      car: {
        model: "Audi A3",
        licensePlate: "BE33ER"
      }
    }
  ]

  const renderDrivers = drivers.map(driver => (
    <DriverCard
      imgUrl={driver.img}
      name={driver.name}
      driverRating={driver.rating}
      model={driver.car.model}
      licensePlate={driver.car.licensePlate}
      key={driver.name}
    />
  ))

  const renderIdCard = iDCardData.map(user => (
    <IdCard 
      lastName={user.lastName} 
      firstName={user.firstName} 
      gender={user.gender}
      height={user.height}
      birth={user.date}  
      picture={user.picture}
      key={user.lastName}
      />
  ));

  const random = {
    num: (num) => (Math.floor(Math.random() * num)),
    color: () => (Math.floor(Math.random() * 256)),
    lang: () => {
      const diffLang = ['en', 'es', 'de', 'fr']
      return diffLang[Math.floor(Math.random() * diffLang.length)]
    }
  }

  const creditCardData = [
    {
      type: "/img/master-card.svg",
      number: '1234567890101995',
      expirationMonth: random.num(13),
      expirationYear: 2021,
      bank: "N26",
      owner: "John Doe",
      bgColor: `rgb(${random.color()},${random.color()},${random.color()})`,
      color: 'white'
    },
    {
      type: "/img/visa.png",
      number: '1239638170104995',
      expirationMonth: random.num(13),
      expirationYear: 2025,
      bank: "BNP",
      owner: "Waskaman Doe",
      bgColor: `rgb(${random.color()},${random.color()},${random.color()})`,
      color: 'red'
    }
  ]

  const hideNumbers = (str) => str.replace(/[0-9](?=\d{4})/g, "*");

  const renderCCard = creditCardData.map(elem => (
    <CreditCard 
      type={elem.type}
      number={hideNumbers(elem.number)}
      expirationMonth={elem.expirationMonth}
      expirationYear={elem.expirationYear}
      bank={elem.bank}
      owner={elem.owner}
      bgColor={elem.bgColor}
      color={elem.color}
      className="c-card"
      key={elem.owner}
    />
  ))
  
  const carouselImgs = [
    'https://randomuser.me/api/portraits/women/1.jpg',
    'https://randomuser.me/api/portraits/men/1.jpg',
    'https://randomuser.me/api/portraits/women/2.jpg',
    'https://randomuser.me/api/portraits/men/2.jpg'
  ]

  const renderFBProfiles = profiles.map(user => (
    <FbProfiles
      firstName={user.firstName}
      lastName={user.lastName}
      country={user.country}
      isStudent={user.isStudent}
      img={user.img}
      key={user.lastName}
    />
  ))

  return (
    <div className="App">
        {renderIdCard}
        <Greetings lang={random.lang()} />
        <Greetings lang={random.lang()} />
        <RandomNumber min={random.num(10)} max={random.num(250)} />
        <RandomNumber min={random.num(10)} max={random.num(5000)} />
        <BoxColor r={random.color()} g={random.color()} b={random.color()} />
        <BoxColor r={random.color()} g={random.color()} b={random.color()} />
        <BoxColor r={random.color()} g={random.color()} b={random.color()} />
        <div className="c-card-container" >
        {renderCCard}
        </div>
        <Rating value={2}/>
        {renderDrivers}
        <LikeButton />
        <ClickedImg />
        <Dice />
        <Caroussel images={carouselImgs}/>
        <NumbersTable limit={15}/>
        <div className="profiles-box">
          {renderFBProfiles}
        </div>
        
    </div>
  );
}

export default App;
