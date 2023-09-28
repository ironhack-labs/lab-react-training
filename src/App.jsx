import "./App.css";
import IdCard from "./assets/componentes/IdCard";
import Greetings from "./assets/componentes/Greetings";
import RandomComponent from "./assets/componentes/RandomComponent";
import BoxColorComponent from "./assets/componentes/BoxColor";
import CreditCard from "./assets/componentes/creditCard";
import RatingStars from "./assets/componentes/rating";

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

      <div>Iteración 2</div>
      <Greetings lang="es">Carlos</Greetings>
      <Greetings lang="de">Ludwig</Greetings>

      <div>Iteración 3</div>
      <div>
        <RandomComponent min={1} max={10} />
        <RandomComponent min={20} max={50} />
        <RandomComponent min={-5} max={5} />
      </div>

      <div>Iteración 4</div>
      <div>
        <BoxColorComponent r={255} g={0} b={0} />
        <BoxColorComponent r={0} g={128} b={0} />
        <BoxColorComponent r={0} g={0} b={255} />
      </div>
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
      <div>Iteración 6</div>
      <div>
        <RatingStars>0</RatingStars>
        <RatingStars>1.49</RatingStars>
        <RatingStars>1.5</RatingStars>
        <RatingStars>3</RatingStars>
        <RatingStars>4</RatingStars>
        <RatingStars>5</RatingStars>
      </div>
    </div>
  </>;
}

export default App;
