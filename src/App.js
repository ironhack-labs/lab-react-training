import React from 'react';
import './App.css';
import IdCard from './components/id-card/IdCard';
import Greetings from './components/greetings/Greetings';
import Rating from './components/rating/Rating';
import Random from './components/random/Random';
import BoxColor from './components/boxcolor/Boxcolor';
import LikeButton from './components/likebutton/Likebutton';
import ClickablePicture from './components/clickablepicture/ClickablePicture';
import CreditCard from './components/creditcard/CreditCard';

function App() {
  return (
    <section className="IdCards">
        <div className="Cards">
        <h3>Id Cards</h3>
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
      </div>

      <div>
        <h3>Greetings</h3>
        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="fr">François</Greetings>
      </div>

      <div>
        <h3>Random</h3>
        <Random min="1" max="6"/>
        <Random min="1" max="100"/>
      </div>

      <div>
        <h3>Rating</h3>
        <Rating>1</Rating>
        <Rating>2</Rating>
        <Rating>3.4</Rating>
        <Rating>4</Rating>
        <Rating>5</Rating>
      </div>

      <div>
        <h3>BoxColor</h3>
        <BoxColor r="255" g="0" b="0" />
        <BoxColor r="128" g="255" b="0" />
      </div>

      <h3>CreditCard</h3>
      <div class="row">
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
      


      <h3>LikeButton</h3>
      <div className="row"> 
        <div className="col-2"> 
          <LikeButton></LikeButton>
        </div>
        <div className="col-2"> 
          <LikeButton></LikeButton>
        </div>
      </div>

      <h3>ClickablePicture</h3>
      <div className="row"> 
        <div className="col-2"> 
        <ClickablePicture
          img={'/img/persons/maxence.png'}
          imgClicked={'/img/persons/maxence-glasses.png'}
        />
        </div>
      </div>


    </section>
  );
}

export default App;
