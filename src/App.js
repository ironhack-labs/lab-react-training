import React from 'react';
import './App.css';
import BoxColor from './component/BoxColor';
import Carousel from './component/Carousel';
import ClickablePicture from './component/ClickablePicture';
import CreditCard from './component/CreditCard';
import Dice from './component/Dice';
import DriverCard from './component/DriverCard';
import FaceBook from './component/FaceBook';
import Greetings from './component/Greetings';
import IdCard from './component/IdCard';
import LikeButton from './component/LikeButton';
import NumbersTable from './component/NumbersTable';
import Random from './component/Random';
import Rating from './component/Rating';
import RGBColorPicker from './component/RGBColorPicker';
import SignupPage from './component/SignupPage';

function App() {
 
  return (
    <div className="App">
      <section>
        <h1>Iteration 1 | Component: IdCard</h1>
        <IdCard
          lastName='Doe'
          firstName='John'
          gender='male'
          height={178}
          birth="1992-07-14"
          picture="https://randomuser.me/api/portraits/men/44.jpg"
        />

        <IdCard
          lastName='Delores '
          firstName='Obrien'
          gender='female'
          height={172}
          birth="1988-05-11"
          picture="https://randomuser.me/api/portraits/women/44.jpg"
        />
      </section>

      <section>
        <h1>Iteration 2 | Component: Greetings</h1>
        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="fr">François</Greetings>
      </section>

      <section>
        <h1>Iteration 3 | Component: Random</h1>
        <Random min={1} max={6} />
        <Random min={1} max={100} />
      </section>

      <section>
        <h1>Iteration 4 | Component: BoxColor</h1>
        <BoxColor r={255} g={0} b={0} />
        <BoxColor r={128} g={255} b={0} />
      </section>

      <section >
        <h1>Iteration 5 | Component: CreditCard</h1>
        <div className="CreditCard-section">
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

      </section>

      <section>
        <h1>Iteration 6 | Component: Rating</h1>
        <Rating>0</Rating>
        <Rating>1.49</Rating>
        <Rating>1.5</Rating>
        <Rating>3</Rating>
        <Rating>4</Rating>
        <Rating>5</Rating>
      </section>

      <section>
        <h1>Iteration 7 | Component: DriverCard</h1>
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

      <section>
        <h1>Iteration 8 | Component: LikeButton</h1>
        <div className="LikeButton-section">
          <LikeButton /> <LikeButton />
        </div>
      </section>

      <section>
        <h1>Iteration 9: State: ClickablePicture</h1>
        <div className="ClickablePicture-section">
          <ClickablePicture
            img='/img/persons/maxence.png'
            imgClicked='/img/persons/maxence-glasses.png'
          />
        </div>
      </section>

      <section>
        <h1>Iteration 10 | State: Dice</h1>
        <Dice />
      </section>

      <section>
        <h1>Iteration 11 | State: Carousel</h1>
        <Carousel
          imgs={[
            'https://randomuser.me/api/portraits/women/1.jpg',
            'https://randomuser.me/api/portraits/men/1.jpg',
            'https://randomuser.me/api/portraits/women/2.jpg',
            'https://randomuser.me/api/portraits/men/2.jpg'
          ]}
        />
      </section>

      <section>
        <h1>Iteration 12 | List and Keys | NumbersTable</h1>
        <NumbersTable limit={12} />
      </section>

      <section>
        <h1>Iteration 13 | List and Keys - FaceBook</h1>
        <FaceBook />
      </section>

      <section>
        <h1>Iteration 15 | Form - SignupPage</h1>
        <SignupPage />
      </section>

      <section>
        <h1>Iteration 16 | Lifting State Up - RGBColorPicker</h1>
        <RGBColorPicker/>
      </section>
    </div>
  );
}

export default App;
