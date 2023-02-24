import { Greetings } from './components/Greetings';
import { IdCard } from './components/IdCard';


function App() {
  return (
    <div className="App">
      <IdCard 
      firstName = {"John"}
      lastName = {"Doe"}
      gender = {"Male"}
      height = {1.79}
      birth = {"1992-07-14"}
      picture = {"https://randomuser.me/api/portraits/men/44.jpg"}/>

      <IdCard
      firstName='Obrien'
      lastName='Delores'
      gender='Female'
      height={1.72}
      birth='1988-05-11'
      picture='https://randomuser.me/api/portraits/women/44.jpg'/>

      <Greetings/>
    </div>
  );
}



export default App;
