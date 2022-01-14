import './App.css';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import Random from './components/Random';
import BoxColor from './components/BoxColor';



function App() {
  return (
    <div className="App">
      <h1 className='title'>IdCard</h1>
        <IdCard
          lastName='Doe'
          firstName='John'
          gender='male'
          height={178}
          birth= {new Date("1992-07-14")}
          picture="https://randomuser.me/api/portraits/men/44.jpg"
        />
        <IdCard
          lastName='Delores '
          firstName='Obrien'
          gender='female'
          height={172}
          birth= {new Date("1988-05-11")}
          picture="https://randomuser.me/api/portraits/women/44.jpg"
        />
      <h1 className='title'>Greetings</h1>
        <Greetings lang='de'>Ludwig</Greetings>
        <Greetings lang='fr'>François</Greetings>
      <h1 className='title'>Random</h1>
        <Random min={1} max={10}/>
        <Random min={10} max={100}/>
      <h1 className='title'>BoxColor</h1>
        <BoxColor r={255} g={0} b={0} textColor ='white' />
        <BoxColor r={128} g={255} b={0} textColor ='black' />
    </div>
    
  );
}

export default App;
