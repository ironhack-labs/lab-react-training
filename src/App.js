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
      <IdCard  data={users}/>
      <Greetings lang='de' name='Jana' />
      <Greetings lang='pt' name='Kimmie' />
      <Random min={1} max={6} />
      <Random min={1} max={100} />
      <BoxColor r={204} g={204} b={255} />
      <BoxColor r={150} g={222} b={209} />
      <CreditCard
        type="visa"
        number="0123456789014571"
        expirationMonth={3}
        expirationYear={2021}
        owner="Maxence Bouret"
        cvc='371' />
      <CreditCard
        type="mastercard"
        number="0123456789016969"
        expirationMonth={3}
        expirationYear={2021}
        owner="Maxence Bouret"
        cvc='371' />
      <CreditCard
        type="unionpay"
        number="0123456789018845"
        expirationMonth={5}
        expirationYear={2023}
        owner="Maxence Bouret"
        cvc='371' />
         <div className='stars'><Rating total={5} rating={0} /></div>
         <div className='stars'><Rating total={5} rating={1.49} /></div>
         <div className='stars'><Rating total={5} rating={1.5} /></div>
         <div className='stars'><Rating total={5} rating={3} /></div>
         <div className='stars'><Rating total={5} rating={4} /></div>
         <div className='stars'><Rating total={5} rating={5} /></div>
         <DriverCard
          name="Travis Kalanick"
          rating={4.2}
          img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
          car={{
            model: "Toyota Corolla Altis",
            licensePlate: "CO42DE"
         }} />
        <DriverCard
          name="Dara Khosrowshahi"
          rating={4.9}
          img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
          car={{
            model: "Audi A3",
            licensePlate: "BE33ER"
          }} />
          <LikeButton />  
          <LikeButton />
    </div>
    
  );
}

export default App;
