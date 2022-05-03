import './App.css';
import IdCard from './IdCard/IdCard';
import Greetings from './Greetings/Greetings';
import Random from './Random/Random';
import BoxColor from './BoxColor/BoxColor'
import CreditCard from './CreditCard/CreditCard';
import Rating from './Rating/Rating';
import DriverCard from './DriverCard/DriverCard'
import LikeButton from './LikeButton/LikeButton'
import ClickablePicture from './ClickablePicture/ClickablePicture'
import img from './images/maxence.png'
import img2 from './images/maxence-glasses.png'
import Dice from './Dice/Dice'
import dice1 from './images/dice1.png'
import dice2 from './images/dice2.png'
import dice3 from './images/dice3.png'
import dice4 from './images/dice4.png'
import dice5 from './images/dice5.png'
import dice6 from './images/dice6.png'


function App() {
  return (
    <div>

      <h1>IdCard</h1>
      <IdCard
        lastName='Doe'
        firstName='John'
        gender='male'
        height='178'
        birth={new Date("1992-07-14")}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />

      <IdCard
        lastName='Delores '
        firstName='Obrien'
        gender='female'
        height='172'
        birth={new Date("1988-05-11")}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />

      <hr></hr>

      <h1>Greetings</h1>

      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>

      <hr></hr>

      <h1>Random</h1>

      <Random min={1} max={6} />
      <Random min={1} max={100} />

      <hr></hr>

      <h1>BoxColor</h1>


      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />

      <hr></hr>


      <h1>CreditCard</h1>
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

      <hr></hr>

      <h1>Rating</h1>

      <Rating>0</Rating>
      <Rating>1.49</Rating>
      <Rating>1.5</Rating>
      <Rating>3</Rating>
      <Rating>4</Rating>
      <Rating>5</Rating>

      <hr></hr>

      <h1>DriverCard</h1>

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
      <hr></hr>
      <h1>LikeButton</h1>
      <hr></hr>


      <LikeButton />

      <hr></hr>
      <h1>ClickablePicture</h1>
      <hr></hr>

      <ClickablePicture
        img={img}
        imgClicked={img2}
      />


      <hr></hr>
      <h1>Dice</h1>
      <hr></hr>


      <Dice

        dice1={dice1}
        dice2={dice2}
        dice3={dice3}
        dice4={dice4}
        dice5={dice5}
        dice6={dice6}



      />

    </div>
  )
}

export default App;
