import BoxColor from "./components/BoxColor/BoxColor";
import CreditCard from "./components/CreditCard/CreditCard";
import Greetings from "./components/Greetings/Greetings";
import IdCard from "./components/IdCard/IdCard";
import Random from "./components/Random/Random";
import './App.css'
import Rating from "./components/Rating/Rating";
import DriverCard from "./components/DriverCard/DriverCard";
function App() {

  const usersInfo = [

    {
      lastName: 'Doe',
      firstName: 'John',
      gender: 'male',
      height: 178,
      birth: "1992-07-14",
      picture: "https://randomuser.me/api/portraits/men/44.jpg"
    },

    {
      lastName: 'Delores ',
      firstName: 'Obrien',
      gender: 'female',
      height: 172,
      birth: "1988-05-11",
      picture: "https://randomuser.me/api/portraits/women/44.jpg"
    }
  ]

  const cardsInfo = [
    {
      type: "Visa",
      number: "0123456789018845",
      expirationMonth: 3,
      expirationYear: 2021,
      bank: "BNP",
      owner: "Maxence Bouret",
      bgColor: "#11aa99",
      color: "white",
    },
    {
      type: "Master Card",
      number: "0123456789010995",
      expirationMonth: 3,
      expirationYear: 2021,
      bank: "N26",
      owner: "Maxence Bouret",
      bgColor: "#eeeeee",
      color: "#222222",
    }, {
      type: "Visa",
      number: "0123456789016984",
      expirationMonth: 12,
      expirationYear: 2019,
      bank: "Name of the Bank",
      owner: "Firstname Lastname",
      bgColor: "#ddbb55",
      color: "white",
    }
  ]
  const driverInfo = [
    {
      name: "Travis Kalanick",
      rating: 4.2,
      img: "https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428",
      car: {
        model: "Toyota Corolla Altis",
        licensePlate: "CO42DE"
      }
    },
    {
      name: "Dara Khosrowshahi",
      rating: 4.9,
      img: "https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg",
      car: {
        model: "Audi A3",
        licensePlate: "BE33ER"
      }
    }
  ]



  return (
    <>
      <div className="CardsContainer">
        <IdCard userInfo={usersInfo[0]} />
        <IdCard userInfo={usersInfo[1]} />
      </div>
      <hr />
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>
      <hr />
      <Random min={1} max={6} />
      <Random min={1} max={100} />
      <hr />
      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />
      <hr />
      <div className="CreditCardsContainer">
        <CreditCard cardInfo={cardsInfo[0]} />
        <CreditCard cardInfo={cardsInfo[1]} />
        <CreditCard cardInfo={cardsInfo[2]} />
      </div>
      <hr />
      <Rating>0</Rating>
      <Rating>1.49</Rating>
      <Rating>2</Rating>
      <Rating>3</Rating>
      <Rating>4</Rating>
      <Rating>5</Rating>
      <hr />
      <DriverCard driverInfo={driverInfo[0]} />
      <DriverCard driverInfo={driverInfo[1]} />
    </>
  );
}

export default App;
