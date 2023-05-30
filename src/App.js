import './App.css';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
function App() {
  return (
    <div className="App">
      <div>
        {' '}
        <h1>IdCard</h1>
        <IdCard
          lastName="Papadopoulos"
          firstName="John"
          gender="male"
          height={198}
          birth={new Date('1989-01-08')}
          picture="https://t4.ftcdn.net/jpg/03/26/98/51/360_F_326985142_1aaKcEjMQW6ULp6oI9MYuv8lN9f8sFmj.jpg"
        />
        <IdCard
          lastName="Smith"
          firstName="Clara"
          gender="female"
          height={178}
          birth={new Date('1985-09-02')}
          picture="https://media.istockphoto.com/id/1144287292/photo/headshot-portrait-of-happy-mixed-race-african-girl-wearing-glasses.jpg?s=612x612&w=0&k=20&c=cdW-kkerUEhV80xLvE-Jg8Zpf4sR5YTR2YiH3K5IkNQ="
        />
      </div>

      <h1>Greetings</h1>
      <Greetings lang="de">Maria</Greetings>
      <Greetings lang="fr">Pier</Greetings>
    </div>
  );
}

export default App;
