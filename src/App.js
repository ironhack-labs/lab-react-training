import React from 'react';

import './App.css';

//components
import IdCard from './components/IdCard'
import Greetings from './components/Greetings'
import Random from './components/Random'
import BoxColor from './components/BoxColor'
import CreditCard from './components/CreditCard'
import Rating from './components/Rating'
import DriverCard from './components/DriverCard'

import Carousel from './components/Carousel'
import NumbersTable from './components/NumbersTable'
import FaceBook from './components/FaceBook'
import SignupPage from './components/SignupPage'

//data
import profiles from './data/berlin.json';


function App() {
  return (
    <div id="IdCard__container" className="App">
       <h1>Iteration-1</h1>

      <IdCard lastName='Doe' firstName='John' gender='male' height={178} birth={new Date("1992-07-14").toDateString()} picture="https://randomuser.me/api/portraits/men/44.jpg"/>
      <IdCard lastName='Delores ' firstName='Obrien' gender='female' height={172} birth={new Date("1988-05-11").toDateString()} picture="https://randomuser.me/api/portraits/women/44.jpg"/>

      <h1>Iteration-2</h1>

      <Greetings lang="de">Alicia</Greetings>
      <Greetings lang="fr">Feliciano</Greetings>
      <Greetings lang="es">Eugenio</Greetings>
      <Greetings lang="en">Donald</Greetings>

      <h1>Iteration-3</h1>

      <Random min={1} max={6}/>
      <Random min={1} max={100}/>

      <h1>Iteration-4</h1>

      <BoxColor r={255} g={0} b={200} />
      <BoxColor r={128} g={25} b={10} />

      <h1>Iteration-5</h1>

      <div className="container__center">
        <CreditCard type="Visa" number="0123456789018845" expirationMonth={3} expirationYear={2021} bank="BNP" owner="Maxence Bouret" bgColor="#11aa99" color="white" />
        <CreditCard type="Master Card" number="0123456789010995" expirationMonth={3} expirationYear={2021} bank="N26" owner="Maxence Bouret" bgColor="#eeeeee" color="#222222" />
        <CreditCard type="Visa" number="0123456789016984" expirationMonth={12} expirationYear={2019} bank="Name of the Bank" owner="Firstname Lastname" bgColor="#ddbb55" color="white" />
      </div>

      <h1>Iteration-6</h1>

      <Rating>0</Rating>
      <Rating>1.49</Rating>
      <Rating>1.5</Rating>
      <Rating>3</Rating>
      <Rating>4</Rating>
      <Rating>5</Rating>

      <h1>Iteration-7</h1>
      
      <DriverCard
        name="Dara Khosrowshahi"
        rating={4.9}
        img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
        car={{
          model: "Audi A3",
          licensePlate: "BE33ER"
        }} />

      <h1>Iteration-8</h1>
      <h1>Iteration-9</h1>
      <h1>Iteration-10</h1>

      <h1>Iteration-11</h1>
      <div className="container__center">
        <Carousel
          imgs={[
            'https://randomuser.me/api/portraits/women/1.jpg',
            'https://randomuser.me/api/portraits/men/1.jpg',
            'https://randomuser.me/api/portraits/women/2.jpg',
            'https://randomuser.me/api/portraits/men/2.jpg'
          ]}
        />

      </div>

      <h1>Iteration-12</h1>
      <div className="container__center">
        <NumbersTable limit={12} />
      </div>

      <h1>Iteration-13,14</h1>
      <div className="container__iteration__13">
        <FaceBook data={profiles}/>  
      </div>

      <h1>Iteration-15</h1>
      <SignupPage />

    </div>
  )
}

export default App;
