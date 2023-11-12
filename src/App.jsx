import "./App.css";
import IdCard from "./components/IdCard";
import Greetings from "./components/Greetings"
import Random from "./components/Random";
import BoxColor from "./components/BoxColor";
import CreditCard from "./components/CreditCard";
import Rating from "./components/Rating";
import DriverCard from "./components/DriverCard";
import LikeButton from "./components/LikeButton";
import ClickablePicture from "./components/ClickablePicture";
import Dice from "./components/Dice";
import Carousel from "./components/Carousel";
import NumbersTable from "./components/NumbersTable";
import FaceBook from "./components/FaceBook";
import SignupPage from "./components/SignupPage";
import RGBColorPicker from "./components/RGBColorPicker";



function App() {
  return (
    <div className="App">
      <h1>LAB | React Training</h1>

      <h2>IdCard</h2>
      <IdCard
        firstName={'Doe'}
        lastName={'John'}
        gender={'male'}
        height={178}
        birth={new Date("1992-07-14")}
        picture={"https://randomuser.me/api/portraits/men/44.jpg"}
      />
      <IdCard
        lastName='Delores '
        firstName='Obrien'
        gender='female'
        height={172}
        birth={new Date("1988-05-11")}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />

      <h2>Greetings</h2>
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>

      <h2>Random</h2>
      <Random min={1} max={6} />
      <Random min={1} max={100} />

      <h2>BoxColor</h2>
      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />

      <h2>CreditCard</h2>
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

      <h2>Rating</h2>
      <Rating stars={0} />
      <Rating stars={1.49} />
      <Rating stars={1.5} />
      <Rating stars={3} />
      <Rating stars={4} />
      <Rating stars={5} />

      <h2>DriverCard</h2>
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

      <h2>LikeButton</h2>
      <LikeButton />
      <br />
      <LikeButton />

      <h2>ClickablePicture</h2>
      <ClickablePicture
        img="maxence.png"
        imgClicked="maxence-glasses.png"
      />

      <h2>Dice</h2>
      <Dice />

      <h2>Carousel</h2>
      <Carousel
        images={[
          "https://randomuser.me/api/portraits/women/1.jpg",
          "https://randomuser.me/api/portraits/men/1.jpg",
          "https://randomuser.me/api/portraits/women/2.jpg",
          "https://randomuser.me/api/portraits/men/2.jpg"
        ]}
      />

      <h2>List and Keys</h2>
      <NumbersTable limit={12} />

      <h2>Facebook</h2>
      <FaceBook />

      <h2>SignupPage</h2>
      <SignupPage />

      <h2>RGBColorPicker</h2>
      <RGBColorPicker />

    </div> // App
  );
}

export default App;
