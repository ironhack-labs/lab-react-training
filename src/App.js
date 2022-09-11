import './App.css';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';

function App() {
  const current = new Date();
  return (
    <div className="App">
      <IdCard
        lastName='Doe'
        firstName='John'
        gender='male'
        height={1.78}  
        birth='Tue Jul 14 1992'
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />

      <IdCard
        lastName='Delores '
        firstName='Obrien'
        gender='female'
        height={1.72}
        birth='Tue May 11 1993'
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />

<Greetings lang="de">Ludwig</Greetings>
<Greetings lang="fr">François</Greetings>

    </div>
  );
}

export default App;
