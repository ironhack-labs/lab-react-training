import IdCard from "./components/id-card/IdCard";
import Greetings from "./components/greetings/Greetings";
import RandomNum from "./components/random-number/RandomNum";
import BoxColor from "./components/box-color/BoxColor";


function App() {
  return (
    <div className="App">

      <div className="id-cards">
        <h2 className="ms-4 mt-4">ID Card</h2>
        <IdCard
          lastName='Doe'
          firstName='John'
          gender='male'
          height={178}
          birth={new Date("1992-07-14")}
          picture="https://randomuser.me/api/portraits/men/44.jpg"
        />
        <IdCard
          lastName='Delores'
          firstName='Obrien'
          gender='female'
          height={172}
          birth={new Date("1988-05-11")}
          picture="https://randomuser.me/api/portraits/women/44.jpg"
        />
      </div>

      <hr />
    
      <div className="greetings mb-4">
        <h2 className="ms-4 my-4">Greetings</h2>
        <Greetings lang="es">Iván</Greetings>
        <Greetings lang="eng">John</Greetings>
        <Greetings lang="fr">FranÇois</Greetings>
        <Greetings >Ludwig</Greetings>
      </div>

      <hr />

      <div className="random">
        <h2 className="ms-4 my-4">Random Num</h2>  
        <RandomNum min={1} max={6}/>
        <RandomNum min={1} max={100}/>
      </div>

      <hr />

      <div className="box.color">
        <h2 className="ms-4 my-4">Box Color</h2>
        <BoxColor/>
        <BoxColor r={255} g={0} b={0} />
        <BoxColor r={128} g={255} b={0} />
      </div>
    
    </div>
  );
}

export default App;
