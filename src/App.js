import React from 'react';
import IdCard from './components/IdCard/IdCard';
import Greetings from './components/Greetings/Greetings';
import Random from './components/Random/Random';
import BoxColor from './components/BoxColor/BoxColor';
import CreditCard from './components/CreditCard/CreditCard';
import Rating from './components/Rating/Rating';
import DriverCard from './components/DriverCard/DriverCard';
import LikeButton from './components/LikeButton/LikeButton';
import ClickablePicture from './components/ClickablePicture/ClickablePicture';

/*        Class     */

import IdCardClass from './classComponents/IdCard/IdCardClass';
import GreetingsClass from './classComponents/GreetingsClass/GreetingsClass';
import RandomClass from './classComponents/RandomClass/RandomClass';
import BoxColorClass from './classComponents/BoxColorClass/BoxColorClass';
import CreditCardClass from './classComponents/CreditCardClass/CreditCardClass';
import RatingClass from './classComponents/RatingClass/RatingClass';
import DriverCardClass from './classComponents/DriverCardClass/DriverCardClass';
import LikeButtonClass from './classComponents/LikeButtonClass/LikeButtonClass';
import ClickablePictureClass from './classComponents/ClickablePictureClass/ClickablePictureClass';

function App() {
  return (
    <main>
      <h1>Function components</h1>
      <h2>idCard</h2>
      <IdCard
        lastName="Doe"
        firstName="John"
        gender="male"
        height={178}
        birth={'1992-07-14'}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />
      <IdCard
        lastName="Delores "
        firstName="Obrien"
        gender="female"
        height={172}
        birth={'1988-05-11'}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />
      <h2>Greetings</h2>
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>
      <h2>Random</h2>
      <Random min={1} max={6} />
      <Random min={1} max={100} />
      <h2>Box Color</h2>
      <BoxColor r={255} g={0} b={0} txtcolor="white" />
      <BoxColor r={128} g={255} b={0} txtcolor="black" />
      <h2>Credit Card</h2>
      <section id="creditCards">
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
      </section>
      <h2>Rating</h2>
      <Rating>0</Rating>
      <Rating>1.49</Rating>
      <Rating>1.5</Rating>
      <Rating>3</Rating>
      <Rating>4</Rating>
      <Rating>5</Rating>
      <h2>Driver Card</h2>
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
        rating={'4.9'}
        img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
        car={{
          model: 'Audi A3',
          licensePlate: 'BE33ER',
        }}
      />
      <h2>Like Button</h2>
      <LikeButton /> <LikeButton />
      <h2>Clickable Picture</h2>
      <ClickablePicture
        img="/img/persons/maxence.png"
        imgClicked="/img/persons/maxence-glasses.png"
      />
      <hr />
      <h1>Class components</h1>
      <h2>IdCards</h2>
      <IdCardClass
        lastName="Doe"
        firstName="John"
        gender="male"
        height={178}
        birth={'1992-07-14'}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />
      <IdCardClass
        lastName="Delores "
        firstName="Obrien"
        gender="female"
        height={172}
        birth={'1988-05-11'}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />
      <h2>Greetings</h2>
      <GreetingsClass lang="de">Ludwig</GreetingsClass>
      <GreetingsClass lang="fr">François</GreetingsClass>
      <h2>Random</h2>
      <RandomClass min={1} max={6} />
      <RandomClass min={1} max={100} />
      <h2>Box Color</h2>
      <BoxColorClass r={255} g={0} b={0} txtcolor="white" />
      <BoxColorClass r={128} g={255} b={0} txtcolor="black" />
      <h2>Credit Card</h2>
      <section id="creditCards">
        <CreditCardClass
          type="Visa"
          number="0123456789018845"
          expirationMonth={3}
          expirationYear={2021}
          bank="BNP"
          owner="Maxence Bouret"
          bgColor="#11aa99"
          color="white"
        />
        <CreditCardClass
          type="Master Card"
          number="0123456789010995"
          expirationMonth={3}
          expirationYear={2021}
          bank="N26"
          owner="Maxence Bouret"
          bgColor="#eeeeee"
          color="#222222"
        />
        <CreditCardClass
          type="Visa"
          number="0123456789016984"
          expirationMonth={12}
          expirationYear={2019}
          bank="Name of the Bank"
          owner="Firstname Lastname"
          bgColor="#ddbb55"
          color="white"
        />
      </section>
      <h2>Rating</h2>
      <RatingClass>0</RatingClass>
      <RatingClass>1.49</RatingClass>
      <RatingClass>1.5</RatingClass>
      <RatingClass>3</RatingClass>
      <RatingClass>4</RatingClass>
      <RatingClass>5</RatingClass>
      <h2>Driver Card</h2>
      <DriverCardClass
        name="Travis Kalanick"
        rating={4.2}
        img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
        car={{
          model: 'Toyota Corolla Altis',
          licensePlate: 'CO42DE',
        }}
      />
      <DriverCardClass
        name="Dara Khosrowshahi"
        rating={'4.9'}
        img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
        car={{
          model: 'Audi A3',
          licensePlate: 'BE33ER',
        }}
      />
      <LikeButtonClass /> <LikeButtonClass />
      <h2>Clickable Picture</h2>
      <ClickablePictureClass
        img="/img/persons/maxence.png"
        imgClicked="/img/persons/maxence-glasses.png"
      />
    </main>
  );
}

export default App;
