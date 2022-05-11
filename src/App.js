import './App.css';
import Greetings from './components/Greetings';
import IdCard from './components/IdCard';
import Random from './components/Random';
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreditCard'
import Rating from './components/Rating';
import DriverCard from './components/DriverCard';

function App() {
  return (
<div className="App">
      <div>
        <h2>Iteracion 1</h2>
        <IdCard
          lastName='Doe'
          firstName='John'
          gender='male'
          height={178}
          birth={new Date("1992-07-14")}
          picture="https://randomuser.me/api/portraits/men/44.jpg"
        />
        <IdCard
          lastName='Delores '
          firstName='Obrien'
          gender='female'
          height={172}
          birth={new Date("1988-05-11")}
          picture="https://randomuser.me/api/portraits/women/44.jpg"
        />
    </div>
    <div>
        <h2>Iteracion 2</h2>
        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="fr">François</Greetings>
    </div>
    <div>
        <h2>Iteracion 3</h2>
        <Random min={1} max={6}/>
        <Random min={1} max={100}/>
    </div>
    <div>
        <h2>Iteracion 4</h2>
    <BoxColor r={255} g={0} b={0} />
    <BoxColor r={128} g={255} b={0} />
    </div>
    <div>
        <h2>Iteracion 5</h2>
              <div  className="iteration-5-main">
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
    <div>
        <h2>Iteracion 6</h2>
          <Rating>0</Rating>
          <Rating>1.49</Rating>
          <Rating>1.5</Rating>
          <Rating>3</Rating>
          <Rating>4</Rating>
          <Rating>5</Rating>
    </div>
    <div>
        <h2>Iteracion 7</h2>
            <div className='licenseContainer'>
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
    </div>
    </div>
</div>
  );
}

export default App;
