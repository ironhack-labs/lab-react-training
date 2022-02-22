// import logo from './logo.svg';
import './App.css';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import Random from './components/Random';
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreditCard';
import Rating from './components/Rating';
import DriverCard from './components/DriverCard';
import LikeButton from './components/LikeButton';
import ClickablePicture from './components/ClickablerPicture';
import imgWithoutGlasses from './assets/images/maxence.png';
import imgWithGlasses from './assets/images/maxence-glasses.png';
import Dice from './components/Dice';
import Carousel from './components/Carousel';

function App() {
  return (
    <div className="App">

      {/* Iteration 1 */}
      <h1>Iteration 1</h1>
      <IdCard
        lastName='Doe'
        firstName='John'
        gender='male'
        height={178}
        birth={new Date("1992-07-14")}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />

      <IdCard
        lastName='Delores '
        firstName='Obrien'
        gender='female'
        height={172}
        birth={new Date("1988-05-11")}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />
      {/* End of Iteration 1 */}

      {/* Iteration 2 */}
      <h1>Iteration 2</h1>
      <Greetings lang="de" children="Hallo Ludwig" />
      <Greetings lang="fr" children="Bonjour François" />
      {/* End of Iteration 2 */}

      {/* Iteration 3 */}
      <h1>Iteration 3</h1>
      <Random min={1} max={6} />
      <Random min={1} max={100} />
      {/*End of Iteration 3 */}

      {/* Iteration 4 */}
      <h1>Iteration 4</h1>
      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />
      {/*End of Iteration 4 */}

      {/* Iteration 5 */}
      <h1>Iteration 5</h1>
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
      {/*End of Iteration 5 */}

      {/*Iteration 6 */}
      <h1>Iteration 6</h1>
      <Rating children={0} />
      <Rating children={1.49} />
      <Rating children={1.5} />
      <Rating children={3} />
      <Rating children={4} />
      <Rating children={5} />
      {/*End of Iteration 6 */}

      {/*Iteration 7 */}
      <h1>Iteration 7</h1>
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
      {/*End of Iteration 7 */}

      {/*Iteration 8 */}
      <h1>Iteration 8</h1>
      <LikeButton />
      {/*End of Iteration 8 */}

      {/*Iteration 9 */}
      <h1>Iteration 9</h1>
      <ClickablePicture
        imgClicked={imgWithGlasses}
        img={imgWithoutGlasses}
      />

      {/*End of Iteration 9 */}

      {/*Iteration 10 */}
      <h1>Iteration 10</h1>
      <Dice />
      {/*End of Iteration 10 */}

      {/*Iteration 11 */}
      <h1>Iteration 11</h1>
      <Carousel
        images={[
          'https://randomuser.me/api/portraits/women/1.jpg',
          'https://randomuser.me/api/portraits/men/1.jpg',
          'https://randomuser.me/api/portraits/women/2.jpg',
          'https://randomuser.me/api/portraits/men/2.jpg'
        ]}
      />
      {/*End of Iteration 11 */}

    </div>
  );
}

export default App;
