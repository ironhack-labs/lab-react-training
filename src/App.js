import React from 'react';
import './App.css';
import CreditCard from './creditcard/creditCard.js';
import Rating from './Rating/rating.js';
import DriverCard from './drivercard/driverCard.js';
import LikeButton from './likeButton';
import ClickablePicture from './clickablePicture';
import Dice from './dice.js';
import Carousel from './carousel.js';
import NumbersTable from './numberstable';

function IdCard(props) {
  let height = props.height / 100;
  return (
    <div className="id-card">
      <div className="image-card">
        <img src={props.picture} alt=""></img>
      </div>
      <div className="text-card">
        <p>
          <strong>First Name: </strong>
          {props.firstName}
        </p>
        <p>
          <strong>Last name: </strong>
          {props.lastName}
        </p>
        <p>
          <strong>Gender: </strong>
          {props.gender}
        </p>
        <p>
          <strong>Height: </strong>
          {height}m
        </p>
        <p>
          <strong>Birth: </strong>
          {props.birth}
        </p>
      </div>
    </div>
  );
}

function Greetings(props) {
  let greetingsMessage = '';
  let lang = props.lang;
  switch (lang) {
    case 'de':
      greetingsMessage = 'Guten Tag';
      break;
    case 'en':
      greetingsMessage = 'Hello';
      break;
    case 'es':
      greetingsMessage = 'Hola';
      break;
    case 'fr':
      greetingsMessage = 'Bonjour';
      break;
    default:
      greetingsMessage = 'Hallo';
  }
  return (
    <div className="greetings-card">
      <p>
        <strong>
          {greetingsMessage} {props.children}
        </strong>
      </p>
    </div>
  );
}

function Random(props) {
  let randomNumber = Math.floor(Math.random() * props.max + props.min);
  return (
    <div className="random-card">
      <p>
        <strong>
          Random value between {props.min} and {props.max} => {randomNumber}
        </strong>
      </p>
    </div>
  );
}

function BoxColor(props) {
  let textColor = '';
  if (props.r * 0.299 + props.g * 0.587 + props.b * 0.114 > 149) {
    textColor = 'black';
  } else {
    textColor = 'white';
  }
  return (
    <div
      className="boxcolor-card"
      style={{
        backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b}`,
        color: `${textColor}`,
      }}
    >
      <p>
        rgb({props.r},{props.g},{props.b})
      </p>
    </div>
  );
}

function App() {
  return (
    <div>
      <div>
        <h1 className="title">IdCard</h1>
        <IdCard
          lastName="Doe"
          firstName="John"
          gender="male"
          height={178}
          birth={new Date('1992-07-14').toLocaleDateString()}
          picture="https://randomuser.me/api/portraits/men/44.jpg"
        />
        <IdCard
          lastName="Delores "
          firstName="Obrien"
          gender="female"
          height={172}
          birth={new Date('1988-05-11').toLocaleDateString()}
          picture="https://randomuser.me/api/portraits/women/44.jpg"
        />
      </div>
      <div>
        <h1 className="title">Greetings</h1>
        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="fr">François</Greetings>
        <Greetings lang="en">Lynn</Greetings>
      </div>
      <div>
        <h1 className="title">Random</h1>
        <Random min={1} max={6} />
        <Random min={1} max={100} />
      </div>
      <div>
        <h1 className="title">BoxColor</h1>
        <BoxColor r={255} g={0} b={0} />
        <BoxColor r={128} g={255} b={0} />
      </div>
      <div>
        <h1 className="title">CreditCard</h1>
        <div className="credit-card-display">
          <CreditCard
            type="Visa"
            number="0123456789018845"
            expirationMonth={3}
            expirationYear={2021}
            bank="BNP"
            owner="Maxence Bouret"
            bgColor="#11aa99"
            color="white"
          />
          <CreditCard
            type="Master Card"
            number="0123456789010995"
            expirationMonth={3}
            expirationYear={2021}
            bank="N26"
            owner="Maxence Bouret"
            bgColor="#eeeeee"
            color="#222222"
          />
          <CreditCard
            type="Visa"
            number="0123456789016984"
            expirationMonth={12}
            expirationYear={2019}
            bank="Name of the Bank"
            owner="Firstname Lastname"
            bgColor="#ddbb55"
            color="white"
          />
        </div>
      </div>
      <div>
        <h1 className="title">Rating</h1>
        <Rating>0</Rating>
        <Rating>1.49</Rating>
        <Rating>1.5</Rating>
        <Rating>3</Rating>
        <Rating>4</Rating>
        <Rating>5</Rating>
      </div>
      <div>
        <h1 className="title">DriverCard</h1>
        <DriverCard
          name="Travis Kalanick"
          rating={4.2}
          img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
          car={{model: 'Toyota Corolla Altis', licensePlate: 'CO42DE',}}
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
        <h1 className="title">LikeButton</h1>
        <div className="like-button-box">
        <LikeButton/>
        <LikeButton/>
        </div>
      </div>
      <div>
        <h1 className="title">Clickable Picture</h1>
        <ClickablePicture img="/img/persons/maxence.png" imgClicked="/img/persons/maxence-glasses.png"/>
      </div>
      <div>
        <h1 className="title">Dice</h1>
        <Dice/>
      </div>
      <div>
        <h1 className="title">Carousel</h1>
        <Carousel
          imgs={[
          'https://randomuser.me/api/portraits/women/1.jpg',
          'https://randomuser.me/api/portraits/men/1.jpg',
          'https://randomuser.me/api/portraits/women/2.jpg',
          'https://randomuser.me/api/portraits/men/2.jpg'
          ]}
        />
      </div>
      <div>
        <h1 className="title">Numbers Table</h1>
        <NumbersTable limit={12}/>
        </div>
      <div>
        <p></p>
        <p></p>
        <p></p>
      </div>
    </div>
  );
}

export default App;
