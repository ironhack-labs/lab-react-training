import './App.css';
import IdCard from './IdCard/IdCard';
import BoxColor from './BoxColor/BoxColor'
import CreditCard from './CreditCard/CreditCard'
import DriverCard from './DriverCard/DriverCard'
import Greetings from './Greetings/Greetings'
import Random from './Random/Random';
import Rating from './Rating/Rating';
import LikeButton from './LikeButton/LikeButton';
import Dice from './Dice/Dice';
import Carousel from './Carousel/Carousel';
import ClickablePicture from './ClickablePicture/ClickablePicture';
import FaceBook from './FaceBook/FaceBook';
import NumbersTable from './NumbersTable/NumbersTable';
import RGBColorPicker from './RGBColorPicker/RGBColorPicker';
import SignUpPage from './SignUpPage/SignUpPage';

function App() {
  return (
    <div className="App">
      <div className='card__iteration 1'>

        <IdCard
          lastName='Doe'
          firstName='John'
          gender='male'
          height={178}
          birth={"1992-07-14"}
          picture="https://randomuser.me/api/portraits/men/44.jpg">
        </IdCard>

        <IdCard
          lastName='Delores '
          firstName='Obrien'
          gender='female'
          height={172}
          birth={"1988-05-11"}
          picture="https://randomuser.me/api/portraits/women/44.jpg"
        />

      </div>

      <div className='card__iteration'>
        <Greetings lang="de">Michael</Greetings>
        <Greetings lang="en">Willian</Greetings>
      </div>

      <div className='card__iteration'>
        <Random min={1} max={5} />
      </div>

      <div className='card__iteration'>
        <BoxColor r={255} g={100} b={0} />
      </div>

      <div className='card__iteration'>
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
          type="MasterCard"
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

      <div className='card__iteration'>
        <Rating>0</Rating>
        <Rating>1.49</Rating>
        <Rating>1.5</Rating>
        <Rating>3</Rating>
        <Rating>4</Rating>
        <Rating>5</Rating>
      </div>

      <div className='card__iteration'>
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
      </div>

      <div className='card__iteration'>
        <LikeButton />
        <LikeButton />
      </div>
      <div className='card__iteration'>
        <ClickablePicture />
      </div>
      <div className='card__iteration'>
        <Dice />
      </div>
      <div className='card__iteration'>
        <Carousel
          images={[
            'https://randomuser.me/api/portraits/women/1.jpg',
            'https://randomuser.me/api/portraits/men/1.jpg',
            'https://randomuser.me/api/portraits/women/2.jpg',
            'https://randomuser.me/api/portraits/men/2.jpg'
          ]}
        />
      </div>
      <div className='card__iteration'>
        <NumbersTable limit={14} />
      </div>
      <div className='card__iteration'>
        <FaceBook />
      </div>
      <div className='card__iteration'>
        <RGBColorPicker />
      </div>
      <div className='card__iteration'>
        <SignUpPage />
      </div>

    </div>
  );
}

export default App 