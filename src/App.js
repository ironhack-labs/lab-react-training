
import './App.css';
import IdCard from "./Components/IdCard";
import Greetings from "./Components/Greetings";
import Random from "./Components/Random";

function App() {
  return (
    <div>

        <IdCard lastName='Doe' firstName='John' gender='male' height={178} birth={new Date("1992-07-14").toISOString().slice(0,-14)} picture="https://randomuser.me/api/portraits/men/44.jpg" />

        <IdCard lastName='Delores' firstName='Obrien' gender='female' height={172} birth={new Date("1988-05-11").toISOString().slice(0,-14)} picture="https://randomuser.me/api/portraits/women/44.jpg" />
        

        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="fr">François</Greetings>

        <Random min={1} max={6}/>
        <Random min={1} max={100}/>
    </div>
  );
}

export default App;
