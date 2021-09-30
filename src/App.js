import React from 'react';
import logo from './logo.svg';
import './App.css';
import IdCard from './IdCard/IdCard';
import Greetings from './Greetings/Greetings';
import Random from './random/Random';
import BoxColor from './boxcolor/BoxColor';
import Rating from './rating/Rating';
import DriverCard from './drivercard/DriverCard';
import LikeButton from './likebutton/LikeButton';
import ClickablePicture from './clickablepicture/ClickablePicture';

function App() {
  return (
    <div className="App">
      <div>
        <h1>
          <b>ID Card</b>
        </h1>
        <IdCard
          lastName="Doe"
          firstName="John"
          gender="male"
          height={178}
          birth={new Date('1992-07-14')}
          picture="https://randomuser.me/api/portraits/men/44.jpg"
        />

        <IdCard
          lastName="Delores "
          firstName="Obrien"
          gender="female"
          height={172}
          birth={new Date('1988-05-11')}
          picture="https://randomuser.me/api/portraits/women/44.jpg"
        />
      </div>
      <div>
        <h1>
          <b>GREETINGS</b>
        </h1>
        <Greetings> Davy Crocket</Greetings>
        <Greetings lang="fr"> Davy Crocket</Greetings>
      </div>
      <div>
        <h1>
          <b>ID Card</b>
        </h1>
        <Random min={1} max={6} />
        <Random min={1} max={100} />
      </div>
      <div>
        <h1>
          <b>Box Color</b>
        </h1>
        <BoxColor r={255} g={0} b={0} />
        <BoxColor r={128} g={255} b={0} />
      </div>
      <div>
        <h1>
          <b>Rating</b>
        </h1>
        <Rating>0</Rating>
        <Rating>1.49</Rating>
        <Rating>1.5</Rating>
        <Rating>3</Rating>
        <Rating>4</Rating>
        <Rating>5</Rating>
      </div>
      <div>
        <h1>
          <b>Driver Cards</b>
        </h1>
        <DriverCard
          name="Travis Kalanick"
          rating={4.2}
          img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
          car={{
            model: 'Toyota Corolla Altis',
            licensePlate: 'CO42DE',
          }}
        />
        <DriverCard
          name="Dara Khosrowshahi"
          rating={4.9}
          img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
          car={{
            model: 'Audi A3',
            licensePlate: 'BE33ER',
          }}
        />
      </div>
      <div>
        <h1>
          <b>Like Button</b>
        </h1>
        <LikeButton></LikeButton>
      </div>
      <div>
        <h1>
          <b>Clickable Picture</b>
        </h1>
        <ClickablePicture
          img="/img/persons/maxence.png"
          imgClicked="/img/persons/maxence-glasses.png"
        ></ClickablePicture>
      </div>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
}

export default App;
