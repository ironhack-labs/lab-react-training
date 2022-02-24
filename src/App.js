
import './App.css';
import BoxColor from './component/Main/BoxColor';
import CreditCard from './component/Main/CreditCard';
import DriverCard from './component/Main/DriverCard';
import Greetings from './component/Main/Greetings';
import IdCard from './component/Main/IdCard';
import Random from './component/Main/Random';

function App() {
  return (
    <div className="App">
      <h1>Iteration 1</h1>
       <IdCard
        lastName='Doe'
        firstName='John'
        gender='male'
        height={178}
        birth={new Date("1992-07-14").toLocaleDateString()} 
        picture="https://randomuser.me/api/portraits/men/44.jpg"
        />
        
        <IdCard
        lastName='Delores '
        firstName='Obrien'
        gender='female'
        height={172}
        birth={new Date("1988-05-11").toLocaleDateString()}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
        />

        <hr />
      
      <h1>Iteration 2</h1>

      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>
        
        <hr />

      <h1>Iteration 3</h1>

      <Random min={1} max={6}/>
      <Random min={1} max={100}/>
      
        <hr />

      <h1>Iteration 4</h1>

      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />

        <hr />

      <h1>Iteration 5</h1>

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

      <h1>Iteration 6</h1>

        <hr />

      <h1>Iteration 7</h1>

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
  );
}

export default App;
