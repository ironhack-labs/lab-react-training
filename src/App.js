import './css/pico.min.css';
import './css/custom.css';
import BoxColor from './components/BoxColor';
import Carousel from './components/Carousel';
import ClickablePicture from './components/ClickablePicture';
import CreditCard from './components/CreditCard';
import Dice from './components/Dice';
import DriverCard from './components/DriverCard';
import FaceBook from './components/FaceBook';
import Greetings from './components/Greetings';
import IdCard from './components/IdCard';
import LikeButton from './components/LikeButton';
import NumbersTable from './components/NumbersTable';
import Random from './components/Random';
import Rating from './components/Rating';
import RGBColorPicker from './components/RGBColorPicker';
import SignupPage from './components/SignupPage';

function App() {
  return (
    <div className="App">
      <h2>Iteration 16</h2>
      <RGBColorPicker />

      <h2>Iteration 15</h2>
      <SignupPage />

      <h2>Iteration 13 + 14</h2>
      <FaceBook />

      <h2>Iteration 12</h2>
      <NumbersTable limit={12} />

      <h2>Iteration 11</h2>
      <Carousel
        images={[
          'https://randomuser.me/api/portraits/women/1.jpg',
          'https://randomuser.me/api/portraits/men/1.jpg',
          'https://randomuser.me/api/portraits/women/2.jpg',
          'https://randomuser.me/api/portraits/men/2.jpg',
        ]}
      />

      <h2>Iteration 10</h2>
      <Dice />

      <h2>Iteration 9</h2>
      <ClickablePicture img="maxence.jpeg" imgClicked="maxence-glasses.jpeg" />

      <h2>Iteration 8</h2>
      <article>
        <LikeButton />
      </article>

      <h2>Iteration 7</h2>
      <div className="grid">
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

      <h2>Iteration 6</h2>
      <div className="grid">
        <article>
          <Rating>0</Rating>
        </article>
        <article>
          <Rating>1.49</Rating>
        </article>
        <article>
          <Rating>1.5</Rating>
        </article>
        <article>
          <Rating>3</Rating>
        </article>
        <article>
          <Rating>4</Rating>
        </article>
        <article>
          <Rating>5</Rating>
        </article>
      </div>

      <h2>Iteration 5</h2>
      <div className="grid">
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

      <h2>Iteration 4</h2>
      <div className="grid">
        <BoxColor r={255} g={0} b={0} />
        <BoxColor r={128} g={255} b={0} />
      </div>

      <h2>Iteration 3</h2>
      <div className="grid">
        <Random min={1} max={6} />
        <Random min={1} max={100} />
      </div>

      <h2>Iteration 2</h2>
      <div className="grid">
        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="fr">François</Greetings>
        <Greetings lang="es">Silvia</Greetings>
        <Greetings lang="en">Shaun 😉</Greetings>
        <Greetings>nameless Esperanto speaker</Greetings>
      </div>

      <h2>Iteration 1</h2>
      <div className="grid">
        <IdCard
          lastName="Doe"
          firstName="John"
          height={178}
          birth={new Date('1992-07-14')}
          picture="https://randomuser.me/api/portraits/men/44.jpg"
        />
        <IdCard
          lastName="Delores "
          firstName="Obrien"
          height={172}
          birth={new Date('1988-05-11')}
          picture="https://randomuser.me/api/portraits/women/44.jpg"
        />
      </div>
    </div>
  );
}

export default App;
