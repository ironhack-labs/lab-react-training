
import './App.css';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';

function App() {
  return (
    <div className="lists">
    
   <div> <IdCard 
 lastName='Doe'
firstName='John'
gender='male'
height={1.72}
birth={new Date("1992-07-14")}
picture="https://randomuser.me/api/portraits/men/44.jpg" />

<IdCard 
    lastName='Delores '
  firstName='Obrien'
  gender='female'
  height={172}
  birth={new Date("1988-05-11")}
  picture="https://randomuser.me/api/portraits/women/44.jpg" />
  </div>
  <div>
  <Greetings lang="de">Ludwig</Greetings>
<Greetings lang="fr">François</Greetings>
<Greetings lang="de">François</Greetings>
<Greetings lang="en">François</Greetings>
</div>

</div>
    
  );
}

export default App;
