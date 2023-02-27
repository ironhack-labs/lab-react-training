import './App.css'
import Greetings from './Greetings/Greetings'
import IdCard from './IdCard/IdCard'
import Random from './Random/Random'
import BoxColor from './BoxColor/BoxColor'
import CreditCard from './CreditCard/CreditCard'



function App() {
  return (
    <div className="App">

      <header className="App-header">

        <IdCard
          CardInfo={{
            firstName: 'John',
            lastName: 'Doe',
            gender: 'male',
            height: 178,
            birth: ('1992-07-14'),
            picture: "https://randomuser.me/api/portraits/men/44.jpg"
          }}

        />

        <IdCard
          CardInfo={{
            firstName: 'Obrien',
            lastName: 'Delores ',
            gender: 'female',
            height: 172,
            birth: ("1988-05-11"),
            picture: "https://randomuser.me/api/portraits/women/44.jpg"
          }}

        />


        < Greetings lang="de">Ludwig</Greetings>
        < Greetings lang="es">Popino</Greetings>
        < Greetings lang="fr">Ludwig</Greetings>
        < Greetings lang="en">Ludwig</Greetings>


        <Random min={1} max={6} />
        <Random min={1} max={100} />


        <BoxColor r={255} g={0} b={0}> 255-0-0</BoxColor>
        <BoxColor r={128} g={255} b={0}> 128-255-0</BoxColor>




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




      </header>
    </div>
  );
}

export default App;
