import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import profiles from './data/berlin.json';

import IdCard from "./components/idcard/IdCard";
import Greetings from "./components/greetings/Greetings";
import Random from "./components/random/Random";
import BoxColor from "./components/boxcolor/BoxColor";
import CreditCard from "./components/creditcard/CreditCard";
import Rating from "./components/rating/Rating";
import DriverCard from "./components/drivercard/DriverCard";
import LikeButton from "./components/likebutton/LikeButton";
import ClickablePicture from "./components/clickablepicture/ClickablePicture";
import Dice from "./components/dice/Dice";
import Carousel from "./components/carousel/Carousel";
import NumbersTable from "./components/numberstable/NumbersTable";
import FaceBook from "./components/facebook/FaceBook";

class App extends Component {



  render(){
    return (
      <div className="App">
        <main>
            <IdCard
              lastName='Doe'
              firstName='John'
              gender='male'
              height={178}
              birth={"1992-07-14"}
              picture="https://randomuser.me/api/portraits/men/44.jpg"
            />

            <IdCard
              lastName='Delores '
              firstName='Obrien'
              gender='female'
              height={172}
              birth={"1988-05-11"}
              picture="https://randomuser.me/api/portraits/women/44.jpg"
            />

            {/* children é o que eu puser dentro do componente */}
            <Greetings lang="de" >Hello Ludwig</Greetings>
            <Greetings lang="fr" >Hallo François</Greetings>

            <Random min={1} max={6}/>
            <Random min={1} max={100}/>

            <BoxColor r={255} g={0} b={0}>#ff0000</BoxColor>
            <BoxColor r={128} g={255} b={0}>#80ff00</BoxColor>

            <div className="Wrap">
              <CreditCard
                type="Visa"
                number="0123456789018845"
                expirationMonth={3}
                expirationYear={2021}
                bank="BNP"
                owner="Maxence Bouret"
                bgColor="#11aa99"
                color="white" />
              <CreditCard
                type="Master Card"
                number="0123456789010995"
                expirationMonth={3}
                expirationYear={2021}
                bank="N26"
                owner="Maxence Bouret"
                bgColor="#eeeeee"
                color="#222222" />
              <CreditCard
                type="Visa"
                number="0123456789016984"
                expirationMonth={12}
                expirationYear={2019}
                bank="Name of the Bank"
                owner="Firstname Lastname"
                bgColor="#ddbb55"
                color="white" />
            </div>

            <div className="ratings">
              <Rating>0</Rating>
              <Rating>1.49</Rating>
              <Rating>1.5</Rating>
              <Rating>3</Rating>
              <Rating>4</Rating>
              <Rating>5</Rating>
            </div>

            <div className="drivercards">
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

            <div className="likes">
              <LikeButton /> <LikeButton />
            </div>


            <div className="clickablePicture">
              <ClickablePicture
                  img='/img/persons/maxence.png'
                  imgClicked='/img/persons/maxence-glasses.png'
                />
            </div>

            <div className="dice">
              <Dice/>
            </div>


            <div className="carousel">
              <Carousel
                imgs={[
                  'https://randomuser.me/api/portraits/women/1.jpg',
                  'https://randomuser.me/api/portraits/men/1.jpg',
                  'https://randomuser.me/api/portraits/women/2.jpg',
                  'https://randomuser.me/api/portraits/men/2.jpg'
                ]}
              />
            </div>

            <NumbersTable limit={12} />

            <FaceBook />



        </main>
      </div>
    )
  }
}

export default App;
