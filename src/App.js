import './App.css';
import IdCard from "./components/IdCard";
import Greetings from './components/Greetings';

function App() {
  return (
    <div className="App">
      <h1>IdCard</h1>
      <div className="IdCard box">
      <IdCard
  lastName='Doe'
  firstName='John'
  gender='male'
  height={178}
  birth={new Date("1992-07-14")}
  picture="https://randomuser.me/api/portraits/men/44.jpg"
/>
      </div>
      <div class="IdCard box">
        <img src="https://randomuser.me/api/portraits/women/8.jpg" alt="" />
        <div class ="right">
          <strong>First name</strong>
          ": " Obrien
          <br></br>
          <strong>Last name</strong>
          ": " Delores
          <br></br>
          <strong>Gender</strong>
          ": "female "<br></br>
          <strong>Height</strong>
          ": " "1.72" "m<br></br>
          <strong>Birth</strong>
          ": " Mon May 10 1993
          <br></br>
        </div>
      </div>
      <h1>Greetings</h1>
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>
    </div>
  );
}

export default App;
