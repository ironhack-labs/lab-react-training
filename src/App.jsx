import Greetings from './components/greetings/Greetings';
import IdCard from './components/idCard/IdCard';
import Random from './components/random/Random';
import BoxColor from './components/boxColor/BoxColor';
import CreditCard from './components/creditCard/CreditCard';
import Rating from './components/rating/Rating';
import DriverCard from './components/driverCard/DriverCard';
import LikeButton from './components/likeButton/LikeButton';
import ClickablePicture from './components/clickablePicture/ClickablePicture';
import './App.css';
import Dice from './components/dice/Dice';
import Carousel from './components/carousel/Carousel';
import NumbersTable from './components/numbersTable/NumbersTable';

const App = () => {
  return (
    <div className="App">
      <div className="components">
        <h1>IdCards Component</h1>
        <IdCard
          firstName="John"
          lastName="Doe"
          gender="male"
          height={178}
          birth={new Date('1992-07-14')}
          picture="https://randomuser.me/api/portraits/men/44.jpg"
        />
        <IdCard
          firstName="Obrien"
          lastName="Delores"
          gender="female"
          height={172}
          birth={new Date('1988-05-11')}
          picture="https://randomuser.me/api/portraits/women/44.jpg"
        />
      </div>

      <hr />

      <div className="components">
        <h1>Greetings Component</h1>
        <Greetings>Español</Greetings>
        <Greetings lang="en">English</Greetings>
        <Greetings lang="fr">François</Greetings>
        <Greetings lang="de">Ludwig</Greetings>
      </div>

      <hr />

      <div className="components">
        <h1>Random Component</h1>
        <Random min={8} max={10} />
      </div>

      <hr />

      <div className="components">
        <h1>BoxColor Component</h1>
        <BoxColor />
        <BoxColor r={255} g={0} b={0} />
        <BoxColor r={123} g={80} b={0} />
      </div>

      <hr />

      <div className="components">
        <h1>CreditCard Component</h1>
        <div className="credit-card">
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
            bank="ING"
            owner="Gastón Pereyra"
            bgColor="#ddbb55"
            color="white"
          />
        </div>
      </div>

      <hr />

      <div className="components">
        <h1>Rating Component</h1>
        <div className="rating">
          <Rating>0</Rating>
          <Rating>1.49</Rating>
          <Rating>1.5</Rating>
          <Rating>3</Rating>
          <Rating>4</Rating>
          <Rating>5</Rating>
        </div>
      </div>

      <hr />

      <div className="components">
        <h1>DriverCard Component</h1>
        <div className="driver-card">
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
      </div>

      <hr />

      <div className="components">
        <h1>LikeButton Component</h1>
        <div className="like-button">
          <LikeButton />
          <LikeButton />
        </div>
      </div>

      <hr />

      <div className="components">
        <h1>ClickablePicture Component</h1>
        <div className="clickable-picture">
          <ClickablePicture
            img="maxence.png"
            imgClicked="maxence-glasses.png"
          />
        </div>
      </div>

      <hr />

      <div className="components">
        <h1>Dice Component</h1>
        <div className="dice">
          <Dice />
        </div>
      </div>

      <hr />

      <div className="components">
        <h1>Carousel Component</h1>
        <div className="carousel">
          <Carousel
            images={[
              'https://randomuser.me/api/portraits/women/1.jpg',
              'https://randomuser.me/api/portraits/men/1.jpg',
              'https://randomuser.me/api/portraits/women/2.jpg',
              'https://randomuser.me/api/portraits/men/2.jpg',
            ]}
          />
        </div>
      </div>

      <hr />

      <div className="components">
        <h1>NumberTable Component</h1>
        <div className="number-table">
          <NumbersTable limit={12} />
        </div>
      </div>

      <hr />
    </div>
  );
};

export default App;
