import './App.css';
import Greetings from './Components/Greetings/Greetings';
import IdCard from './Components/IdCard/IdCard'

function App() {

  return (
    <section className='App'>

      <IdCard
        image={'https://randomuser.me/api/portraits/men/44.jpg'}
        details={{ lastName: 'Doe', firstName: 'John', gender: 'male', height: 178, birth: "1992-07-14" }}
      />
      <IdCard
        image={'https://randomuser.me/api/portraits/women/44.jpg'}
        details={{ lastName: 'Delores', firstName: 'Obrien', gender: 'female', height: 172, birth: "1988-05-11" }}
      />


      <Greetings


      />
    </section>
  );
}
export default App;
