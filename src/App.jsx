import "./App.css";
import IdCard from "./components/id-card";
import Greetings from "./components/greetings"
import Random from "./components/random"
import BoxColor from "./components/box-color";
import CreditCard from "./components/credit-card";
import Rating from "./components/rating";
import DriverCard from "./components/driver-card";
import LikeButton from "./components/like-button";
import ClickablePicture from "./components/clickablePicture";
import Dice from "./components/dice";
import Carousel from "./components/carousel";
import NumbersTable from "./components/numbers-table";

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
        img="../public/images/cat.png"
        imgClicked="../public/images/catWithGlasses.png"
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
    </div>
  );
}

export default App;
