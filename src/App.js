import React from 'react';
import './App.css';
import IdCard from './components/IdCard/IdCard'
import Greetings from './components/Greetings/Greetings'
import Random from './components/Random/Random'
import BoxColor from './components/BoxColor/BoxColor'
import CreditCard from './components/CreditCard/CreditCard'
import Rating from './components/Rating/Rating'
import DriverCard from './components/DriverCard/DriverCard'
import LikeButton from './components/LikeButton/LikeButton'
import ClickablePicture from './components/ClickablePicture/ClickablePicture'
import Dice from './components/Dice/Dice'
import Carousel from './components/Carousel/Carousel'
import NumbersTable from './components/NumbersTable/NumbersTable'
import FaceBook from './components/FaceBook/FaceBook'
import Container from './components/Container/Container'
import SignUpPage from './components/SignUpPage/SignUpPage'

function App() {
  const users =
    [{
      lastName: 'Doe',
      firstName: 'John',
      gender: 'male',
      height: 178,
      birth: new Date('1992-07-14'),
      picture: 'https://randomuser.me/api/portraits/men/44.jpg'
    },
    {
      lastName: 'Dolores',
      firstName: 'Obrien',
      gender: 'female',
      height: 172,
      birth: new Date('1988-05-11'),
      picture: 'https://randomuser.me/api/portraits/women/44.jpg'
    }]

  return (
    <div className="App">
      <div className="p-5">
      <a className="flex items-center" href="/">
          <img className="h-12 w-auto sm:h-12" src="./img/rocket.svg" alt="site"/>
          <p className="text-indigo-600 ml-2 text-6xl font-bold">
                Lab React Training <span className="text-yellow-600 ml-2 text-2xl font-bold">
                coded by Patrick Lehmann
          </span>
          </p>
          
      </a>
      </div>
      <Container title='IdCard' content={<IdCard data={users} />} />
      <Container title='Greetings' content={[<Greetings lang='de' name='Jana' number={1} />, <Greetings lang='pt' name='Kimmie' number={2} />]} />
      <Container title='Random Number' content={[<Random min={1} max={6} />, <Random min={1} max={100} />]} />
      <Container title='Box Color' content={[<BoxColor r={204} g={204} b={255} />, <BoxColor r={150} g={222} b={209} />]} />
      <Container title='Credit Cards' content={[
        <CreditCard
          type="visa"
          number="0123456789014571"
          expirationMonth={3}
          expirationYear={2021}
          owner="Maxence Bouret"
          cvc='371' />,
        <CreditCard
          type="mastercard"
          number="0123456789016969"
          expirationMonth={3}
          expirationYear={2021}
          owner="Maxence Bouret"
          cvc='371' />,
        <CreditCard
          type="unionpay"
          number="0123456789018845"
          expirationMonth={5}
          expirationYear={2023}
          owner="Maxence Bouret"
          cvc='371' />
      ]}
      />


      <Container title='Rating' content={[
        <Rating total={5} rating={0} />,
        <Rating total={5} rating={1.49} />,
        <Rating total={5} rating={1.5} />,
        <Rating total={5} rating={3} />,
        <Rating total={5} rating={4} />,
        <Rating total={5} rating={5} />
      ]} />
      <Container title='Drivers Card' content={[
        <DriverCard
          name="Travis Kalanick"
          rating={4}
          img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
          car={{
            model: "Toyota Corolla Altis",
            licensePlate: "CO42DE"
          }} />,
        <DriverCard
          name="Dara Khosrowshahi"
          rating={4.9}
          img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
          car={{
            model: "Audi A3",
            licensePlate: "BE33ER"
          }} />
      ]} />

      <Container title='Like Button' content={[<LikeButton />, <LikeButton />]} />
      <Container title='Clickable Picture' content={<ClickablePicture />} />
      <Container title='Dice' content={<Dice />} />
      <Container title='Carousel' content={
          <Carousel
            imgs={[
              'https://randomuser.me/api/portraits/women/1.jpg',
              'https://randomuser.me/api/portraits/men/1.jpg',
              'https://randomuser.me/api/portraits/women/2.jpg',
              'https://randomuser.me/api/portraits/men/2.jpg'
          ]}/>} 
      />
     <Container title='Numbers Table' content={<NumbersTable limit={17} />}/>
     <FaceBook />
     <Container title='SignUp Page' content={<SignUpPage />}/>
     
      
    </div>
  );
}

export default App;
