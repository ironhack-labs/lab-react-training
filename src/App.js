import IdCard from './components/IdCard'
import Greetings from './components/Greetings';
import Random from './components/Random';
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreditCard';
import Rating from './components/Rating';
import LikeButton from './components/LikeButton';
import ClickablePicture from './components/ClickablePicture';
import img from '/Users/mauriciobenaventeibanez/reactTraining/lab-react-training/src/assets/images/maxence.png'
import toggleImg from '/Users/mauriciobenaventeibanez/reactTraining/lab-react-training/src/assets/images/maxence-glasses.png'
import dataJSON from './data/berlin.json'
import './App.css';
import Facebook from './components/Facebook';


function App() {
  const idCard = [ {  
    lastName: "Delores",
    firstName:'Obrien',
    gender: 'female',
    height: 172,
    birth: "1988-05-11",
    picture: "https://randomuser.me/api/portraits/women/44.jpg"}

, { 
    lastName: "Doe",
    firstName:'John',
    gender: 'male',
    height: 178,
    birth: "1992-07-14",
    picture: "https://randomuser.me/api/portraits/men/44.jpg"
} ];
const creditCard = [
  {
    type:"Visa",
    number:"1",
    expirationMonth:3,
    expirationYear:2021,
    bank:"BNP",
    owner:"Maxence Bouret",
    bgColor:"#11aa99",
    color:"white" 
  },
  {
    type:"Master Card",
    number:"2",
    expirationMonth:3,
    expirationYear:2021,
    bank:"BNP",
    owner:"Maxence Bouret",
    bgColor:"#11aa99",
    color:"red" 
  },
  {
    type:"Oro",
    number:"3",
    expirationMonth:3,
    expirationYear:2021,
    bank:"BNP",
    owner:"Maxence Bouret",
    bgColor:"#11aa99",
    color:"red" 
  }
];


    return (
      <div className="App">
          <div>
        {idCard.map ((idCard => {
          return <IdCard idCard={idCard} key={idCard.firstName}/>
        }
        )
        )}
        </div>
         <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>

      <Random min={1} max={5}>Random nº between 1-5: </Random>
      <Random min={10} max={20}>Random nº between 10-20: </Random>
      <BoxColor r={255} g={0} b={0}>rgb(255,0, 0) #ff0000  </BoxColor>
      <BoxColor r={128} g={255} b={0}>rgb(128, 255, 0) #80ff00   </BoxColor>
      <div>
      {creditCard.map((creditCard => {
return <CreditCard creditCard={creditCard} key={creditCard.number}/>

      }))}
      </div>
      <Rating >0</Rating>
<Rating>1</Rating>
<Rating>1.7</Rating>
<Rating>3</Rating>
<Rating>4</Rating>
<Rating>4.7</Rating>
<LikeButton />
<ClickablePicture img={img} toggleImg={toggleImg} />
<Facebook data={dataJSON}/>
      </div>
    );
  
  }
 

export default App;
