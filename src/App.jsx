import "./App.css";
import IdCard from "./components/iterations 1-8/id-card/IdCard";
import Greetings from "./components/iterations 1-8/greetings/Greetings"
import Random from "./components/iterations 1-8/random/Random"
import BoxColor from "./components/iterations 1-8/box-color/BoxColor";
import CreditCard from "./components/iterations 1-8/credit-card/CreditCard";
import Rating from "./components/iterations 1-8/rating/Rating";
import DriverCard from "./components/iterations 1-8/driver-card/DriverCard";
import LikeButton from "./components/iterations 1-8/like-button/LikeButton";
import ClickablePicture from "./components/iterations 9-16/clickable-picture/ClickablePicture";
import Dice from "./components/iterations 9-16/dice/Dice";
import Carousel from "./components/iterations 9-16/carousel/Carousel";
import NumbersTable from "./components/iterations 9-16/numbers-table/NumbersTable";
import FaceBook from "./components/iterations 9-16/face-book/FaceBook";
import SignupPage from "./components/iterations 9-16/signup-page/SignupPage";
import RGBColorPicker from "./components/iterations 9-16/rgb-color-picker/RGBColorPicker";

function App() {
  return (
    <div className="App">

      <h6 className="text-start ms-4 mt-4 mb-2">Iteration 1</h6>
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

      <h6 className="text-start ms-4 mt-4 mb-1">Iteration 2</h6>
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>

      <h6 className="text-start ms-4 mt-4 mb-1">Iteration 3</h6>
      <Random min={1} max={6} />
      <Random min={1} max={100} />

      <h6 className="text-start ms-4 mt-4 mb-1">Iteration 4</h6>
      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />

      <h6 className="text-start ms-4 mt-4 mb-1">Iteration 5</h6>
      <div className="container-fluid">
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
      
      <h6 className="text-start ms-4 mt-4 mb-1">Iteration 6</h6>
      <Rating>0</Rating>
      <Rating>1.49</Rating>
      <Rating>1.5</Rating>
      <Rating>3</Rating>
      <Rating>4</Rating>
      <Rating>5</Rating>

      <h6 className="text-start ms-4 mt-4 mb-1">Iteration 7</h6>
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

      <h6 className="text-start ms-4 mt-4 mb-1">Iteration 8</h6>
      <LikeButton />
      <LikeButton />

      <h6 className="text-start ms-4 mt-4 mb-1">Iteration 9</h6>
      <ClickablePicture
        img="../images/cat.png"
        imgClicked="../images/catWithGlasses.png"
      />

      <h6 className="text-start ms-4 mt-4 mb-1">Iteration 10</h6>
        <Dice />

      <h6 className="text-start ms-4 mt-4 mb-1">Iteration 11</h6>
      <Carousel
        images={[
          "https://randomuser.me/api/portraits/women/1.jpg",
          "https://randomuser.me/api/portraits/men/1.jpg",
          "https://randomuser.me/api/portraits/women/2.jpg",
          "https://randomuser.me/api/portraits/men/2.jpg"
        ]}
      />

      <h6 className="text-start ms-4 mt-4 mb-1">Iteration 12</h6>
      <NumbersTable limit={12} />

      <h6 className="text-start ms-4 mt-4 mb-1">Iteration 13 - 14</h6>
      <FaceBook />

      <h6 className="text-start ms-4 mt-4 mb-1">Iteration 15</h6>
      <SignupPage />

      <h6 className="text-start ms-4 mt-4 mb-1">Iteration 16</h6>
      <RGBColorPicker />
    </div>
  );
}

export default App;
