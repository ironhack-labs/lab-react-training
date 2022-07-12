import './App.css'
import IdCard from './Components/IdCard'
// import Greetings from './Components/Greetings'
import Random from './Components/Random'
import BoxColor from './Components/BoxColor'

function App() {
  return (
    
    <>
      <h1>React Training</h1>

      ITERATION 1
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
      {/* ITERATION 2 */}
      {/* <Greetings
        lang = "de"        
      /> */}

      ITERATION 3
      <Random min={1} max={6} />
      <Random min={1} max={100} />

      ITERATION 4
      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />

    </>
  )
}

export default App
