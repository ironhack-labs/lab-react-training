import './App.css';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import Random from './components/Random';
import LikeButton from './components/LikeButton';
import ClickablePicture from './components/ClickablePicture';
import Dice from './components/Dice';
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

      {/* Iteration 2 */}
        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="fr">François</Greetings>

      {/* Iteration 3 */}
        <Random min={1} max={6}/>
        <Random min={1} max={100}/>

      {/* Iteration 8 */}
        <LikeButton />

      {/* Iteration 9 */}
        <ClickablePicture
          img='maxence.png'
          imgClicked='maxence-glasses.png'
        />

        {/* Iteration 10 */}
        <Dice />

        {/* Iteration 12 */}
        <NumbersTable limit={12} />

    </div>
  );
}

export default App;
