import './App.css';
import IdCard from './components/IdCard';
import GreetingCard from './components/GreetingsCard';
import Random from './components/Random';
import CreditCard from './components/CreditCard';
import Rating from './components/Rating';
import DriverCard from '../src/components/DriveCard';
import BoxColor from './components/BoxColor';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <IdCard
            lastName='Doe'
            firstName='John'
            gender='male'
            height={178}
            birth={"1992-07-14"}
            picture="https://randomuser.me/api/portraits/men/44.jpg"
          />

        <IdCard
          lastName='Delores'
          firstName='Obrien'
          gender='female'
          height={172}
          birth={"1988-05-11"}
          picture="https://randomuser.me/api/portraits/women/44.jpg"
        />

        <div>
          <GreetingCard lang="de">Ludwig</GreetingCard>
          <GreetingCard lang="fr">Francois </GreetingCard>

          <Random min={1} max={6}/>
          <Random min={1} max={100}/>

          <BoxColor r={255} g={0} b={0} />
          <BoxColor r={128} g={255} b={0} />
        </div>

        <div className="Credit-Card">
          <CreditCard
            type="Visa"
            picture="https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Visa_Logo.png/640px-Visa_Logo.png"
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
            picture="https://1000marcas.net/wp-content/uploads/2019/12/logo-Mastercard.png"
            number="0123456789010995"
            expirationMonth={3}
            expirationYear={2021}
            bank="Name of bank"
            owner="Maxence Bouret"
            bgColor="#eeeeee"
            color="#222222"
          />

          <CreditCard
            type="Visa"
            picture="https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Visa_Logo.png/640px-Visa_Logo.png"
            number="0123456789016984"
            expirationMonth={12}
            expirationYear={2019}
            bank="BBVA"
            owner="Maxence Bouret"
            bgColor="#ddbb55"
            color="white" 
          />
        </div>

        <div className="Rating">
          <Rating>{1}</Rating>
          <Rating>{2}</Rating>
          <Rating>{1.5}</Rating>
          <Rating>{3.2}</Rating>
          <Rating>{4.8}</Rating>
          <Rating>{4.4}</Rating>
        </div>

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

      </header>
    </div>
  );
}

export default App;
