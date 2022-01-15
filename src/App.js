import './App.css';
import IdCard from './idcard/IdCard';
import Greetings from './greetings/Greetings'
function App() {
  return (
    <div className="App">
      <IdCard
        lastName="Doe"
        firstName="John"
        gender="male"
        height={1.78}
        birth={new Date('1992-07-14').toDateString()}
        //to remove day
        //.replace(/^\S+\s/,'')}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />
      <IdCard
        lastName="Obrien"
        firstName="Delores"
        gender="female"
        height={1.72}
        birth={new Date('1993-05-11').toDateString()}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />

      <Greetings lang='fr'>Peter</Greetings>
      <Greetings lang='es'>Johanna</Greetings>
    </div>
  );
}

export default App;
