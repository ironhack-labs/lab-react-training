
import './App.css';
import IdCard from './data/components/IdCard';
import Greetings from './data/components/Greetings';
import Random from './data/components/Random';
import BoxColor from './data/components/BoxColor';

import maxence from './assets/images/maxence.png';
import maxenceGlasses from './assets/images/maxenceGlasses.png';
import LikeButton from './data/components/LikeButton';
import ClickablePicture from './data/components/ClickablePicture';


const userListArray = [
  {
    lastName: 'Doe',
    firstName: 'John',
    gender: 'male',
    height: 178,
    birth: new Date("1992-07-14"),
    picture: "https://randomuser.me/api/portraits/men/44.jpg"
  },
  {
    lastName: 'Delores',
    firstName: 'Obrien',
    gender: 'female',
    height: 172,
    birth: new Date("1988-05-11"),
    picture: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    lastName: 'I am not',
    firstName: 'Dog',
    gender: 'female',
    height: 254,
    birth: new Date("1998-07-23"),
    picture: "https://cdn.serif.com/affinity/img/home/0522/photo-card-090520221343--lg@2x.jpg"
  },
  {
    lastName: 'Hello',
    firstName: '!',
    gender: 'male',
    height: 387,
    birth: new Date("1983-11-01"),
    picture: "https://s.abcnews.com/images/International/MChanga_1624536553868_hpMain_4x5_992.jpg"
  }

]

const task2 = [
  {
    language: 'de',
    name: 'Ludwig'
  },
  {
    language: 'fr',
    name: 'François'
  },
  {
    language: 'zh',
    name: '小明'
  },
  {
    language: 'es',
    name: 'Antonio'
  }
]

const task3 = [
  {
    min: 1,
    max: 6
  },
  {
    min: 1,
    max: 100
  }
]

const task4 = [
  {
    r: 225,
    g: 0,
    b: 0,
  },
  {
    r: 128,
    g: 225,
    b: 0,
  }
]



function App() {


  const userInfo = userListArray.map(function (user) {
    return <IdCard theUser={user} />
  })

  const sayHello = task2.map(function (arr) {
    return <Greetings theGreeting={arr} />
  })

  const getRandom = task3.map(function (arr) {
    return <Random theRandom={arr} />
  })

  const getBoxColor = task4.map(function (arr) {
    return <BoxColor r={arr.r} g={arr.g} b={arr.b} />
  })






  return (
    <div className="App">

      <div><h1>IdCard</h1>
      </div>
      <div class="task1">
        {userInfo}
        {/* <IdCard theUser={userListArray[0]} /> */}
      </div>

      <div><h1>Greetings</h1>
      </div>
      <div class="task2">
        {sayHello}
        {/* <Greetings language="de">Ludwig</Greetings>
        <Greetings language="fr">François</Greetings> */}
      </div>

      <div><h1>Random</h1>
      </div>
      <div class="task3">
        {getRandom}
        {/* <Random min={1} max={6} />
        <Random min={1} max={100} /> */}
      </div>

      <div><h1>BoxColor</h1>
      </div>
      <div>
        {getBoxColor}
      </div>

      {/* Iteration 8 | State: LikeButton */}
      <div><h1>State: LikeButton</h1>
      </div>
      <div>
        <LikeButton /><LikeButton />
      </div>

      {/* Iteration 9 | State: ClickablePicture */}
      <div><h1>State: ClickablePicture</h1>
      </div>
      <div>
        <ClickablePicture img={maxence} imgClicked={maxenceGlasses} />



      </div>

    </div >
  );
}

export default App;
