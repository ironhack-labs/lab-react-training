import './App.css';
import BoxColor from './components/BoxColor';
import Carousel from './components/Carousel';
import ClickablePicture from './components/ClickablePicture';
import CreditCard from './components/CreditCard';
import Dice from './components/Dice';
import DriverCard from './components/DriverCard';
import Facebook from './components/Facebook';
import Greetings from './components/Greetings';
import IdCard from './components/IdCard';
import LikeButton from './components/LikeButton';
import NumbersTable from './components/NumbersTable';
import RGBColorPicker from './components/RGBColorPicker';
import Random from './components/Random';
import Rating from './components/Rating';
import SignUp from './components/SignUp';

function App() {
  return (
    <div>
      <br />
      <h1>Iteration 1</h1>
      <br />
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

      <br />
      <h1>Iteration 2</h1>
      <br />

      <Greetings lang="es">Pepe</Greetings>

      <br />
      <h1>Iteration 3</h1>
      <br />

      <Random min={20} max={200} />

      <br />
      <h1>Iteration 4</h1>
      <br />

      <BoxColor r={255} g={0} b={0} />

      <br />
      <h1>Iteration 5</h1>
      <br />

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
      <h1>Iteration 6</h1>
      <br />
      <Rating>0</Rating>
      <Rating>1.49</Rating>
      <Rating>1.5</Rating>
      <Rating>3</Rating>
      <Rating>4.2</Rating>
      <Rating>5</Rating>

      <br />
      <h1>Iteration 7</h1>
      <br />
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

      <br />
      <h1>Iteration 8</h1>
      <br />
      <LikeButton />
      <LikeButton />

      <br />
      <h1>Iteration 9</h1>
      <br />
      <ClickablePicture img="maxence.png" imgClicked="maxence-glasses.png" />

      <br />
      <h1>Iteration 10</h1>
      <br />
      <Dice />

      <br />
      <h1>Iteration 11</h1>
      <br />
      <Carousel
        images={[
          'https://randomuser.me/api/portraits/women/1.jpg',
          'https://randomuser.me/api/portraits/men/1.jpg',
          'https://randomuser.me/api/portraits/women/2.jpg',
          'https://randomuser.me/api/portraits/men/2.jpg',
        ]}
      />

      <br />
      <h1>Iteration 12</h1>
      <br />
      <NumbersTable limit={12} />
      <br />
      <h1>Iteration 13 and 14</h1>
      <br />

      <Facebook />
      <br />
      <h1>Iteration 15</h1>
      <br />
      <SignUp />
      <br />
      <h1>Iteration 16</h1>
      <br />
      <RGBColorPicker />
    </div>
  );
}

export default App;
