// src/App.js
import './App.css';
import Greetings from './Greetings/Greetings';
import './IdCard/IdCard';
import IdCard from './IdCard/IdCard';
import Random from './Random/Random';

function App() {
  return (
    <div className="App">
      <IdCard
        lastName={'Doe'}
        firstName={'John'}
        gender={'male'}
        height={178}
        birth={new Date('1992-07-14')}
        picture={'https://randomuser.me/api/portraits/men/44.jpg'}
      />
      ;
      <IdCard
        lastName={'Dolores'}
        firstName={'Obrian'}
        gender={'female'}
        height={172}
        birth={new Date('1988-05-11')}
        picture={'https://randomuser.me/api/portraits/women/44.jpg'}
      />
      <Greetings lang={'de'}>Lugwig </Greetings>
      <Greetings lang={'fr'}>Francois </Greetings>
      <Random min={1} max={6} />
      <Random min={1} max={100} />
    </div>
  );
}
export default App;
