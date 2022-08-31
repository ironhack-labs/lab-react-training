import './App.css';
import IdCard from './components/IdCard/IdCard';
import Greetings from  './components/Greetings/Greetings'
import Random from './components/Random/Random';
import BoxColor from './components/BoxColor/BoxColor'

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
    </div>
  );
}

export default App;
