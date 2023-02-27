import './App.css'
import IdCard from './components/IdCard/IdCard'
import Greetings from './components/Greetings/Greetings'
import Random from './components/Random/Random'
import BoxColor from './components/BoxColor/BoxColor'
import CreditCard from './components/CreditCard/CreditCard'
import Rating from './components/Rating/Rating'
import DriverCard from './components/DriverCard/DriverCard'

function App() {

  return (

    <div className='App'>

      <div className='cards'>
        <IdCard cardInfo={{
          lastName: 'Doe',
          firstName: 'John',
          gender: 'male',
          height: 178,
          birth: "1992-07-14",
          picture: "https://randomuser.me/api/portraits/men/44.jpg"
        }}
        />
        <IdCard cardInfo={{
          lastName: 'Delores',
          firstName: 'Obrien',
          gender: 'female',
          height: 172,
          birth: "1988-05-11",
          picture: "https://randomuser.me/api/portraits/women/44.jpg"
        }}
        />
      </div>

      <div className='greetings'>
        <Greetings language={"es"}>Andrei</Greetings>
      </div>

      <div className='random'>
        <Random min={1} max={6}></Random>
        <Random min={1} max={100}></Random>
      </div>

      <div>
        <BoxColor r={199} g={59} b={100} />
        <BoxColor r={32} g={56} b={122} />
        <BoxColor r={43} g={124} b={12} />
        <BoxColor r={45} g={220} b={167} />
      </div>

      <div>
        <CreditCard infoCard={{
          type: "Visa",
          number: "0123456789018845",
          expirationMonth: 3,
          expirationYear: 2021,
          bank: "BNP",
          owner: "Maxence Bouret",
          bgColor: "#11aa99",
          color: "white"
        }}
        />
        <CreditCard infoCard={{
          type: "Master Card",
          number: "0123456789018845",
          expirationMonth: 3,
          expirationYear: 2021,
          bank: "BNP",
          owner: "Maxence Bouret",
          bgColor: "#11aa99",
          color: "white"
        }}
        />
        <CreditCard infoCard={{
          type: "Master Card",
          number: "0123456789018845",
          expirationMonth: 3,
          expirationYear: 2021,
          bank: "BNP",
          owner: "Maxence Bouret",
          bgColor: "#11aa99",
          color: "white"
        }}
        />
      </div>

      <div className='rating'>
        <Rating>1.5</Rating>
        <Rating>2.8</Rating>
        <Rating>3.2</Rating>
        <Rating>4.6</Rating>
        <Rating>5</Rating>
      </div>

      <div>
        <DriverCard driverInfo={{
          name: "Travis Kalanick",
          rating: 4.2,
          img: "https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428",
          car: [{
            model: "Toyota Corolla Altis",
            licensePlate: "CO42DE"
          }]
        }}
        />

        <DriverCard driverInfo={{
          name: "Dara Khosrowshahi",
          rating: 4.9,
          img: "https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg",
          car: [{
            model: "Audi A3",
            licensePlate: "BE33ER"
          }]
        }}
        />

      </div>

    </div>
  )
}

export default App;
