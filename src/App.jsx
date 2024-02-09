import "./App.css";
import BoxColor from "./components/BoxColor";
import CreditCard from "./components/CreditCard";
import DriverCard from "./components/DriverCard";
import Greetings from "./components/Greetings";
import IdCard from "./components/IdCard";
import Random from "./components/Random";
import Rating from "./components/Rating";

function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <h2>Item 1</h2>
      <IdCard />
      <div className="App">
        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="es">François</Greetings>

        <Random min={1} max={6} />
        <Random min={1} max={100} />

        <div>
          <BoxColor r={255} g={0} b={0} />
          <BoxColor r={128} g={255} b={0} />
          <BoxColor r={0} g={0} b={255} />
        </div>

        <div className="credit-card">

          <CreditCard type="Visa"
            number="•••• •••• ••••8845"
            expirationMonth={3}
            expirationYear={2021}
            bank="BNP"
            owner="Maxence Bouret"
            bgColor="#11aa99"
            color="white"
          />

        </div>
        <div className="credit-card">

          <CreditCard
            type="Master Card"
            number="•••• •••• ••••0995"
            expirationMonth={3}
            expirationYear={2021}
            bank="N26"
            owner="Maxence Bouret"
            bgColor="#eeeeee"
            color="#222222"
          />
        </div>

        <div className="credit-card">
          <CreditCard
            type="Visa"
            number="•••• •••• ••••16984"
            expirationMonth={12}
            expirationYear={2019}
            bank="Name of the Bank"
            owner="Firstname Lastname"
            bgColor="#ddbb55"
            color="white"
          />
          </div>

          <div>
            <Rating>0</Rating>
            <Rating>1.49</Rating>
            <Rating>1.5</Rating>
            <Rating>3</Rating>
            <Rating>4</Rating>
            <Rating>5</Rating>
          </div>

          <div className="driver-card">

          <DriverCard
            name="Travis Kalanick"
            rating={4.2}
            img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
            car={{
              model: "Toyota Corolla Altis",
              licensePlate: "CO42DE"
            }}
          />
          </div>
          <div className="driver-card">
            
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
      </div>
    </div>
  );
}

export default App;
