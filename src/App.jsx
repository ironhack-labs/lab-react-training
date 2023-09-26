import "./App.css";
import IdCard from "./components/idCard/id-card";
import './utils'
import berlinData from './data/berlin.json';
import Greetings from "./components/greetings/greetings";
import Random from './components/random/random'
import BoxColor from "./components/boxColor/box-color";
import CreditCard from "./components/creditCard/credit-card";
import creditCardList from "./data/creditcard.json"
import Rating from "./components/rating/rating";
import DriverCard from "./components/driverCard/driver-card";
import LikeButton from "./components/buttons/like-button";
import ClickablePicture from "./components/clickablePicture/clickable-picture";
import Dice from "./components/dice/dice";


function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      {/* <IdCard personList={berlinData} />  */}

      {/* <Greetings lang="es" children="Carlos"> */}

      {/* <Random min={1} max={10}/> */}
     
      {/* <BoxColor r={255} g={0} b={0} /> */}
     
      {/* <CreditCard creditCardList={creditCardList}/> */}

      {/* <Rating>0</Rating>
      <Rating>1.49</Rating>
      <Rating>1.5</Rating>
      <Rating>3</Rating>
      <Rating>4</Rating>
      <Rating>5</Rating> */}

      {/* <DriverCard
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
      /> */}

      {/* <LikeButton/> */}

      {/* <ClickablePicture
        img="/src/assets/images/maxence.png"
        imgClicked="/src/assets/images/maxence-glasses.png"
      /> */}

      <Dice />
    </div>
  );
}

export default App;
