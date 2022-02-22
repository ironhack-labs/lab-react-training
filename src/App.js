
import './App.css';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import Random from './components/Random';
import BoxColor from './components/BoxColor';
import LikeButton from './components/LikeButton';
import ClickablePicture from './components/Glasses';
import Dice from './components/Dice';
import Carousel from './components/Carousel';
import NumbersTable from './components/NumbersTable';


function App() {
  return (
    <div className="App">
      {/* Iteration 1 */}
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
<hr></hr>
{/* Iteration 2 */}
<Greetings lang="de">Ludwig</Greetings>
<Greetings lang="fr">François</Greetings>
{/* Iteration 3 */}
<hr></hr>
<Random min={1} max={6}/>
<Random min={1} max={100}/>
<hr></hr>
{/* Iteration 4 */}
<BoxColor r={255} g={0} b={0} />
<BoxColor r={128} g={255} b={0} />
<hr></hr>
{/* Iteration 8 */}
<LikeButton />
<hr></hr>
{/* Iteration 9 */}
<ClickablePicture  />
<hr></hr>
{/* Iteration 10 */}
<Dice />
<hr></hr>
{/* Iteration 11 */}
<Carousel />
<hr></hr>
{/* Iteration 12 */}
<NumbersTable />
    </div>
  );
}

export default App;
