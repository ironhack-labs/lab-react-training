
import './App.css';
import IdCard from './components/IdCard/IdCard';
import Greetings from './components/Greetings/Greetings';
import Random from './components/Random/Random';
import BoxColor from './components/BoxColor/BoxColor'
import CreditCard from './components/CreditCard/CreditCard';
import Rating from './components/Rating/Rating';
import DriverCard from './components/DriverCard/DriverCard';
import LikeButton from './components/LikeButton/LikeButton';
import ClickablePicture from './components/ClickablePicture/ClickablePicture';
import Dice from './components/Dice/Dice';
import Carousel from './components/Carousel/Carousel';
import NumbersTable from './components/NumbersTable/NumbersTable';
import FaceBook from './components/FaceBook/FaceBook';

function App() {
  return (
    <div>
      <div>
        <IdCard
          picture={"https://randomuser.me/api/portraits/men/44.jpg"}
          firstName={'John'}
          lastName={'Doe'}
          gender={'male'}
          height={178}
          birth={new Date("1992-07-14")}
        />
      </div>
      <br></br>
      <div>
        <IdCard
          picture={"https://randomuser.me/api/portraits/women/44.jpg"}
          firstName={'Obrien'}
          lastName={'Delores'}
          gender={'female'}
          height={172}
          birth={new Date("1988-05-11")}
        />
      </div>

      <hr></hr>
      <div>
        <div>
          <Greetings lang={"de"}>Ludwing</Greetings>
        </div>
        <div>
          <Greetings lang={"fr"}>François</Greetings>
        </div>
      </div>


      <div>
        <Random min={1} max={6} />
        <Random min={1} max={100} />
      </div>

      <div>
        <BoxColor r={255} g={0} b={0} />
        <BoxColor r={128} g={255} b={0} />
      </div>


      <div className='paymentCard'>
        <div>
          <CreditCard
            type='Visa'
            number='0123456789018845'
            expirationMonth={3}
            expirationYear={2021}
            bank="BNP"
            owner="Maxence Bouret"
            bgColor="#11aa99"
            color="white"
          />
        </div>
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
        <div>
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
      </div>

      <div className='rating'>
        <Rating>0</Rating>
        <Rating>1.49</Rating>
        <Rating>1.5</Rating>
        <Rating>3</Rating>
        <Rating>4</Rating>
        <Rating>5</Rating>

      </div>

      <div>
        <DriverCard
          name="Travis Kalanick"
          rating={1}
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
      <h2>Iteration 8 | State: LikeButton</h2>
      <div className='buttonBox'>
        <LikeButton />
        <LikeButton />
      </div>
      <hr />
      <h2>Iteration 9: State: ClickablePicture</h2>

      <ClickablePicture
        img='maxence.png'
        imgClicked='maxence-glasses.png'
      />
      <hr />
      <h2>Iteration 10 | State: Dice</h2>
      <Dice />
      <hr />
      <h2>Iteration 11 | State: Carousel</h2>
      <Carousel
        images={[
          'https://randomuser.me/api/portraits/women/1.jpg',
          'https://randomuser.me/api/portraits/men/1.jpg',
          'https://randomuser.me/api/portraits/women/2.jpg',
          'https://randomuser.me/api/portraits/men/2.jpg'
        ]}
      />
      <hr />
      <h2>Iteration 12 | List and Keys | NumbersTable</h2>
      <NumbersTable limit={12} />
      <hr />
      <h2>Iteration 13 | List and Keys - FaceBook (Simple)</h2>
      <FaceBook />
    </div>

  );

}

export default App;
