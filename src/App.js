import './App.css';
import IdCard from './components/IdCard/IdCard';
import Greetings from './components/Greetings/Greetings';
import Random from './components/Random/Random';
import BoxColor from './components/BoxColor/BoxColor';

function App() {
  return (
    <>
      <div className="App">
        <IdCard
          lastName="Chatriot"
          firstName="Guillaume"
          gender="male"
          height={'179cm'}
          birth={new Date('1988-11-09')}
          picture="https://randomuser.me/api/portraits/men/44.jpg"
        />

        <IdCard
          lastName="Costa"
          firstName="Ana"
          gender="female"
          height={'180cm'}
          birth={new Date('1988-10-04')}
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
