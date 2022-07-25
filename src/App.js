import './App.css';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <section>
        <h1>hello</h1>
        <IdCard
          lastName='Doe'
          firstName='John'
          gender='male'
          height={178}
          birth={new Date("1992-07-14")}
          picture="https://randomuser.me/api/portraits/men/44.jpg"
        />

        <IdCard
          lastName='Delores '
          firstName='Obrien'
          gender='female'
          height={172}
          birth={new Date("1988-05-11")}
          picture="https://randomuser.me/api/portraits/women/44.jpg"
        />

        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="fr">François</Greetings>
      </section>
      </header>

      
    </div>
  );
}

export default App;
