import logo from './logo.svg';
import './App.css';
import Person from './Card';

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
    </div>
  );
}

export default App;
