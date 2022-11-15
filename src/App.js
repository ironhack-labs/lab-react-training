import './App.css';
import IdCard from './components/IdCard'
import Greetings from './components/Greetings';
import Random from './components/Random';
import BoxColor from './components/BoxColor';

function App() {
  return (
    <div className="App">
      <div className="IdCard">
        <IdCard
          lastName='Doe'
          firstName='John'
          gender='male'
          height={178}
          birth={new Date("1992-07-14")}
          picture="https://randomuser.me/api/portraits/men/44.jpg"
        />
      </div>
      <div className="IdCard">
        <IdCard
          lastName='Delores '
          firstName='Obrien'
          gender='female'
          height={172}
          birth={new Date("1988-05-11")}
          picture="https://randomuser.me/api/portraits/women/44.jpg"
        />
      </div>
      
      <br />
      <br />
      <br />

      <div className="greetings">
        <Greetings lang="de">Ludwig</Greetings>
      </div>
      <div className="greetings">
        <Greetings lang="fr">François</Greetings>
      </div>

      <br />
      <br />
      <br />

      <div className="random">
        <Random min={1} max={6}/>
      </div>
      <div className="random">
        <Random min={1} max={100}/>   
      </div>

      <br />
      <br />
      <br />

      <div className="boxColor">
        <BoxColor r={255} g={0} b={0} />
      </div>
      <div className="boxColor">
        <BoxColor r={128} g={255} b={0} />  
      </div>
    </div>
  );
}

export default App;