import './App.css';
import IdCard from './component/idCard'
import Greetings from './component/greetings';
import Random from './component/random'
import BoxColor from './component/boxColor'
import CreditCard from './component/creditCard';
import DriverCard from './component/driverCard';


function App() {
  return (
    <main>
      <IdCard
        lastName='Doe'
        firstName='John'
        gender='male'
        height={"1.78m"}
        birth={("1992-07-14")}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />

      <IdCard
        lastName='Obrien'
        firstName='Delores'
        gender='female'
        height={"1.72m"}
        birth={("1988-05-11")}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />




      <h1>Random</h1>
      <Random min={4} max={6} />
      <Random min={6} max={6} />
      <Random min={1} max={100} />


      <h1>Box Color</h1>
      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />





      <h1>Credit Card</h1>

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

      <h1>Greetings</h1>
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>
      <Greetings lang="pt">Marico</Greetings>


      <h1>Driver Card</h1>
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





    </main>

  )
}



export default App;
