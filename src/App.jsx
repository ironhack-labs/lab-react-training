import { useState } from "react";
import "./App.css";
import IdCard from "./components/idcard/IdCard";
import Greetings from './components/greetings/Greetings';
import Random from './components/random/Random';
import BoxColor from "./components/box-color/BoxColor";
import CreditCard from './components/creditcard/CreditCard'
import Rating from './components/rating/Rating'
import DriverCard from "./components/driver-card/DriverCard";
import LikeButton from "./components/like-button/LikeButton";
import ClickablePicture from "./components/clicable-picture/ClickablePicture";
import Dice from "./components/dice/Dice";
import Carousel from "./components/carousel/Carousel";
import NumbersTable from "./components/numbers-table/NumbersTable";
import FaceBook from "./components/facebook/FaceBook";
import SignupPage from "./components/signuppage/SignupPage";
import RGBColorPicker from "./components/rgb-color-picker/RGBColorPicker";

// import userData from "./data/berlin.json"

function App() {
  const selectableLanguages = [
    "fr", "tr", "de", "es", "en", "rs"
  ];

  const [selectedLanguage, setSelectedLanguage] = useState("tr");

  const handleLanguage = (event) => {
    console.log(event);
    setSelectedLanguage(event.target.value);
  }

  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <h2>item1</h2>
      <IdCard lastName="Sarıteke" firstName="Zeynep" gender="female" height={175} birth="1992-07-14" picture="https://randomuser.me/api/portraits/men/44.jpg" />
      <h2>item3</h2>
      <Random min={1} max={7} />
      <h2>item2</h2>
      <select onChange={(event) => handleLanguage(event)}>
        {selectableLanguages.map((language, index) => {
          return <option key={index} value={language} selected={language === selectedLanguage}>{language}</option>
        })}
      </select>
      <Greetings lang={selectedLanguage} />
      <h2>item4</h2>
      <BoxColor r={128} g={255} b={0} />

      <h2>item5</h2>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
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

      <h2>item6</h2>

      <div>
        <Rating>0</Rating>
        <Rating>1.49</Rating>
        <Rating>1.5</Rating>
        <Rating>3</Rating>
        <Rating>4</Rating>
        <Rating>5</Rating>
      </div>
      <h2>item7</h2>
      <div>
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

      <h2>item8</h2>
      <div>
        <LikeButton />
      </div>

      <h2>item9</h2>
      <ClickablePicture
        img="maxence.png"
        imgClicked="maxence-glasses.png"
      />
      <h2>item10</h2>
      <Dice />
      <h2>item11</h2>
      <Carousel
        images={[
          "https://randomuser.me/api/portraits/women/1.jpg",
          "https://randomuser.me/api/portraits/men/1.jpg",
          "https://randomuser.me/api/portraits/women/2.jpg",
          "https://randomuser.me/api/portraits/men/2.jpg"
        ]}
      />
      <h2>item12</h2>
      <NumbersTable limit={12} />
      <h2>item13-14</h2>
      <FaceBook />
      <h2>item15</h2>
      <SignupPage />
      <h2>item16</h2>
      <RGBColorPicker />
    </div>

  );
}

export default App;
