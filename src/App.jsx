import "./App.css";
import IdCard from "./components/IdCard";
import Greetings from "./components/Greetings";
import Random from "./components/Random";
import BoxColor from "./components/BoxColor";
import CreditCard from "./components/CreditCard";
import Rating from "./components/Rating";
import DriverCard from "./components/DriverCard";

function App() {
  return (
    <>
      <div className="App">
        <h1> LAB | React Training</h1>
        <h5>Iteration 1 | Component: IdCard</h5>
        <IdCard
          lastName="Doe"
          firstName="T."
          gender="male"
          height={178}
          birth={"1992-07-14"}
          picture="https://randomuser.me/api/portraits/men/44.jpg"
        />
        <hr />
        <IdCard
          lastName="Delores "
          firstName="Obrien"
          gender="female"
          height={172}
          birth={"1990-07-14"}
          picture="https://randomuser.me/api/portraits/women/44.jpg"
        />
        <hr />
      </div>
      <div>
        <h5>Iteration 2 | Component: Greetings</h5>
        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="fr">François</Greetings>
        <Greetings lang="vn">D. T.</Greetings>
      </div>
      <div>
        <h5>Iteration 3 | Component: Greetings</h5>
        <Random min={1} max={8} />
        <Random min={1} max={100} />
        <Random min={101} max={150} />
      </div>
      <div>
        <h5>Iteration 4 | Component: BoxColor</h5>
        <BoxColor hex={"#ff0000"} />
        <BoxColor hex={"#80ff00"} />
      </div>
      <div>
        <h5>Iteration 5 | Component: CreditCard</h5>
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

      <div>
        <h5>Iteration 6 | Component: Rating</h5>
        <Rating>0.5</Rating>
        <Rating>1</Rating>
        <Rating>2</Rating>
        <Rating>3</Rating>
        <Rating>4</Rating>
        <Rating>5</Rating>
      </div>
      <div>
        <h5>Iteration 7 | Component: DriverCard</h5>

        <DriverCard
          name="Travis Kalanick"
          rating={4}
          img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
          car={{
            model: "Toyota Corolla Altis",
            licensePlate: "CO42DE",
          }}
        />

        <DriverCard
          name="Dara Khosrowshahi"
          rating={3}
          img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
          car={{
            model: "Audi A3",
            licensePlate: "BE33ER",
          }}
        />
      </div>
      <div>
        <h5>Iteration 8 | Component: </h5>
      </div>
      <div>
        <h5>Iteration 9 | Component: </h5>
      </div>
      <div>
        <h5>Iteration 10 | Component: </h5>
      </div>
      <div>
        <h5>Iteration 11 | Component: </h5>
      </div>
    </>
  );
}

export default App;
