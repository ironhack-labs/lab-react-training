import './App.css';
import IdCard from './IdCard/IdCard';
import Greetings from './Greetings/Greeting';
import Random from './Random/Random';
import BoxColor from './BoxColor/BoxColor';

function App() {
  return (
    <>
      <div className="App">
        <IdCard
          lastName="Diallo"
          firstName="Marly"
          gender="male"
          height={'170cm'}
          birth={new Date('1991-01-91')}
          picture="https://randomuser.me/api/portraits/men/44.jpg"
        />

        <IdCard
          lastName="Obrien"
          firstName="Clara"
          gender="female"
          height={'180cm'}
          birth={new Date('1990-15-08')}
          picture="https://randomuser.me/api/portraits/women/44.jpg"
        />
      </div>

      <div>
        <Greetings lang={'de'} children={'Gunther'} />
        <Greetings lang={'fr'} children={'Jacques'} />
        <Greetings lang={'es'} children={'Pablo'} />
        <Greetings lang={'en'} children={'Charles'} />
      </div>

      <div>
        <Random min={1} max={6} />
        <Random min={1} max={100} />
      </div>
      <div>
        <BoxColor r={255} g={0} b={0} />
        <BoxColor r={128} g={255} b={0} />
      </div>
    </>
  );
}

export default App;