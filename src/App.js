import logo from './logo.svg';
import './App.css';
import IdCard from './components/IdCard/IdCard';
import Greetings from './components/Greetings/Greetings'
import Random from './components/Random/Random'
import BoxColor from './components/BoxColor/BoxColor'
import CreditCard from './components/CreditCard/CreditCard'
import Rating from './components/Rating/Rating'
import DriverCard from './components/DriverCard/DriverCard'
import LikeButton from './components/LikeButton/LikeButton'
import ClickablePicture from './components/ClickablePicture/ClickablePicture'
import Maxence from './assets/images/maxence.png'
import MaxenceGlasses from './assets/images/maxence-glasses.png'
import DiceEmpty from './assets/images/dice-empty.png'
import DiceOne from './assets/images/dice1.png'
import DiceTwo from './assets/images/dice2.png'
import DiceThree from './assets/images/dice3.png'
import DiceFour from './assets/images/dice4.png'
import DiceFive from './assets/images/dice5.png'
import DiceSix from './assets/images/dice6.png'
import Dice from './components/Dice/Dice'
import Carousel from './components/Carousel/Carousel'


function App() {
  return (
    <>
      {/* Iteration 1 */}

      <IdCard lastName={'Doe'} firstName={'John'} gender={'male'} height={178} birth={new Date("1992-07-14")} picture={"https://randomuser.me/api/portraits/men/44.jpg"} />

      < IdCard lastName={'Delores'} firstName={'Obrien'} gender={'female'} height={172} birth={new Date("1988-05-11")} picture={"https://randomuser.me/api/portraits/women/44.jpg"} />

      {/* Iteration 2 */}

      <Greetings lang={"de"} children={"Ludwig"} />
      <Greetings lang={"fr"} children={"François"} />

      {/* Iteration 3 */}

      <Random min={1} max={6} />
      <Random min={1} max={100} />

      {/* Iteration 4 */}


      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />

      {/* Iteration 5 */}

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

      {/* Iteration 6 */}

      <div className="flexBox">

        <h1>Rating</h1>

        <div>
          <Rating>0</Rating>
        </div>
        <div>
          <Rating>1.49</Rating>
        </div>
        <div>
          <Rating>1.5</Rating>
        </div>
        <div>
          <Rating>3</Rating>
        </div>
        <div>
          <Rating>4</Rating>
        </div>
        <div>
          <Rating>5</Rating>
        </div>

      </div>

      {/* Iteration 7 */}

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

      {/* Iteration 8 */}

      <LikeButton />

      {/* Iteration 9 */}
      <br />

      <ClickablePicture
        img={Maxence}
        imgClicked={MaxenceGlasses}
      />

      {/* Iteration 10 */}
      <br />
      <br />
      <Dice
        EmptyDice={DiceEmpty} dice1={DiceOne} dice2={DiceTwo} dice3={DiceThree} dice4={DiceFour} dice5={DiceFive} dice6={DiceSix}
      />

      {/* Iteration 11 */}
      <br />
      <br />

      <Carousel
        images={[
          'https://randomuser.me/api/portraits/women/1.jpg',
          'https://randomuser.me/api/portraits/men/1.jpg',
          'https://randomuser.me/api/portraits/women/2.jpg',
          'https://randomuser.me/api/portraits/men/2.jpg'
        ]}
      />


    </>
  )
}

export default App;



{/* <IdCard
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
/> */}