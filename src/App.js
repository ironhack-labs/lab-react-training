import React from 'react'
import './App.css'
import BoxColor from './components/BoxColor'
import Carousel from './components/Carousel'
import ClickablePicture from './components/ClickablePicture'
import CreditCard from './components/CreditCard'
import Dice from './components/Dice'
import DriverCard from './components/DriverCard'
import Greetings from './components/Greetings'
import IdCard from './components/IdCard'
import LikeButton from './components/LikeButton'
import Random from './components/Random'
import Rating from './components/Rating'
import Title from './components/Title'


function App() {
  return (
    <div className="App">

      <div className="container">
        <div className="row justify-content-between">
          <div className="col-12">
            <Title>IdCard</Title>

            <div className="row">
              <IdCard lastName="Doe" firstName="John" gender="male" height='178' birth='Tue Jul 14 1992' picture="https://randomuser.me/api/portraits/men/44.jpg" />
              <IdCard lastName="Delores" firstName="Obrien" gender="female" height='172' birth='Tue May 11 1993' picture="https://randomuser.me/api/portraits/women/44.jpg" />
            </div>

          </div>

          <div className="col-12">
            <Title>Greetings</Title>
            <div className="row">
              <Greetings lang="de">Ludwig</Greetings>
              <Greetings lang="fr">François</Greetings>
            </div>
          </div>

          <div className="col-12">
            <Title>Random</Title>
            <div className="row">
              <Random min={1} max={6} />
              <Random min={1} max={100} />
            </div>
          </div>


          <div className="col-12">
            <Title>BoxColor</Title>
            <div className="row">
              <BoxColor r={23} g={162} b={184} />
              <BoxColor r={29} g={33} b={36} />
            </div>
          </div>


          <div className="col-12">
            <Title>CreditCard</Title>
            <div className="row justify-content-around">
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
                bank="BBVA"
                owner="Anjocla"
                bgColor="#ddbb55"
                color="white" />
            </div>
          </div>

          <div className="col-12">
            <Title>Rating</Title>
            <div className="row justify-content-around">
              <Rating>0</Rating>
              <Rating>1.49</Rating>
              <Rating>1.5</Rating>
              <Rating>3</Rating>
              <Rating>4</Rating>
              <Rating>5</Rating>
            </div>
          </div>

          <div className="col-12">
            <Title>DriverCard</Title>
            <div className="row justify-content-around">
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

          <div className="col-12 like-btn-row">
            <Title>LikeButton</Title>
            <div className="row justify-content-around">
              <LikeButton />
              <LikeButton />
            </div>
          </div>

          <div className="col-12">
            <Title>ClickablePicture</Title>
            <div className="row justify-content-around">
              <ClickablePicture
                img='/img/persons/maxence.png'
                imgClicked='/img/persons/maxence-glasses.png'
              />
            </div>
          </div>

          <div className="col-12">
            <Title>ClickablePicture</Title>
            <div className="row justify-content-around">
              <Dice />
            </div>
          </div>

          <div className="col-12">
            <Title>Carousel</Title>
              <Carousel
                imgs={[
                  'https://randomuser.me/api/portraits/women/1.jpg',
                  'https://randomuser.me/api/portraits/men/1.jpg',
                  'https://randomuser.me/api/portraits/women/2.jpg',
                  'https://randomuser.me/api/portraits/men/2.jpg'
                ]}
              />
            </div>


        </div>
      </div>
    </div>
  )
}
export default App