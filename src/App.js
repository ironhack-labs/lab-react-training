import './App.css';
import Icards from './components/Icards';
import Greetings from './components/Greetings';
import Greetings2 from './components/Greetings2';
import Random from './components/Random';


function App() {

  return (  

    <>
    
    <Icards
     lastName='Doe'
     firstName='John'
     gender='male'
     height={178}
     birth={new Date("1992-07-14").toString()}
     picture="https://randomuser.me/api/portraits/men/44.jpg" />

    <Icards 
        lastName='Delores '
        firstName='Obrien'
        gender='female'
        height={172}
        birth={new Date("1988-05-11").toString()}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
    />

    
    <Greetings2 />
    <Random min={5} max={20} />

  </>
  
  );


}

export default App;
