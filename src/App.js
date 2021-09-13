import React from 'react';
import BoxColor from './components/box-color/BoxColor';
import ClickablePicture from './components/clickable-picture/ClickablePicture';
import CreditCard from './components/credit-card/CreditCard';
import Greetings from './components/greetings/Greetings';
import IdCard from './components/id-card/IdCard';
import LikeButton from './components/like-button/LikeButton';
import Random from './components/random/Random';
import Rating from './components/rating/Rating';

function App() {
  return (
    <div className="App m-2">
      <section className="idCards m-3">
        <h2>IdCard</h2>
        <IdCard
          lastName="Doe"
          firstName="John"
          gender="male"
          height={(178 / 100).toFixed(2) + 'm'}
          birth={new Date('1992-07-14').toDateString()}
          picture="https://randomuser.me/api/portraits/men/44.jpg"
        />
        <IdCard
          lastName="Delores "
          firstName="Obrien"
          gender="female"
          height={(172 / 100).toFixed(2) + 'm'}
          birth={new Date('1988-05-11').toDateString()}
          picture="https://randomuser.me/api/portraits/women/44.jpg"
        />
      </section>

      <section className="greetings m-3">
        <h2>Greetings</h2>
        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="fr">François</Greetings>
      </section>

      <section className="random m-3">
        <h2>Random</h2>
        <Random min={1} max={6} />
        <Random min={1} max={100} />
      </section>

      <section className="box-color m-3">
        <h2>Box Color</h2>
        <BoxColor r={255} g={0} b={0} />
        <BoxColor r={128} g={255} b={0} />
      </section>

      <section className="credit-card m-3">
        <h2>Credit Card</h2>
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

      <section className="rating m-3">
        <h2>Rating</h2>
        <Rating>0</Rating>
        <Rating>1.49</Rating>
        <Rating>1.5</Rating>
        <Rating>3</Rating>
        <Rating>4</Rating>
        <Rating>5</Rating>
      </section>

      <section className="like-button m-3">
        <h2>Like Button</h2>
        <LikeButton startAt={0} /> <LikeButton startAt={0} />
      </section>

      <section className="clickable-picture m-3">
        <h2>Clickable Picture</h2>
        <ClickablePicture
          img="/img/persons/maxence.png"
          imgClicked="/img/persons/maxence-glasses.png"
        />
      </section>
    </div>
  );
}

export default App;
