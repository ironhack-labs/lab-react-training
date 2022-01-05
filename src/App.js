import './App.css';
import IdCard from './components/IdCard/IdCard';
import Greetings from './components/Greetings/Greetings';
import Random from './components/Random/Random';
import BoxColor from './components/BoxColor/BoxColor';

function App() {
  return (
    <div className="App">
      <div className='title'>
        <h1>Id Card</h1>
        <IdCard
        lastName='Doe'
        firstName='John'
        gender='male'
        height={178}
        birth={new Date("1992-07-14")}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />

      <IdCard
        lastName='Delores'
        firstName='Obrien'
        gender='female'
        height={172}
        birth={new Date("1988-05-11")}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />
      </div>
      <div className='title'>
        <h1>Greetings</h1>
        {/* props.children-> text -> Ludwig< or François*/}
        <Greetings lang="de">Ludwig</Greetings> 
        <Greetings lang="fr">François</Greetings>
      </div>
      <div className='title'>
        <h1>Random</h1>
        {/* props.children-> text -> Ludwig< or François*/}
        <Random min={1} max={6}/>
        <Random min={1} max={100}/>
      </div>
      <div className='title'>
        <h1>Box Color</h1>
        <BoxColor r={255} g={0} b={0} />
        <BoxColor r={128} g={255} b={0} />
      </div>
      
    </div>
  );
}

export default App;
