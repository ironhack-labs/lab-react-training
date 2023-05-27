import './App.css';
import Greetings from './components/Greetings';
import Idcard from './components/Idcard';
import Random from './components/Random';
import berlinData from "./data/berlin.json";
import BoxColor from './components/BoxColor';


function App() {
  // console.log(berlinData)

  return (
    <div className="App">
<div className='flex justify-center p-6 text-4xl text-bold'>Id Card</div>
      <Idcard 
      firstName={berlinData[0].firstName}
      lastName={berlinData[0].lastName}
      gender="Male"
      height={178}
      birth="1992-07-14"
      img={berlinData[0].img}
      />
      
      <Idcard 
      firstName={berlinData[1].firstName}
      lastName={berlinData[1].lastName}
      gender="Male"
      height={181}
      birth="1991-03-12"
      img={berlinData[1].img}
      />
      <div className='flex justify-center p-6 text-4xl text-bold'>Greetings</div>

      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>

      <div className='flex justify-center p-6 text-4xl text-bold'>Random</div>

      <Random min={1} max={10} />
      <div className='flex justify-center p-6 text-4xl text-bold'>Box Color</div>
      
      <BoxColor r={255} g={0} b={0}/>
      <BoxColor r={0} g={40} b={255}/>
      
      <div className='flex justify-center p-6 text-4xl text-bold'>Box Color</div>
    </div>
    
    
  );
}

export default App;
