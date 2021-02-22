import React from 'react';
import Idcard from './components/Idcard';
import Greetings from './components/Greetings';
import Random from './components/Random';
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreditCard';
import Rating from './components/Rating';
import DriverCard from './components/DriverCard';


function App() {
  return (
  <div>
    <Idcard picture='https://static.wikia.nocookie.net/disney/images/c/ca/Profile_-_Sebastian.jpeg/revision/latest/smart/width/200/height/200?cb=20190312033135'
            firstName='Sebastian'
            lastName='Montoya'
            gender='male'
            height='5`10'
            birth= 'March 25th 1996' />
    <Idcard picture='https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/SpongeBob_SquarePants_character.svg/1200px-SpongeBob_SquarePants_character.svg.png'
            firstName='SpongeBob'
            lastName='Squarepants'
            gender='male'
            height='4in'
            birth= 'May 1st 1999' />
    <hr />
    <Greetings lang='es'>Sebastian</Greetings>
    <Greetings lang='fr'>Spongebob</Greetings>
    <hr />
    <Random min={20} max={25} />
    <Random min={50} max={200} />
    <hr />
    <BoxColor r={255} g={0} b={0} />
    <BoxColor r={66} g={4} b={32} />
    <hr />
    <div className='creditCard'>
        <CreditCard type='Visa'
                        number='1234123412341234'
                        expirationMonth={3}
                        expirationYear={25}
                        bank='Suntrust'
                        owner='Sebastian Montoya'
                        bgColor='#11aa99'
                        color='white'
                />
        <CreditCard type='Mastercard'
                number='1234123412349876'
                expirationMonth={7}
                expirationYear={27}
                bank='PNC'
                owner='SpongeBob Squarepants'
                bgColor='orange'
                color='white'
        /> 
        <CreditCard type='Visa'
                number='1234123412344480'
                expirationMonth={8}
                expirationYear={24}
                bank='Chase'
                owner='Sandy Cheeks'
                bgColor='blue'
                color='white'
        /> 
        </div>
        <hr/>   
        <div className='ratingContainer'>
                <Rating>3</Rating>
                <Rating>2</Rating>
                <Rating>5</Rating>
        </div>
        <hr/> 
        <div className='driverCardContainer'>
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

        </div>           
  </div>
  );
}

export default App;
