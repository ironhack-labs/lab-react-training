import { BoxColor } from './components/BoxColor';
import { CreditCard } from './components/CreditCard';
import { Greetings } from './components/Greetings';
import { IdCard } from './components/IdCard';
import { Random } from './components/Random';
import'../src/components/styles/CreditCard.css'
import Rating from './components/Rating';
import DriverCard from './components/DriverCard';


function App() {
  return (
    <div className="App">
      <IdCard 
      firstName = {"John"}
      lastName = {"Doe"}
      gender = {"Male"}
      height = {1.79}
      birth = {"1992-07-14"}
      picture = {"https://randomuser.me/api/portraits/men/44.jpg"}/>

      <IdCard
      firstName='Obrien'
      lastName='Delores'
      gender='Female'
      height={1.72}
      birth='1988-05-11'
      picture='https://randomuser.me/api/portraits/women/44.jpg'/>

      <Greetings/>
      
      <Random min={1} max={7}/>
      <Random min={3} max={100}/>
      <>
        <h1>BoxColor</h1> 
        <BoxColor r={210} g={112} b={21}/>
        <BoxColor r={132} g={111} b={75}/>
      </>

      <>
        <h1>Credit Card</h1>
        <section className='creditCardSection'>
          <CreditCard
            type="Visa"
            number="0123456789018845"
            expirationMonth={3}
            expirationYear={2021}
            bank="BNP"
            owner="Maxence Bouret"
            bgColor="#11aa99"
            color="white" />

          <CreditCard
          type="Master Card"
          number="0123456789010995"
          expirationMonth={3}
          expirationYear={2021}
          bank="N26"
          owner="Maxence Bouret"
          bgColor="#eeeeee"
          color="#222222" />

          <CreditCard
          type="Visa"
          number="0123456789016984"
          expirationMonth={12}
          expirationYear={2019}
          bank="Name of the Bank"
          owner="Firstname Lastname"
          bgColor="#ddbb55"
          color="white" />
        </section>
      </>

      <>
      <h1>Rating</h1>
      <Rating>0</Rating>
      <Rating>1.49</Rating>
      <Rating>1.5</Rating>
      <Rating>3</Rating>
      <Rating>4</Rating>
      <Rating>5</Rating>
      </>

      <>
      <h1>DriverCard</h1>
      <DriverCard
        name="Travis Kalanick"
        rating={4.2}
        img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
        car={{
          model: "Toyota Corolla Altis",
          licensePlate: "CO42DE"
        }} />
      <DriverCard
        name="Dara Khosrowshahi"
        rating={4.9}
        img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
        car={{
          model: "Audi A3",
          licensePlate: "BE33ER"
        }} />
      </>
    </div>
  );
}



export default App;
