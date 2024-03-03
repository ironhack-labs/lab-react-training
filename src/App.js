
import './App.css';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import Random from './components/Random';
import BoxColor from './components/BoxColor';
import './index.css';
import CreditCard from './components/CreditCard';

function App() {
  return (
    <div className="lists">
    
   <div> <IdCard 
 lastName='Doe'
firstName='John'
gender='male'
height={1.72}
birth={new Date("1992-07-14")}
picture="https://randomuser.me/api/portraits/men/44.jpg" />

<IdCard 
    lastName='Delores '
  firstName='Obrien'
  gender='female'
  height={172}
  birth={new Date("1988-05-11")}
  picture="https://randomuser.me/api/portraits/women/44.jpg" />
  </div>
  <div>
  <Greetings lang="de">Ludwig</Greetings>
<Greetings lang="fr">François</Greetings>

</div>
<div>
<Random min={1} max={6}/>
<Random min={1} max={100}/>
</div>
<div className="Box-color"/>
<div className="Box-color1"> <BoxColor r= {255} g = {0} b= {0} /> </div><br></br>
<div className="Box-color2"> <BoxColor r= {128} g = {255} b= {0} /> </div>
<div>
<CreditCard
  type='Visa'
  number='0123456789018845'
  expirationMonth={3}
  expirationYear={2021}
  bank='BNP'
  owner="Maxence Bouret"
  bgColor='#11aa99'
  color='white' 
/>
    
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

    
  );
}

export default App;
