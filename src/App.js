import './App.css';
import Idcard from './components/Idcard';
import Greetings from './components/Greetings';
import Random from './components/Random';
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreditCard';
import Rating from './components/Rating';
import DriverCard from './components/DriverCard';
import LikeButton from './components/LikeButton';
import ClickablePicture from './components/ClickablePicture';
import doctor from './assets/images/doctor.png';
import robodoctor from './assets/images/robodoctor.png'
import Dice from './components/Dice';
import Carousel from './components/Carousel';
import NumbersTable from './components/NumbersTable';
import Facebook from './components/Facebook';
import SignupPage from './components/SignupPage';
import RGBColorPicker from './components/RGBColorPicker';




function App() {
  return (
    <div className="App">
    <div>
    <h1>Iteration 1- IdCard</h1>
    <div className='id1'>
    <Idcard
  lastName='Doe'
  firstName='John'
  gender='male'
  height={178}
  birth={new Date("1992-07-14")}
  picture="https://randomuser.me/api/portraits/men/44.jpg"
/>

    </div>
 
<div className='id2'>
<Idcard
  lastName='Delores '
  firstName='Obrien'
  gender='female'
  height={172}
  birth={new Date("1988-05-11")}
  picture="https://randomuser.me/api/portraits/women/44.jpg"
/>

</div>

</div>
<div>
  <h1> Iteration 2-Greeting</h1>
  <div className="greetings">
      <Greetings lang="de">Ludwig</Greetings>
      </div>

      <div className="greetings">
      <Greetings lang="fr">François</Greetings>

     </div>

     <div>
      <h1>Iteration 3- Random</h1>
      <div className="greetings">
      <Random min={1} max={6} />
      </div>
      <div className="greetings">
      <Random min={1} max={100} />
      </div>
     </div>
</div>


<div>
<h1>Iteration 4 - BoxColor</h1>

<div className="boxstyle">

<BoxColor r={255} g={0} b={0} />
<BoxColor r={128} g={255} b={0} />

</div>
    

</div>

<div className = "creditcard">
<h1>Iteration 4- Credit card</h1>
<div className='c1'>
<CreditCard
  type="Visa"
  number="0123456789018845"
  expirationMonth={3}
  expirationYear={2021}
  bank="BNP"
  owner="Maxence Bouret"
  bgColor="#11aa99"
  color="white"
  
/>
</div>
<div className='c2'>
<CreditCard
  type="Master Card"
  number="0123456789010995"
  expirationMonth={3}
  expirationYear={2021}
  bank="N26"
  owner="Maxence Bouret"
  bgColor="#eeeeee"
  color="#222222"
 
 
/>
</div>
<div className='c3'>
<CreditCard
  type="Visa"
  number="0123456789016984"
  expirationMonth={12}
  expirationYear={2019}
  bank="Name of the Bank"
  owner="Firstname Lastname"
  bgColor="#ddbb55"
  color="white"
 
/>
  
</div>

    

    

</div>

<div>
  <h1> Iteration 6 - Rating</h1>
  <div>
<Rating>0</Rating>
<Rating>1.49</Rating>
<Rating>1.5</Rating>
<Rating>3</Rating>
<Rating>4</Rating>
<Rating>5</Rating>
  </div>
</div>

<div>
<div>
  <h1>Iteration 7- DriverCard</h1>
</div>
<div>
<div className='d1'>
<DriverCard
  name="Travis Kalanick"
  rating={4.2}
  img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
  car={{
    model: "Toyota Corolla Altis",
    licensePlate: "CO42DE"
  }}
/>
</div>
<div className='d2'>
<DriverCard
  name="Dara Khosrowshahi"
  rating={4.9}
  img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
  car={{
    model: "Audi A3",
    licensePlate: "BE33ER"
  }}
/>
</div>



</div>
</div>

<div>
<div className="likeButtonContainer"></div>
  <h1>Iteration 8- LikeButton</h1>
  <div className='l1'>
  <LikeButton/>
  <LikeButton/>
  </div>
 </div>

 <div>
  <h1>Iteration 9 - ClickablePicture: Experience the future </h1>
  <ClickablePicture
        img={doctor}
        imgClicked={robodoctor}
      />
 </div>

<div>
<h1>Iteration 10- Random Dice</h1>
 <div className='dice-position'>
 <Dice />
 </div> 
</div>


<div>
  <h1>Iteration 11- Carousel </h1>
  <Carousel
  images={[
    'https://randomuser.me/api/portraits/women/1.jpg',
    'https://randomuser.me/api/portraits/men/1.jpg',
    'https://randomuser.me/api/portraits/women/2.jpg',
    'https://randomuser.me/api/portraits/men/2.jpg'
  ]}
/>
</div>

<div>
<h1> Iteration 12 - NumbersTable</h1>
<NumbersTable limit={12} />
</div>

<div>
<h1> Iteration 13 & 14 - Lists and Keys Facebook</h1>
<Facebook/>
</div>

<div>
  <h1>Iteration 15 - SignupPage</h1>
  <SignupPage/>
</div>

<div>
  <h1>Iteration 16 - RGBColorPicker</h1>
  <RGBColorPicker />
 
</div>
    </div>
  );
}

export default App;
