import './App.css';
import IdCard from "./components/IdCard";
import Greetings from "./components/Greetings" ;
import Random from "./components/Random";
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreditCard';
import Rating from './components/Rating';




function App() {
return (                               
<div className="App">
  <h3>IdCard</h3>  {/*Interation 1 - IdCard*/}
      <IdCard
  lastName='Doe'
  firstName='John'
  gender='male'
  height={178}
  birth={"1992-07-14"}
  picture="https://randomuser.me/api/portraits/men/44.jpg"
/>

<IdCard
  lastName='Delores '
  firstName='Obrien'
  gender='female'
  height={172}
  birth={"1988-05-11"}
  picture="https://randomuser.me/api/portraits/women/44.jpg"
/>
<hr />
<br />

  <h3>Greetings</h3> {/*Interation 2 - Greetings*/}
<div>
<Greetings lang="de">Ludwig</Greetings>
<Greetings lang="fr">François</Greetings> 
</div>
<hr />
<br />

  <h3>Random</h3>  {/* Interation 3 Random */}
<div>
<Random min={1} max={6}/>
<Random min={1} max={100}/>
</div>
<hr />
<br />


  <h3>BoxColor</h3> {/* Iteration 4 - BoxColor */}
<div>
<BoxColor r={255} g={0} b={0} class="border border-dark w-25 d-flex">rgb(255,0,0)</BoxColor>
<BoxColor r={128} g={255} b={0} class="border border-dark w-25">rgb(128,255,0)</BoxColor>
</div>

<hr />
<br />

<div>
  <h3>Credit Card</h3> {/* Iteration 5 - CreditCard */ }
  <div className="creditcard-container">
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

        <CreditCard
          type="Mastercard"
          number="0123456789010995"
          expirationMonth={3}
          expirationYear={2021}
          bank="N26"
          owner="Maxence Bouret"
          bgColor="#eeeeee"
          color="#222222"
        />

        <CreditCard
          type="Visa"
          number="0123456789016984"
          expirationMonth={12}
          expirationYear={2019}
          bank="C6"
          owner="Firstname Lastname"
          bgColor="#ddbb55"
          color="white"
        />
      </div>
      <hr />
      <br />

      
        <h3>Rating</h3> {/* Iteration 6 - Rating */ }
      <div className="rating-container">  
        <Rating>0</Rating>
        <Rating>1.49</Rating>
        <Rating>1.5</Rating>
        <Rating>3</Rating>
        <Rating>4</Rating>
        <Rating>5</Rating>
      </div>
</div>

</div>

);
}



export default App;
