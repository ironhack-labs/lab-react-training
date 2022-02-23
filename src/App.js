
import './App.css';
import Greetings from './component/Main/Greetings';
import IdCard from './component/Main/IdCard';



function App() {
  return (
    <div className="App">
      <h1>Iteration 1</h1>
       <IdCard
        lastName='Doe'
        firstName='John'
        gender='male'
        height={178}
        birth={new Date("1992-07-14")}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
        />
        
        <IdCard
        lastName='Delores '
        firstName='Obrien'
        gender='female'
        height={172}
        birth={new Date("1988-05-11")}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
        />

        <hr />
      
      <h1>Iteration 2</h1>

        <Greetings lang="de">Gerardo</Greetings>
        
     

    </div>
  );
}

export default App;
