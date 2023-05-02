import './App.css';
import studentList from './data/berlin.json';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import Random from './components/Random';
import BoxColor from './components/BoxColor';

function App() {
  return (
    <div className="App">
      {/* <section clasName="id-section">
        {studentList.map((name) => {
          return <IdCard name={name} key={name.firstName} />;
        })}
      </section> */}

      <section clasName="id-section">
        <IdCard
          lastName="Doe"
          firstName="John"
          gender="male"
          height={178}
          birth={new Date('1992-07-14')}
          picture="https://randomuser.me/api/portraits/men/44.jpg"
        />

        <IdCard
          lastName="Delores "
          firstName="Obrien"
          gender="female"
          height={172}
          birth={new Date('1988-05-11')}
          picture="https://randomuser.me/api/portraits/women/44.jpg"
        />
      </section>

      <section clasName="greetings-section">
        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="fr">François</Greetings>
      </section>

      <section clasName="random">
        <Random min={1} max={6} />
        <Random min={1} max={100} />
      </section>

      <section clasName="box-color">
        <BoxColor r={255} g={0} b={0} />
        <BoxColor r={128} g={255} b={0} />
      </section>
    </div>
  );
}

export default App;
