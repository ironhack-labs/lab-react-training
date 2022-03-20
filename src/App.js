import './App.css';
import Greetings from './assets/components/Greetings/Greetings';
import IdCard from './assets/components/IdCard/IdCard';
import Random from './assets/components/Random/Random';
import BoxColor from './assets/components/BoxColor/BoxColor';


function App() {
  return (
    <div>

    <div>
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

    </div>
    <div>
    <Greetings lang="de">Luwding</Greetings>  
    <Greetings lang="fr">François</Greetings>
    </div>
    <div>
    <Random min={1} max={6}/>
    <Random min={1} max={100}/>
    </div>
    <div>
    <BoxColor r={255} g={0} b={0} />
    <BoxColor r={128} g={255} b={0} />
    </div>
    </div>
  );
}

export default App;
