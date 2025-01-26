import "./App.css";
import IdCard from "./components/IdCard/IdCard";
import Greetings from "./components/Greetings/Greetings";
import Random from "./components/Random/Random";
import BoxColor from "./components/BoxColor/BoxColor";
import CreditCard from "./components/CreditCard/CreditCard";
import Rating from "./components/Rating/Rating";
import DriverCard from "./components/DriverCard/DriverCard";
import LikeButton from "./components/LikeButton/LikeButton";
import ClickablePicture from "./components/ClickablePicture/ClickablePicture";
import Dice from "./components/Dice/Dice";
import Carousel from "./components/Carousel/Carousel";
import NumbersTable from "./components/NumbersTable/NumbersTable";
import FaceBookSimple from "./components/FaceBookSimpleandAdvanced/FaceBookSimple";
import SignUpPage from "./components/SignUpPage/SignUpPage";
import RGBColorPicker from "./components/RGBColorPicker/RGBColorPicker";

function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <IdCard
        lastName="Doe"
        firstName="John"
        gender="male"
        height={178}
        birth={new Date("1992-07-14")}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />

      <IdCard
        lastName="Delores "
        firstName="Obrien"
        gender="female"
        height={172}
        birth={new Date("1988-05-11")}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />

      <Greetings lang="es" />

      <Random min={1} max={6} />

      <BoxColor r={255} g={0} b={0} />
      <div className="cardDiv">
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

      <Rating number={3} />
      <DriverCard
        name="Dara Khosrowshahi"
        rating={4.9}
        img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
        car={{
          model: "Audi A3",
          licensePlate: "BE33ER",
        }}
      />
      <DriverCard
        name="Travis Kalanick"
        rating={4.2}
        img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
        car={{
          model: "Toyota Corolla Altis",
          licensePlate: "CO42DE",
        }}
      />
      <div>
        <LikeButton />
      </div>
      <ClickablePicture
        img="https://xsgames.co/randomusers/assets/avatars/male/63.jpg"
        imgClicked="./../assets/glasses.png"
      />
      <Dice />
      <Carousel
        images={[
          "https://randomuser.me/api/portraits/women/1.jpg",
          "https://randomuser.me/api/portraits/men/1.jpg",
          "https://randomuser.me/api/portraits/women/2.jpg",
          "https://randomuser.me/api/portraits/men/2.jpg",
        ]}
      />
      <NumbersTable limit={12} />
      <FaceBookSimple/>
      <SignUpPage/>
      <RGBColorPicker/>
    </div>
  );
}

export default App;
