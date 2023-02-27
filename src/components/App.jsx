
import '../components/App.css';
import BoxColor from './BoxColor/BoxColor';
import CreditCard from './CreditCard/CreditCard';
import Greetings from './Greetings/Greetings';
import IdCard from './IdCard/IdCard';
import Random from './Random/Random';
import Rating from './Rating/Rating';
import DriverCard from './DriverCard/DriverCard';

const App = () => {

  return (

    <div className='App'>

      <IdCard
        cardInfo={{
          lastName: 'Doe',
          firstName: 'John',
          gender: 'male',
          height: ("1.78m"),
          birth: ("1992-07-14"),
          picture: 'https://randomuser.me/api/portraits/men/44.jpg'
        }}
      />


      <IdCard
        cardInfo={{
          lastName: 'Delores',
          firstName: 'Obrien',
          gender: 'female',
          height: ("1.72m"),
          birth: ("1988-05-11"),
          picture: 'https://randomuser.me/api/portraits/women/44.jpg'
        }}
      />
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>

      <Random min={1} max={6} />
      <Random min={1} max={100} />

      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />

      <CreditCard
        creditCardInfo={{
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


      <CreditCard
        creditCardInfo={{
          type: "Master Card",
          number: "0123456789010995",
          expirationMonth: 3,
          expirationYear: 2021,
          bank: "N26",
          owner: "Maxence Bouret",
          bgColor: "#eeeeee",
          color: "#222222"

        }}
      />


      <CreditCard
        creditCardInfo={{
          type: "Visa",
          number: "0123456789016984",
          expirationMonth: 12,
          expirationYear: 2021,
          bank: "Name of the Bank",
          owner: "Firstname Lastname",
          bgColor: "#ddbb55",
          color: "white"
        }}
      />

      <Rating>0</Rating>
      <Rating>1.49</Rating>
      <Rating>1.5</Rating>
      <Rating>3</Rating>
      <Rating>4</Rating>
      <Rating>5</Rating>

      <DriverCard
        driverInfo={{
          name: "Travis Kalanick",
          rating: 4.2,
          img: "https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428",
          car: [{
            model: "Toyota Corolla Altis",
            licensePlate: "CO42DE"
          }]
        }}
      />

      <DriverCard
        driverInfo={{
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

  )
}

export default App;
