import logo from './logo.svg';
import './App.css';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';

function App() {
  return (
    <div className="App">
      <IdCard lastName="Ezzel" firstName="Rian" gender="m" height={170} dob="Nov 25th 1988" 写真="https://randomuser.me/api/portraits/men/44.jpg"/>

      <IdCard lastName="Delores" firstName="Obrien" gender="f" height={153} dob="May 25th 1988" 写真="https://randomuser.me/api/portraits/women/8.jpg"/>

      <h1>GREETINGS</h1>
     <Greetings lang="de" >Lurdvbig </Greetings>
     <Greetings lang="fr" >Fracious </Greetings>
     <Greetings lang="en" >Greg </Greetings>

    </div>
  );
}

export default App;
