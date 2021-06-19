import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import IdCard from "./components/IdCard";
import Greetings from "./components/Greetings";
import RandomNumber from "./components/Random";
import BoxColor from "./components/BoxColor";
import CreditCard from "./components/CreditCard";
import Rating from "./components/Rating";
import DriverCard from "./components/DriverCard";
import LikeButton from "./components/LikeButton";
import ClickablePicture from "./components/ClickablePicture";
import Dice from "./components/Dice";
import Carousel from "./components/Carousel";
import NumbersTable from "./components/NumbersTable";
import Facebook from "./components/Facebook";
import SignupPage from "./components/SignupPage";
import RGBColorPicker from "./components/RGBColorPicker";
export default class App extends Component {

  render(){
      const cards = [{
          lastName: "Doe",
          firstName: "John",
          gender: "Male",
          height: "1.75m",
          birth: "01-01-1980",
          picture: "img/persons/maxence.png"
        },
        {
          lastName: "Doe",
          firstName: "John",
          gender: "Male",
          height: "1.75m",
          birth: "01-01-1980",
          picture: "img/persons/maxence-glasses.png"
        }
      ];
      const greetings = [{
        lang: "es",
        children: "John",
      },
      {
        lang: "fr",
        children: "John",
      }
      ];
      const creditCards = [{
        type: "mastercard",
        number: "1234567890123456",
        expirationMonth: "01",
        expirationYear: "22",
        bank: "BankName",
        owner: "David Jhones",
        bgColor: "gold",
        color: "white",
        },
        {
          type: "visa",
          number: "9999999999999999",
          expirationMonth: "12",
          expirationYear: "23",
          bank: "Test",
          owner: "Jhones David",
          bgColor: "pink",
          color: "black",
        }
      ];
      return(
          <div className="App">
              <section className="iteration1">
                <h1>Iteration 1</h1>
                  {cards.map((idCard, index_idCard)=>(
                      <IdCard
                      key={index_idCard}
                      lastName={idCard.lastName}
                      firstName={idCard.firstName}
                      gender={idCard.gender}
                      height={idCard.height}
                      birth={idCard.birth}
                      picture={idCard.picture}
                      />
                  ))}
              </section>
              <section className="iteration2">
                <h1>Iteration 2</h1>
                <Greetings lang="de">Ludwig</Greetings>
                <Greetings lang="fr">Ludwig</Greetings>
              </section>
              <section className="iteration3">
                <h1>Iteration 3</h1>
                <RandomNumber min="1" max="6"/>
                <RandomNumber min="1" max="100"/>
              </section>
              <section className="iteration4">
                <h1>Iteration 4</h1>
                <BoxColor r="255" g="0" b="0"/>
                <BoxColor r="128" g="255" b="0"/>
              </section>
              <section className="iteration5">
                <h1>Iteration 5</h1>
                  {creditCards.map((cc, index_idCard)=>(
                      <CreditCard
                      key={index_idCard}
                      type={cc.type}
                      number={cc.number}
                      expirationMonth={cc.expirationMonth}
                      expirationYear={cc.expirationYear}
                      bank={cc.bank}
                      owner={cc.owner}
                      bgColor={cc.bgColor}
                      color={cc.color}
                      />
                  ))}
              </section>
              <section className="iteration6">
                <h1>Iteration 6</h1>
                <Rating>0</Rating>
                <Rating>1.49</Rating>
                <Rating>3.5</Rating>
              </section>
              <section className="iteration7">
                <h1>Iteration 7</h1>
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
              </section>
              <section className="iteration8">
                <h1>Iteration 8</h1>
                <LikeButton />
                <LikeButton />
              </section>
              <section className="iteration9">
                <h1>Iteration 9</h1>
                <ClickablePicture
                  img='/img/persons/maxence.png'
                  imgClicked='/img/persons/maxence-glasses.png'
                />
              </section>
              <section className="iteration10">
                <h1>Iteration 10</h1>
                <Dice/>
              </section>
              <section className="iteration11">
                <h1>Iteration 11</h1>
                <Carousel
                  imgs={[
                    'https://randomuser.me/api/portraits/women/1.jpg',
                    'https://randomuser.me/api/portraits/men/1.jpg',
                    'https://randomuser.me/api/portraits/women/2.jpg',
                    'https://randomuser.me/api/portraits/men/2.jpg'
                  ]}
                />
              </section>
              <section className="iteration12">
                <h1>Iteration 12</h1>
                <NumbersTable limit={12} />
              </section>
              <section className="iteration13">
                <h1>Iteration 13 and 14</h1>
                <Facebook />
              </section>
              <section className="iteration15">
                <h1>Iteration 15</h1>
                <SignupPage />
              </section>
              <section className="iteration16">
                <h1>Iteration 16</h1>
                <RGBColorPicker/>
              </section>
          </div>
      )
  }
}