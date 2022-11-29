import './App.css';
import BoxColor from './components/BoxColor/BoxColor';
import Carousel from './components/Carousel/Carousel';
import ClickablePicture from './components/ClickablePicture/ClickablePicture';
import CreditCard from './components/CreditCard/CreditCard';
import Dice from './components/Dice/Dice';
import DriverCard from './components/DriverCard/DriverCard';
import FaceBook from './components/FaceBook/FaceBook';
import Greetings from './components/Greetings/Greetings';
import IdCard from './components/IdCard/IdCard';
import LikeButton from './components/LikeButton/LikeButton';
import NumbersTable from './components/NumbersTable/NumbersTable';
import Random from './components/Random/Random';
import Rating from './components/Rating/Rating';




function App() {
  return (
    <>
      <h1>IdCard</h1>
      <div className="App">
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
      </div>

      <h1>Greetings</h1>

      <div>
        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="fr">François</Greetings>
      </div>

      <h1>Random</h1>

      <div>
        <Random min={1} max={6} />
        <Random min={1} max={100} />
      </div>

      <h1>Box Color</h1>

      <div>
        <BoxColor r={255} g={0} b={0} />
        <BoxColor r={128} g={255} b={0} />
      </div>

      <h1>CreditCard</h1>

      <div className='CreditDiv'>
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

      <h1>Rating</h1>

      <div className='RatingDiv'>
        <Rating>0</Rating>
        <Rating>1.49</Rating>
        <Rating>1.5</Rating>
        <Rating>3</Rating>
        <Rating>4</Rating>
        <Rating>5</Rating>
      </div>

      <h1>DriverCard</h1>

      <div className='DrivedCardDiv'>
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

      <h1>LikeButton</h1>

      <div className='LikeButtonDiv'>
        <LikeButton />
        <LikeButton />
      </div>

      <h1>ClickablePicture</h1>

      <div className="ClickablePictureDiv">
        <ClickablePicture
          img='maxence.png'
          imgClicked='maxence-glasses.png'

        />
      </div>

      <h1>Dice</h1>

      <div className="DiceDiv">
        <Dice />
      </div>

      <h1>Carousel</h1>

      <div className='Carousel'>
        <Carousel
          images={[
            'https://randomuser.me/api/portraits/women/1.jpg',
            'https://randomuser.me/api/portraits/men/1.jpg',
            'https://randomuser.me/api/portraits/women/2.jpg',
            'https://randomuser.me/api/portraits/men/2.jpg'
          ]}
        />
      </div>

      <h1>NumbersTable</h1>

      <div className="NumbersTableDiv">
        <NumbersTable limit={12} />
      </div>

      <h1>FaceBook</h1>

      <div className="FaceBookDiv">
        <FaceBook />
      </div>



    </>

  );
}

export default App;
