import './App.css';
import IdCard from './components/id-card/IdCard';
import Greetings from './components/greetings/Greetings';
import Random from './components/random/Random';
import BoxColor from './components/box-color/BoxColor';
import CreditCard from './components/credit-card/CreditCard';

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <h1 className="mt-3 fw-bold py-2">Id Card</h1>
        <IdCard
          lastName="Doe"
          firstName="John"
          gender="male"
          height={178}
          birth={new Date('1992-07-14')}
          picture="https://randomuser.me/api/portraits/men/44.jpg"
          className="mb-2"
        />

        <IdCard
          lastName="Delores "
          firstName="Obrien"
          gender="female"
          height={172}
          birth={new Date('1988-05-11')}
          picture="https://randomuser.me/api/portraits/women/44.jpg"
          className="mb-2"
        />

        <h1 className="mt-3 fw-bold py-2">Greetings</h1>
        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="fr">François</Greetings>

        <h1 className="mt-3 fw-bold py-2">Random</h1>
        <Random min={1} max={6}/>
        <Random min={1} max={100}/>

        <h1 className="mt-3 fw-bold py-2">BoxColor</h1>
        <BoxColor r={255} g={0} b={0} />
        <BoxColor r={128} g={255} b={0} className={"text-dark"} />

        <h1 className="mt-3 fw-bold py-2">CreditCard</h1>



      </div>
    </div>
  );
}

export default App;
