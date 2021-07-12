import logo from './logo.svg';
import './App.css';
import Person from './Card';
import Greetings from './Greetings';
import Random from './Random';
import Color from './Color';

function App() {
  return (
    <div className="App">
      <Person
        lastName="Doe"
        firstName="John"
        gender="male"
        height={1.78}
        birth={new Date('1992-07-14')}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />
      <Person
        lastName="Delores "
        firstName="Obrien"
        gender="female"
        height={1.72}
        birth={new Date('1988-05-11')}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />
      <Greetings lang="Hallo" name="Ludwig" />
      <Greetings lang="Bonjour" name="François" />
      <Random min="1" max="6" />
      <Random min="1" max="100" />
      <Color style={{ backgroundColor: 'rgb(255,0,0)' }} name="red" />
      <Color style={{ backgroundColor: 'rgb(128,255,0)' }} name="green" />
    </div>
  );
}

export default App;
