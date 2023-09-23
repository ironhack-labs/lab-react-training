import "./App.css";
import IdCard from "./components/id-card";
import Greetings from "./components/greetings"
import Random from "./components/random"
import BoxColor from "./components/box-color";
import CreditCard from "./components/credit-card";

function App() {
  return (
    <div className="App">

      <h6 className="text-start ms-4 mt-4 mb-2">Iteration 1</h6>
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

      <h6 className="text-start ms-4 mt-4 mb-1">Iteration 2</h6>
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>

      <h6 className="text-start ms-4 mt-4 mb-1">Iteration 3</h6>
      <Random min={1} max={6} />
      <Random min={1} max={100} />

      <h6 className="text-start ms-4 mt-4 mb-1">Iteration 4</h6>
      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />

      <h6 className="text-start ms-4 mt-4 mb-1">Iteration 5</h6>
      <div className="container-fluid">
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
      
      <h6 className="text-start ms-4 mt-4 mb-1">Iteration 6</h6>

      <h6 className="text-start ms-4 mt-4 mb-1">Iteration 7</h6>

      <h6 className="text-start ms-4 mt-4 mb-1">Iteration 8</h6>

    </div>
  );
}

export default App;
