import './App.css';
import BoxColor from './components/BoxColor';
import Greetings from './components/Greetings';
import IdCard from './components/IdCard';
import Random from './components/Random';

function App() {
  return (
    <div className="App font-[Poppins] w-1/3 m-auto">
      <div className="IdCard">
        <p className="text-4xl font-bold text-slate-400 hover:text-slate-600 my-8 border-b-2 border-slate-400">IdCards</p>
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

      <div className="Greetings">
        <p className="text-4xl font-bold text-slate-400 hover:text-slate-600 my-8 border-b-2 border-slate-400">Greetings</p>
        <Greetings lang="de">Noah</Greetings>
        <Greetings lang="en">James</Greetings>
        <Greetings lang="fr">Nathan</Greetings>
        <Greetings lang="es">Manolo!</Greetings>
      </div>

      <div className='Random'>
        <p className="text-4xl font-bold text-slate-400 hover:text-slate-600 my-8 border-b-2 border-slate-400">Random</p>
        <Random min={1} max={10} />
      </div>

      <div>
        <p className="text-4xl font-bold text-slate-400 hover:text-slate-600 my-8 border-b-2 border-slate-400">Box Color</p>
        <BoxColor
          color='yellow'
          intensity='200'
        />
      </div>

    </div>
  );
}

export default App;
