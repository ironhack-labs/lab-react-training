import React from 'react';
import logo from './logo.svg';
import './App.css';
import IdCard from './components/id-card/IdCard';
import Greetings from './components/greetins/Greetings';
import RandomNumber from './components/random/RandomNumber';
import BoxColor from './components/box-color/BoxColor';
import CreditCard from './components/credit-card/CreditCard';
import Rating from './components/rating/Rating';
import DriverCard from './components/driver-card/DriverCard';
import LikeButton from './components/like-button/LikeButton';
import ClickablePicture from './components/clikable-picture/ClickablePicture';

function App() {
  return (
    
      <div>
        <section>
          <h2>Id Cards</h2>
          <div className="FlexDiv">
            <IdCard
              lastName='Doe'
              firstName='John'
              gender='male'
              height={178}
              birth={new Date("1992-07-14").toDateString()}
              picture="https://randomuser.me/api/portraits/men/44.jpg"
            />
            <IdCard
              lastName='Delores '
              firstName='Obrien'
              gender='female'
              height={172}
              birth={new Date("1988-05-11").toDateString()}
              picture="https://randomuser.me/api/portraits/women/44.jpg"
            />
          </div>
        </section>

        <section>
        <h2>Greetings</h2>
          <Greetings lang="de">Ludwig</Greetings>
          <Greetings lang="fr">François</Greetings>
        </section>

        <section>
          <h2>Random Number</h2>
          <RandomNumber min={1} max={6}/>
          <RandomNumber min={1} max={100}/>
        </section>

        <section>
          <h2>Box Color</h2>
          <div className="FlexDiv">
            <BoxColor r={255} g={0} b={0} />
            <BoxColor r={128} g={255} b={0} />
          </div>
        </section>

        <section>
          <h2>Credit Cards</h2>
          <div className="FlexDiv">
            <CreditCard
              type="Visa"
              number="0123456789018845"
              expirationMonth={3}
              expirationYear={2021}
              bank="BNP"
              owner="Maxence Bouret"
              bgColor="#11aa99"
              color="white" 
              lang="de"/>
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
        </section>

        <section>
          <h2>Rating Stars</h2>
          <Rating>0</Rating>
          <Rating>1.49</Rating>
          <Rating>1.5</Rating>
          <Rating>3</Rating>
          <Rating>4</Rating>
          <Rating>5</Rating>
        </section>

        <section>
          <h2>Driver Card</h2>
          <div className="FlexDiv">
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
        </section>
        <section>
          <h2>Like Button</h2>
          <LikeButton /> <LikeButton />
        </section>
        <section>
          <h2>Change portrait</h2>
        <ClickablePicture
          img='/img/persons/maxence.png'
          imgClicked='/img/persons/maxence-glasses.png'
        />
        </section>
      </div>

      

   
  );
}

export default App;
