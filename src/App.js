import logo from './logo.svg'
import './App.css'
import IdCard from './components/IdCard'
import Greetings from './components/Greeting'
import Random from './components/Random'
import BoxColor from './components/BoxColor'

function App(){

  return (
    <div className="App">

      <IdCard
         lastName= 'Done'
         firstName= 'Jhon'
         gender= 'male'
         height= {178}
         birth= {new Date ("1996-87-12")}
         picture= "https://randomuser.me/api/portraits/men/44.jpg"
    </div>

    
  )
}
  

export default App