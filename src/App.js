import IdCard from "./components/IdCardIteration/IdCard";
import Greeting from "./components/GreetingsIteration/Greetings";
import Random from "./components/RandomIteration/Random";
import BoxColor from "./components/BoxColorIteration/BoxColor";
import CreditCard from "./components/CreditCardIteration/CreditCard";
import Rating from "./components/RatingIteration/Rating";
import LikeButton from "./components/LikeButtonIteration/LikeButton";
import ClickablePicture from "./components/ClickablePictureIteration/ClickablePicture";
import Dice from "./components/DiceIteration/Dice";
import Carousel from "./components/CarouselIteration/Carousel";

function App() {
  return (
    <div className="App">
      <IdCard idInfo={{
        lastName: 'Doe',
        firstName: 'John',
        gender: 'male',
        height: 178,
        birth: "1992-07-14",
        picture: "https://randomuser.me/api/portraits/men/44.jpg"
      }} />

      <IdCard idInfo={{
        lastName: 'Delores ',
        firstName: 'Obrien',
        gender: 'female',
        height: 172,
        birth: "1988-05-11",
        picture: "https://randomuser.me/api/portraits/women/44.jpg"
      }} />

      <Greeting lang="de">Ludwig</Greeting>
      <Greeting lang="fr">François</Greeting>

      <Random min={1} max={6} />
      <Random min={1} max={100} />

      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />

      <CreditCard ccInfo={{
        type: "Visa",
        number: "0123456789018845",
        expirationMonth: 3,
        expirationYear: 2021,
        bank: "BNP",
        owner: "Maxence Bouret",
        bgColor: "#11aa99",
        color: "white"
      }} />
      <CreditCard ccInfo={{
        type: "Master Card",
        number: "0123456789010995",
        expirationMonth: 3,
        expirationYear: 2021,
        bank: "N26",
        owner: "Maxence Bouret",
        bgColor: "#eeeeee",
        color: "#222222",
      }} />
      <CreditCard ccInfo={{
        type: "Visa",
        number: "0123456789016984",
        expirationMonth: 12,
        expirationYear: 2019,
        bank: "Name of the Bank",
        owner: "Firstname Lastname",
        bgColor: "#ddbb55",
        color: "white",
      }} />

      <Rating>0</Rating>
      <Rating>1.49</Rating>
      <Rating>1.5</Rating>
      <Rating>3</Rating>
      <Rating>4</Rating>
      <Rating>5</Rating>

      <LikeButton />
      <LikeButton />

      <ClickablePicture />

      <Dice />

      <Carousel
        images={[
          'https://randomuser.me/api/portraits/women/1.jpg',
          'https://randomuser.me/api/portraits/men/1.jpg',
          'https://randomuser.me/api/portraits/women/2.jpg',
          'https://randomuser.me/api/portraits/men/2.jpg'
        ]}
      />



    </div>


  );
}

export default App;
