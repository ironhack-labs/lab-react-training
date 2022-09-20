import logo from './logo.svg';
import './App.css';
import IdCard from './components/IdCards/IdCards.jsx'
import Greetings from './components/Greetings/Greetings.jsx'
import Random from './components/Random/Random.jsx'
import BoxColor from './components/BoxColor/BoxColor.jsx'
import CreditCard from './components/CreditCard/CreditCard.jsx'
import Rating from './components/Rating/Rating.jsx'
import DriverCard from './components/DrivingCard/DriverCard';



function App() {
  return (

    // ITERATION 1

    <div className="App">

      <h3>ID CARDS</h3>

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

      {/* ITERATION 2 */}

      <h3>GREETINGS</h3>

      <Greetings lang="es">viva la tortilla</Greetings>
      <Greetings lang="fr">François</Greetings>


      {/* ITERATION 3 */}

      <h3>RANDOM</h3>

      <Random min={1} max={6} />
      <Random min={1} max={100} />


      {/* ITERATION 4 */}

      <h3>BOX COLOR</h3>

      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />

      {/* ITERATION 5 */}


      <h3>CREDIT CARD</h3>

      <div className='allCards'>
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
          bank="MedioLanum"
          owner="Daniel Gonzalez"
          bgColor="#ddbb55"
          color="white"
        />
      </div>

      {/* ITERATION 6 */}

      <h3>RATING</h3>

      <Rating>0</Rating>
      <Rating>1.49</Rating>
      <Rating>1.5</Rating>
      <Rating>3</Rating>
      <Rating>4</Rating>
      <Rating>5</Rating>

      {/* ITERATION 7 */}

      <h3>DRIVING CAR</h3>

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




    </div >
  );
}

export default App;
