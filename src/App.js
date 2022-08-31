import './App.css';
import IdCard from './components/IdCard/IdCard';
import Greetings from  './components/Greetings/Greetings'
import Random from './components/Random/Random';
import BoxColor from './components/BoxColor/BoxColor'
import CreditCard from './components/CreditCard/CreditCard';

function App() {
  return (
    <div className="App container ">

      <div>
        <div>
          <h3 className='text-center mt-5'> Iterarion 1: ID Cards </h3>
          <hr />
        </div>
        <div>
        <IdCard
          className = 'row d-flex justify-content-start align-items-center border border-dark m-5'
          lastName='Doe'
          firstName='John'
          gender='male'
          height={178}
          birth={new Date("1992-07-14")}
          picture="https://randomuser.me/api/portraits/men/44.jpg"
        />
        </div>
        <div>
        <IdCard className = 'row d-flex justify-content-start align-items-center border border-dark m-5'
          lastName='Delores '
          firstName='Obrien'
          gender='female'
          height={172}
          birth={new Date("1988-05-11")}
          picture="https://randomuser.me/api/portraits/women/44.jpg"
        />
        </div>
      </div>
      <div>
        <div>
          <h3 className='text-center mt-5'> Iterarion 2: Greetings </h3>
          <hr />
        </div>
        <div>
          <Greetings lang='de'>Ludwig</Greetings>
          <Greetings lang='en'>Mike</Greetings>
          <Greetings lang='es'>Luis</Greetings>
          <Greetings lang='fr'>François</Greetings>
        </div>
      </div>
      <div>
        <div>
          <h3 className='text-center mt-5'> Iterarion 3: Random </h3>
          <hr/>
        </div>
        <div>
          <Random min={1} max={6}/>
          <Random min={1} max={100}/>
        </div>
      </div>
      <div>
        <div>
          <h3 className='text-center mt-5'> Iterarion 4: BoxColor </h3>
          <hr/>
        </div>
        <div>
        <BoxColor r={255} g={0} b={0} />
        <BoxColor r={128} g={255} b={0} />
        </div>
      </div>
      <div>
        <div>
          <h3 className='text-center mt-5'> Iterarion 5: CreditCard </h3>
          <hr/>
        </div>
        <div className='row mb-5 d-flex justify-content-center align-items-center'>

        <CreditCard
          className="col-3 "
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
          className="col-3"
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
          className="col-3"
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
      </div>
    </div>
  );
}

export default App;
