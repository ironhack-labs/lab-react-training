import './App.css';
import Greetings from './components/Greetings';
import Idcard from './components/Idcard';
import berlinData from "./data/berlin.json";


function App() {
  // console.log(berlinData)

  return (
    <div className="App">
<div className='flex justify-center p-6'>Iteration 1</div>
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
      <div className='flex justify-center p-6'>Iteration 2</div>

      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>

      <div className='flex justify-center p-6'>Iteration 3</div>
    </div>
    
    
  );
}

export default App;
