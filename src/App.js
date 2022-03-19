// import logo from './logo.svg';
import './App.css';
import IdCard from './components/IdCards';
import Greetings from './components/Greetings';
import Random from './random/Random';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

    <div>
      <div>
        <h1> Iteration 1 </h1>
        <IdCard
          lastName="Doe"
          firstName="John"
          gender="male"
          height={178}
          birth={new Date('1992-07-14')}
          picture="https://randomuser.me/api/ retratos/hombres/44.jpg"
        />
        <IdCard
          lastName="Delores"
          firstName="Obrien"
          gender="female"
          height={172}
          birth={new Date('1988-05-11')}
          picture="https://randomuser.me/api/ retratos/mujeres/44.jpg"
        />
      </div>
    
      <div>
        <h1> Iteration2</h1>
          <Greetings lang="de" />
          <Greetings lang="en" />
          <Greetings lang="es" />
          <Greetings lang="fr" />
      </div>

      <div>
        <h1> Iteration3</h1>
          <Random min={1} max={6}/>
          <Random min={1} max={100}/>
      </div>

      
    </div>
  );
}

export default App;