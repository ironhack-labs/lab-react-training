
import './App.css';
import IdCard from './components/IdCard/idCard';
import Greetings from './components/Greetings/greetings';
import Random from './components/Random/random';
import BoxColor from './components/BoxColor/boxColor';
import CreditCard from './components/CreditCard/creditCard';
import Rating from './components/Rating/rating';
import DriverCard from './components/DriverCard/driverCard';
import LikeButton from './components/LikeButton/likeButton';
import ClickablePicture from './components/ClickablePic/clickablePic';
import Dice from './components/Dice/dice';
import Carousel from './components/Carousel/carousel';
import NumbersTable from './components/NumbersTable/numbersTable';

function App() {
  return (
    <main>
      <h1>ID CARD</h1>
      <IdCard
        lastName='Doe'
        firstName='John'
        gender='male'
        height={178}
        birth={new Date("1992-07-14")}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />

      <IdCard
        lastName='Delores'
        firstName='Obrien'
        gender='female'
        height={172}
        birth={new Date("1988-05-11")}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />

      <br />
      <h1>GREETINGS</h1>
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>

      <br />
      <h1>RANDOM</h1>
      <Random min={1} max={6} />
      <Random min={1} max={100} />

      <br />
      <h1>BOX COLOR</h1>
      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />

      <br />
      <h1>CREDIT CARD</h1>
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


      <br />
      <h1>RATING</h1>
      <Rating>0</Rating>
      <Rating>1.49</Rating>
      <Rating>1.5</Rating>
      <Rating>3</Rating>
      <Rating>4</Rating>
      <Rating>5</Rating>


      <br />
      <h1>DRIVER CARD</h1>

      <DriverCard
        name="Travis Kalanick"
        rating={4.2}
        img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
        car={{
          model: "Toyota Corolla Altis",
          licensePlate: "CO42DE"
        }}
      />

      <DriverCard
        name="Dara Khosrowshahi"
        rating={4.9}
        img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
        car={{
          model: "Audi A3",
          licensePlate: "BE33ER"
        }}
      />


      <br />
      <h1>LIKE BUTTON</h1>

      <LikeButton />

      <br />
      <h1>CLICKABLE PICTURE</h1>

      <ClickablePicture

        img='./assets/images/maxence.png'
        imgClicked='./assets/images/maxence-glasses.png'


      />

      <br />
      <h1>DICE</h1>
      <Dice />

      <br />
      <h1>CAROUSEL</h1>
      <Carousel
        images={[
          'https://randomuser.me/api/portraits/women/1.jpg',
          'https://randomuser.me/api/portraits/men/1.jpg',
          'https://randomuser.me/api/portraits/women/2.jpg',
          'https://randomuser.me/api/portraits/men/2.jpg'
        ]}
      />
      <br />
      <h1>NUMBERS TABLE</h1>
      <NumbersTable limit={12} />

      <br />
      <h1>LIST AND KEYS FACEBOOK SIMPLE</h1>

      <br />
      <h1>LIST AND KEYS FACEBOOK ADVANCE</h1>
    </main>
  );
}

export default App;
