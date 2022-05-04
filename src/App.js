// import logo from './logo.svg';
import './App.css';
import IdCard from "./components/IdCard";
import Greetings from "./components/Greetings";
import Random from './components/Random';

function App() {
  return (
  <div className='App'>
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

      <Greetings lang="de">Ludwig </Greetings>
      <Greetings lang="fr">Fançois</Greetings>
      <Random min={1} max={6}/>
      <Random min={1} max={100}/>


      <Rating>0</Rating>
      <Rating>1.49</Rating>
      <Rating>1.5</Rating>
      <Rating>3</Rating>
      <Rating>4</Rating>
      <Rating>5</Rating>
</div>  
  );
}

export default App;
