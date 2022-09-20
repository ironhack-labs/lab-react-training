import './App.css';
import Cards from "./components/Card.jsx";
import Greetings from "./components/Greetings";
import Random from "./components/Random/Random.jsx";
import Boxcolor from "./components/Boxcolor/Boxcolor.jsx";
import CreditCard from "./components/CreditCard/CreditCard.jsx";
import Rating from "./components/Rating/Rating.jsx";
import DriverCard from "./components/DriverCard/DriverCard.jsx";
import LikeButton from "./components/LikeButton/LikeButton.jsx";
import ClickablePicture from "./components/ClickablePicture/ClickablePicture.jsx";
import Dice from "./components/Dice/Dice.jsx";
import Carousel from "./components/Carousel/Carousel.jsx";
import NumbersTable from "./components/NumbersTable/NumbersTable.jsx";

import max from "./assets/images/maxence.png"
import maxBadass from "./assets/images/maxence-glasses.png"

import diceEmpty from "./assets/images/dice-empty.png"
import dice1 from "./assets/images/dice1.png"
import dice2 from "./assets/images/dice2.png"
import dice3 from "./assets/images/dice3.png"
import dice4 from "./assets/images/dice4.png"
import dice5 from "./assets/images/dice5.png"
import dice6 from "./assets/images/dice6.png"


function App() {
  return (
    <>
      <h1 className="iterationTitle">Iteration 1</h1>
      <div className='IdCard'>
        <Cards picture={"https://randomuser.me/api/portraits/men/44.jpg"} lastName={'Doe'} firstName={'John'} gender={'male'} height={178} birth={new Date("1992-07-14")} />
      </div>
      <div className='IdCard'>
        <Cards picture={"https://randomuser.me/api/portraits/women/44.jpg"} lastName={'Delores'} firstName={'Obrien'} gender={'female'} height={172} birth={new Date("1988-05-11")} />
      </div>


      <h1 className="iterationTitle">Iteration 2</h1>
      <div className='greetings'>
        <Greetings lang={"de"} children={"ironhacker"} />
      </div>
      <div className='greetings'>
        <Greetings lang={"fr"} children={"ironhacker en alemán"} />
      </div>

      <h1 className="iterationTitle">Iteration 3</h1>
      <div className='minMax'>
        <Random min={0} max={10} />
      </div>


      <h1 className="iterationTitle">Iteration 4</h1>
      <div>
        <Boxcolor r={0} g={0} b={255} />
      </div>

      <h1 className="iterationTitle">Iteration 5</h1>
      <div>
        <CreditCard
          type={"Visa"}
          number={"0123456789018845"}
          expirationMonth={3}
          expirationYear={2021}
          bank={"BNP"}
          owner={"Maxence Bouret"}
          bgColor="#11aa99"
          color={"white"}
        />

        <CreditCard
          type={"Master Card"}
          number={"0123456789010995"}
          expirationMonth={3}
          expirationYear={2021}
          bank={"N26"}
          owner={"Maxence Bouret"}
          bgColor={"#eeeeee"}
          color={"#222222"}
        />

        <CreditCard
          type={"Visa"}
          number={"0123456789016984"}
          expirationMonth={12}
          expirationYear={2019}
          bank={"Name of the Bank"}
          owner={"Firstname Lastname"}
          bgColor={"#ddbb55"}
          color={"white"}
        />
      </div>


      <h1 className="iterationTitle">Iteration 6</h1>
      <div>


        <div className="rating"><Rating>1.49</Rating></div>
        <div className="rating"><Rating>1.5</Rating></div>
        <div className="rating"><Rating>3</Rating></div>
        <div className="rating"><Rating>4</Rating></div>
        <div className="rating"><Rating>5</Rating></div>
        <div className="rating"><Rating>0</Rating></div>
      </div>

      <h1 className="iterationTitle">Iteration 7</h1>
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

      <h1 className="iterationTitle">Iteration 8</h1>

      <div><LikeButton /></div>

      <h1 className="iterationTitle">Iteration 9</h1>

      <ClickablePicture
        img={max}
        imgClicked={maxBadass}
      />
      <h1 className="iterationTitle">Iteration 10</h1>
      <Dice diceEmpty={diceEmpty} dice1={dice1} dice2={dice2} dice3={dice3} dice4={dice4} dice5={dice5} dice6={dice6} />


      <h1 className="iterationTitle">Iteration 11</h1>

      <Carousel
        images={[
          'https://randomuser.me/api/portraits/women/1.jpg',
          'https://randomuser.me/api/portraits/men/1.jpg',
          'https://randomuser.me/api/portraits/women/2.jpg',
          'https://randomuser.me/api/portraits/men/2.jpg'
        ]}
      />
      <h1 className="iterationTitle">Iteration 12</h1>

      <NumbersTable limit={12} />




    </>

  );
}

export default App;

