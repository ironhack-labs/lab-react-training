import './App.css';
import IdCard from './Components/IdCard';
import Greetings from './Components/Greetings';
import Random from './Components/Random';
import BoxColor from './Components/BoxColor';
import LikeButton from './Components/LikeButton';


function App() {
  return (
    <div className="App">

      <h1>IdCard</h1>
   <IdCard
  lastName='Doe'
  firstName='John'
  gender='male'
  height={178}
  birth={"1992-07-14"}
  picture="https://randomuser.me/api/portraits/men/44.jpg"
/>
<hr />
<IdCard
  lastName='Delores '
  firstName='Obrien'
  gender='female'
  height={172}
  birth={"1988-05-11"}
  picture="https://randomuser.me/api/portraits/women/44.jpg"
/>


<hr />
<h2>Greetings</h2>
<Greetings lang="de">Ludwig</Greetings>
<Greetings lang="fr">François</Greetings>


<hr />
<Random min={1} max={6}/>
<Random min={1} max={100}/>

<hr />
<BoxColor r={255} g={0} b={0} />
<BoxColor r={128} g={255} b={0} />


<hr />

<LikeButton />

<hr />





    </div>
  );
}

export default App;
