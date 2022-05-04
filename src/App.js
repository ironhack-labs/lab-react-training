
import './App.css';
import BoxColor from './BoxColor/BoxColor';
import CreditCard from './CreditCard/CreditCard';
import DriverCard from './DriverCard/DriverCard';
import Greeting from './Greeting/Greeting';
import IdCard from './IdCard/IdCard';
import Random from './Random/Random';
import Rating from './Rating/Rating';
import LikeButton from './LikeButton/LikeButton';
import ClickablePicture from './ClickablePicture/ClickablePicture';
import Dice from './Dice/Dice';
import Carousel from './Carousel/Carousel';
import NumbersTable from './NumbersTable/NumbersTable';
import FaceBook from './FaceBook/FaceBook';



function App() {
  return (
    <div>
      <IdCard
        picture="https://randomuser.me/api/portraits/men/44.jpg"
        lastName="Doe"
        firstName="John"
        gender="male"
        height={178}
        birth={new Date("1992-07-14")}
      />
      <IdCard
        picture="https://randomuser.me/api/portraits/women/44.jpg"
        lastName="Obrien"
        firstName="Delores"
        gender="female"
        height={172}
        birth={new Date("1988-05-11")}
      />

      <hr />
      <Greeting lang="de">Ludwig</Greeting>
      <Greeting lang="fr">François</Greeting>

      <hr />
      <Random min="1" max="6" />
      <Random min="1" max="100" />
      <hr />

      <BoxColor r="255" g="0" b="0" />
      <BoxColor r="128" g="255" b="0" />

      <hr />
      <div className='containerCards'>

        <CreditCard
          type="Visa"
          number="0123456789018845"
          expirationMonth="3"
          expirationYear="2021"
          bank="BNP"
          owner="Maxence Bouret"
          bgColor="#11aa99"
          color="White"

        />

        <CreditCard
          type="Master Card"
          number="0123456789010995"
          expirationMonth="3"
          expirationYear="2021"
          bank="N26"
          owner="Maxence Bouret"
          bgColor="#eeeeee"
          color="#222222"

        />
        <CreditCard
          type="Visa"
          number="0123456789016984"
          expirationMonth="12"
          expirationYear="2019"
          bank="Name of the Bank"
          owner="Firstname Lastname"
          bgColor="#ddbb55"
          color="White"

        />
      </div>
      <hr />

      <Rating>0</Rating>
      <Rating>1.49</Rating>
      <Rating>1.5</Rating>
      <Rating>3</Rating>
      <Rating>4</Rating>
      <Rating>5</Rating>
      <hr />


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

      <hr />
      <LikeButton />

      <hr />

      <ClickablePicture
        img='../images/maxence.png'
        imgClicked='../images/maxence-glasses.png'
      />

      <hr />

      <Dice />
      <hr />

      <Carousel
        images={[
          'https://randomuser.me/api/portraits/women/1.jpg',
          'https://randomuser.me/api/portraits/men/1.jpg',
          'https://randomuser.me/api/portraits/women/2.jpg',
          'https://randomuser.me/api/portraits/men/2.jpg'
        ]}
      />
      <hr />
      <NumbersTable limit={12} />

      <hr />

      <FaceBook />

    </div>



  );
}

export default App;

