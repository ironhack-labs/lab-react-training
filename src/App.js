import Greeting from './components/greeting/greeting';
import IdCard from './components/IdCard/IdCard';
import Random from './components/random/random';
import BoxColor from './components/BoxColor/BoxColor';


function App() {
  return (
    <div className="p-5 bg-light.bg-gradient">
      <IdCard
        lastname="Doe"
        firstname="John"
        gender="male"
        height={178}
        birth={new Date('1992-07-14')}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />
      <IdCard
        lastname="Delores"
        firsname="Obrien"
        gender="female"
        height={172}
        birth={new Date('1988-05-11')}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />
      <Greeting lang="de"> Ludwig</Greeting>
      <Greeting lang="fr"> François</Greeting>
      <Random min={1} max={6} />
      <Random min={1} max={100} />
      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />
    </div>
  );
}

export default App;
