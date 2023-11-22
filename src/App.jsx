import "./App.css";
import IdCard from "./components/idcard/idcard";
import Greetings from "./components/greetings/greetings";
import Random from "./components/random/random";
import Boxcolor from "./components/box-color/box-color";
import CreditCard from "./components/credit-card/credit-card";
import Rating from "./components/rating/rating";
import Counter from "./components/counter/counter";
import DriverCard from "./components/driver-card/driver-card";
import LikeButton from "./components/like-button/like-button";
import ClickablePicture from "./components/clickable-picture";

function App() {
  return (
    <>  
      <div className="container">
        <IdCard
          lastName='Doe'
          firstName='John'
          gender='male'
          height={178}
          birth={new Date("1992-07-14")}
          image="https://randomuser.me/api/portraits/men/44.jpg"
        />
        <IdCard
          lastName='Delores'
          firstName='Obrien'
          gender='female'
          height={172}
          birth={new Date("1988-05-11")}
          image="https://randomuser.me/api/portraits/women/44.jpg"
        />

      </div>

      <div className="mx-5 my-2">
        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="fr">François</Greetings>
      </div>

      <div className="mx-5">
        <Random min={1} max={6}/>
        <Random min={1} max={100}/>
      </div>

      <div>
        <Boxcolor r={255} g={0} b={0} />
        <Boxcolor r={0} g={0} b={255} />
        <Boxcolor r={0} g={255} b={0} />
        <Boxcolor r={23} g={100} b={120} />
      </div>

      <hr />

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

      <hr />

      <Rating>0</Rating>
      <Rating>1.49</Rating>
      <Rating>1.5</Rating>
      <Rating>3</Rating>
      <Rating>4</Rating>
      <Rating>5</Rating>

      <hr />

      <div className="App">
        <Counter />
      </div>

      <DriverCard
        name="Travis Kalanick"
        rating={4.2}
        img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg"
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
      <div className="text-center">
        <LikeButton />
        <ClickablePicture img="maxence.png" imgClicked="maxence-glasses.png" />
      </div>
      


    </>
  );
}

export default App;

