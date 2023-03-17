import './App.css';
import IdCard from './components/IdCard';
import Greeting from './components/Greeting';
import Random from './components/Random';
import BoxColor from './components/BoxColor';

function App() {
  return (
    <div className="App">
    
{/* INTERACTION 1 */}
      <IdCard
        lastName="Doe"
        firstName='John'
        gender='male'
        height={178} 
        birth="1992-07-14"
        picture="https://randomuser.me/api/portraits/men/44.jpg"
        /> 
        
        <IdCard
          lastName='Delores '
          firstName='Obrien'
          gender='female'
          height={172}
          birth="1988-05-11"
          picture="https://randomuser.me/api/portraits/women/44.jpg"
/>

{/* INTERACTION 2 */}
            <Greeting lang="de">Ludwig</Greeting>
            <Greeting lang="fr">François</Greeting> 

{/* INTERACTION 3 */}
            <Random min={1} max={6}/>
            <Random min={1} max={100}/>

{/* INTERACTION 4 */}
            <BoxColor r={255} g={0} b={0} />
            <BoxColor r={128} g={255} b={0} />
    </div>
  );
}

export default App;
