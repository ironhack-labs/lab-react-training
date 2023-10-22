import "./App.css";
import IdCard from "./assets/componentes/IdCard";
import Greetings from "./assets/componentes/Greetings";
import RandomComponent from "./assets/componentes/RandomComponent";
import BoxColorComponent from "./assets/componentes/BoxColor";
import CreditCard from "./assets/componentes/creditCard";
import Rating from "./assets/componentes/rating";
import DriverCard from "./assets/componentes/driverCard";
import LikeButton from "./assets/componentes/likebutton";
import ClickablePicture from "./assets/componentes/clickablePicture";
import Dice from "./assets/componentes/dice";
import Carousel from "./assets/componentes/carousel";
import NumbersTable from "./assets/componentes/NumbersTable";
import FaceBook from "./assets/componentes/Facebook";

function App() {
  return <>
    <div>Iteración 1</div>
    <div className="App">
      <div>
        <IdCard
          lastName='Doe'
          firstName='John'
          gender='male'
          height={178}
          birth={new Date("1992-07-14")}
          picture="https://randomuser.me/api/portraits/men/44.jpg"
        />
        <IdCard
          lastName='Delores'
          firstName='Obrien'
          gender='female'
          height={172}
          birth={new Date("1988-05-11")}
          picture="https://randomuser.me/api/portraits/women/44.jpg"
        />
      </div>
      <hr />
      <div>Iteración 2</div>
      <Greetings lang="es">Carlos</Greetings>
      <Greetings lang="de">Ludwig</Greetings>
      <hr />
      <div>Iteración 3</div>
      <div>
        <RandomComponent min={1} max={10} />
        <RandomComponent min={20} max={50} />
        <RandomComponent min={-5} max={5} />
      </div>
      <hr />
      <div>Iteración 4</div>
      <div>
        <BoxColorComponent r={255} g={0} b={0} />
        <BoxColorComponent r={0} g={128} b={0} />
        <BoxColorComponent r={0} g={0} b={255} />
      </div>
      <hr />
      <div>Iteración 5</div>
      <div>
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
      <hr />
      <div>Iteración 6</div>
      <div>
        <Rating>0</Rating>
        <Rating>1.49</Rating>
        <Rating>1.5</Rating>
        <Rating>3</Rating>
        <Rating>4</Rating>
        <Rating>5</Rating>
      </div>
      <hr />
      <div>Iteración 7</div>
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
      <hr />
      <div>Iteración 8</div>
      <div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <LikeButton />
          <LikeButton />
        </div>
      </div>
      <hr />
      <div>Iteración 9</div>
      <ClickablePicture
        img="../src/assets/images/Funny-Emoji.png"
        imgClicked="../src/assets/images/glasses.png"
      />
    </div>
    <hr />
    <div>Iteración 10</div>
    <Dice />
    <hr />
    <div>Iteración 11</div>
    <Carousel
      images={[
        'https://randomuser.me/api/portraits/women/1.jpg',
        'https://randomuser.me/api/portraits/men/1.jpg',
        'https://randomuser.me/api/portraits/women/2.jpg',
        'https://randomuser.me/api/portraits/men/2.jpg'
      ]}
    />
    <hr />
    <div>Iteración 12</div>

    <NumbersTable limit={12} />
    <hr />
    <div>Iteración 13</div>
    <FaceBook />
  </>;
}
export default App;
