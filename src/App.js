import './App.css';
import IdCard from './components/IdCard'
import Greetings from './components/Greetings'
import Random from './components/Random'
import BoxColor from './components/BoxColor'
import CreditCard from './components/CreditCard'
import Rating from './components/Rating'
import DriverCard from './components/DriverCard'
import LikeButton from './components/LikeButton/LikeButton'
import ClickablePicture from './components/ClickablePicture/ClickablePicture'
import Dice from './components/Dice/Dice'
import Carousel from './components/Carousel/Carousel'
import NumbersTable from './components/NumbersTable/NumbersTable'
import FaceBook from './components/FaceBook/FaceBook'

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
        <div class="space"></div>
        <>
          <Greetings lang='de'>Franz </Greetings>
          <Greetings lang='en'>Heather </Greetings>
          <Greetings lang='es'>Delores </Greetings>
          <Greetings lang='fr'>Chantal </Greetings>
        </>

        <div class="space"></div>

        <>
          <Random min={1} max={6} />
          <Random min={1} max={100} />
        </>

        <div class="space"></div>

        <>
          <BoxColor r={255} g={0} b={0}
            highlighted={true} />
          <BoxColor r={128} g={255} b={0} />
        </>

        <div class="space"></div>

        <div className="card-container">
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

        <div class="space"></div>

        <>
          <Rating>0</Rating>
          <Rating>1.49</Rating>
          <Rating>1.5</Rating>
          <Rating>3</Rating>
          <Rating>4</Rating>
          <Rating>5</Rating>
        </>

        <div class="space"></div>

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

        <div class="space"></div>

        <LikeButton />

        <div class="space"></div>

        <ClickablePicture
          img='maxence.png'
          imgClicked='maxence-glasses.png'
        />

        <div class="space"></div>

        <Dice />

        <div class="space"></div>

        <Carousel
          images={[
            'https://randomuser.me/api/portraits/women/1.jpg',
            'https://randomuser.me/api/portraits/men/1.jpg',
            'https://randomuser.me/api/portraits/women/2.jpg',
            'https://randomuser.me/api/portraits/men/2.jpg'
          ]}
        />

        <div class="space"></div>

        <NumbersTable limit={12} />

        <div class="space"></div>

        <FaceBook />

        <div class="space"></div>


      </header>
    </div>
  );
}

export default App;
