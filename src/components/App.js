import React from 'react';
import './App.css';
import IdCard from './IdCard';
import Greetings from './Greetings';
import Random from './Random';
import BoxColor from './BoxColor';
import CreditCard from './CreditCard';
import Rating from './Rating';
import DriverCard from './DriverCard'
import LikeButton from './LikeButton';
import ClickablePicture from './ClickablePicture';
import Dice from './Dice';
import Carousel from './Carousel';
import NumbersTable from './NumbersTable';




function App() {
  return (
    <div className="App">
        <p>
          <h1>IdCard</h1> 
          <IdCard  
          lastName='Robson'
          firstName='Santos'
          gender='male'
          height={181}
          birth={new Date("1981-09-04")}
          picture="https://scontent.fcgh37-1.fna.fbcdn.net/v/t1.0-0/p206x206/74575651_2597664863589997_2029651297543651328_o.jpg?_nc_cat=100&_nc_sid=da31f3&_nc_ohc=a23hl9QxqYoAX--pDZW&_nc_ht=scontent.fcgh37-1.fna&_nc_tp=6&oh=442a4df3ee8977b9cdcb6ce31b8f77c2&oe=5F3D5DE3"/>
        </p>
        
        <h1>Greetings</h1>
        <Greetings lang="en">Ironhacker</Greetings> 

        <h1>Random</h1>
        <Random min={1} max={10}/>

        <h1>BoxColor</h1>
        <BoxColor r={255} g={0} b={0} />

        <h1>CreditCard</h1>
        <CreditCard 
          type="Visa"
          number="123456789101112"
          expirationMonth={7}
          expirationYear={2021}
          bank="Bradesco"
          owner="Robson Santos"
          bgColor="#c0c0c0"
          color="white" />

        <CreditCard 
          type="Master Card"
          number="211101987654321"
          expirationMonth={8}
          expirationYear={2021}
          bank="NuBank"
          owner="Robson Santos"
          bgColor="#800080"
          color="#222222" />

        <h1>Rating</h1>
        <Rating>0</Rating>
        <Rating>1.49</Rating>
        <Rating>1.5</Rating>
        <Rating>3</Rating>
        <Rating>4</Rating>
        <Rating>5</Rating>

        <h1>DriverCard</h1>
        <DriverCard 
        name="Robson Santos"
        rating={4.0}
        img="https://scontent.fcgh37-1.fna.fbcdn.net/v/t1.0-0/p206x206/75223831_2574866019203215_806700497204412416_o.jpg?_nc_cat=110&_nc_sid=e33968&_nc_ohc=erjCEpNwA0gAX-7_W1Z&_nc_ht=scontent.fcgh37-1.fna&_nc_tp=6&oh=9eef0585dc1c870c93f707551a4ca22f&oe=5F3E927B"
        car={{
        model: "BMW 320i",
        licensePlate: "1R0NH4CK"
          }} />
        <DriverCard 
        name="Dominic Toretto"
        rating={5.0}
        img="data:image/jpeg;base64,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"
        car={{
        model: "Charger R/T 1970",
        licensePlate: "F45TFUR1"
          }} />

        <h1>Like Button</h1>
        <LikeButton /> <LikeButton />  

        <h1>ClickablePicture</h1>
        <ClickablePicture
          img="https://scontent.fcgh37-1.fna.fbcdn.net/v/t1.0-0/p206x206/75223831_2574866019203215_806700497204412416_o.jpg?_nc_cat=110&_nc_sid=e33968&_nc_ohc=erjCEpNwA0gAX-7_W1Z&_nc_ht=scontent.fcgh37-1.fna&_nc_tp=6&oh=9eef0585dc1c870c93f707551a4ca22f&oe=5F3E927B" 
          imgClicked="https://i.ibb.co/0K5Q48P/75223831-2574866019203215-806700497204412416-o.jpg"
        />

        <h1>Dice</h1>
        <Dice />

        <h1>Carousel</h1>
        <Carousel
          imgs={["https://randomuser.me/api/portraits/women/1.jpg", "https://randomuser.me/api/portraits/men/1.jpg", "https://randomuser.me/api/portraits/women/2.jpg", "https://randomuser.me/api/portraits/men/2.jpg"]} />

        <h1>NumbersTable</h1>
        <NumbersTable limit={12} />  
      
        </div>

        
  )
}

export default App;
