// App.js

import './App.css';
import BoxColor from './components/Main/BoxColor';
import Greetings from './components/Main/Greetings';
import IdCard from './components/Main/IdCard';
import Random from './components/Main/Random';


const idCards = [{
  lastName:'Doe',
  firstName:'John',
  gender:'male',
  height: 178,
  birth: new Date("1992-07-14"),
  picture:"https://randomuser.me/api/portraits/men/44.jpg",
},
{
  lastName:'Delores ',
  firstName:'Obrien',
  gender:'female',
  height:172,
  birth:new Date("1988-05-11"),
  picture:"https://randomuser.me/api/portraits/women/44.jpg"
}]

const languages = ["de","en","es","fr"]
const children = ["Alan","Alexis","Alan"]

const min = 0;
const max = 7;

const r = Math.floor(Math.random() * (255 - 0) + 0)
const g = Math.floor(Math.random() * (255 - 0) + 0)
const b = Math.floor(Math.random() * (255 - 0) + 0)

const r2 = Math.floor(Math.random() * (255 - 0) + 0)
const g2 = Math.floor(Math.random() * (255 - 0) + 0)
const b2 = Math.floor(Math.random() * (255 - 0) + 0)


function App() {
  return (
    <div className="App">

    {
      idCards.map((idCard)=>{
        return <IdCard idInfo={idCard} />
      })
    }

    {
      languages.map((language)=>{
        return children.map((child)=>{
          return <Greetings lang={language} children={child} />
        })
      })
    }

    <Random min={min} max={max} />
    <BoxColor r={r} g={g} b={b} />
    <BoxColor r={r2} g={g2} b={b2} />

    </div>
  );
}

export default App;