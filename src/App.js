
import './App.css';
import IdCard from './data/components/IdCard';
import Greetings from './data/components/Greetings';
import Random from './data/components/Random';
import BoxColor from './data/components/BoxColor';
import CreditCard from './data/components/CreditCard';
import Rating from './data/components/Rating';

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





  return (
    <div className="App">

      <div><h1>IdCard</h1>
      </div>
      <div className="task1">
        {userInfo}
        {/* <IdCard theUser={userListArray[0]} /> */}
      </div>

      <div><h1>Greetings</h1>
      </div>
      <div className="task2">
        {sayHello}
        {/* <Greetings language="de">Ludwig</Greetings>
        <Greetings language="fr">François</Greetings> */}
      </div>

      <div><h1>Random</h1>
      </div>
      <div className="task3">
        {getRandom}
        {/* <Random min={1} max={6} />
        <Random min={1} max={100} /> */}
      </div>

      <div><h1>BoxColor</h1>
      </div>
      <div className='box-color'>
        <BoxColor r={255} g={0} b={0} />
        <BoxColor r={128} g={255} b={0} />
      </div>

      <div><h1>CreditCard</h1>
      </div>
      <div className='all-cards'>


        <CreditCard
          type="Visa"
          number="0123456789018843"
          expirationMonth={8}
          expirationYear={2021}
          bank="BNP"
          owner="Ahiyui Bouret"
          bgColor="#11aa99"
          color="white"
        />

        <CreditCard
          type="Master Card"
          number="0123456789013655"
          expirationMonth={3}
          expirationYear={2023}
          bank="N26"
          owner="Maxence Oilerio"
          bgColor="pink"
          color="gray"
        />

        <CreditCard
          type="Visa"
          number="23211256789016984"
          expirationMonth={12}
          expirationYear={2025}
          bank="Deutsch Bank"
          owner="I am the Owner"
          bgColor="#ddbb55"
          color="white"
        />
      </div>

      <div><h1>Rating</h1>
      </div>
      <div className='all-rating'>
        <Rating>0</Rating>
        <Rating>1.49</Rating>
        <Rating>1.5</Rating>
        <Rating>3</Rating>
        <Rating>4</Rating>
        <Rating>5</Rating>

        {/* <Rating num={0} />
        <Rating num={1.49} />
        <Rating num={1.5} />
        <Rating num={4} />
        <Rating num={5} />
        <Rating num={3} /> */}


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
