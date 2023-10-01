import "./App.css";
import IdCard from "./components/idcard/idcard";
import LikeButton from "../src/components/likebutton/likebutton"
import Greetins from "../src/components/greetins/greetins";
import BoxColor from "./components/box-color/box-color";
import CreditCard from "./components/credit-card/credit-card";
import RandomValue from "./components/random/random";
import RatingStars from "./components/rating/rating";


function App() {
  return (
    <div className="App">
      <h1> LAB | React Training Carlos M</h1>
      <IdCard
        fName="John"
        lName="Doe"
        gender="male"
        height="1.78"
        birth={new Date("1992-07-14").toDateString()}
        image="https://randomuser.me/api/portraits/men/44.jpg"
      />
      <IdCard
        fName="Obrien"
        lName="Delores"
        gender="female"
        height="1.72"
        birth={new Date("1993-17-24").toDateString()}
        image="https://randomuser.me/api/portraits/women/44.jpg"
      />
      <div className="m-5">
        <Greetins lang="fr" children="Fransoise" />
        <Greetins lang="en" children="Britany" />
      </div>
      <hr></hr>
      <div className="m-5">
        <RandomValue min={1} max={6} />
        <RandomValue min={1} max={100}/>
      </div>
      <hr></hr>
      <div className="m-5">
        <LikeButton />
      </div>
      <hr></hr>
      <div className="m-5">
        <BoxColor r={255} g={0} b={0} />
        <BoxColor r={0} g={0} b={255} />
        <BoxColor r={0} g={255} b={0} />
        <hr />

        <div className="m-2 row">

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
        <hr></hr>
        <div className="stars m-5">
          <RatingStars>0</RatingStars>
          <RatingStars>1</RatingStars>
          <RatingStars>2</RatingStars>
          <RatingStars>3</RatingStars>
          <RatingStars>4</RatingStars>
          <RatingStars>5</RatingStars>
        </div>
      </div>
    </div>
  );

}


export default App;