import './App.css';
import Idcard from './components/Idcard';
import berlinData from "./data/berlin.json";


function App() {
  // console.log(berlinData)

  return (
    <div className="App">
      
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
    </div>
  );
}

export default App;
