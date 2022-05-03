import './App.css';
import BoxColor from './BoxColor/BoxColor';
import CreditCard from './CreditCard/CreditCard';
import DriverCard from './DriverLicense/DriverCard';
import Greetings from './Greetings/Greetings';
import IdCard from './IdCard/IdCard';
import Random from './Random/Random';
import Rating from './Rating/Rating';
import Counter from './Counter/Counter';
import ClickablePicture from './ClickablePicture/ClickablePicture';
import Dice from './Dice/Dice';
import Carousel from './Carousel/Carousel';
import NumbersTable from './NumbersTable/NumbersTable';
import Facebook from './Facebook/Facebook';


function App() {
  return (

  <main>
    <div >
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

    </div>

    <hr/>

    <div>

    <Greetings lang='de'>Ludwing</Greetings> 
    
    <Greetings lang='fr'>François</Greetings>
  
    </div>

    <hr/>

    <div>

    <Random min={1} max={6}/>

    <Random min={1} max={100}/>

    </div>

    <hr/>

    <div>

    <BoxColor r={255} g={0} b={0} />

    <BoxColor r={128} g={255} b={0} />

    </div>

    
    <hr/>

    <div>

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

    <hr/>

    <div>

      <Rating>0</Rating>
      <Rating>1.49</Rating>
      <Rating>1.5</Rating>
      <Rating>3</Rating>
      <Rating>4</Rating>
      <Rating>5</Rating>

    </div>

    <hr/>

    <div>

      <DriverCard
        name="Travis Kalanick"
        rating={4.2}
        img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
        car={{
          model: "Toyota Corolla Altis",
          licensePlate: "CO42DE"
        }}
      />

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
    

    <hr/>

    <div>
    <h3>IT.8 _ COUNTER</h3>

      <Counter />

    </div>

    <hr/>

    <div>
    <h3>IT.9 _ CLICKABLE PICTURE</h3>

    <ClickablePicture
      img='../assets/images/maxence.png'
      imgClicked='../assets/images/maxence-glasses.png'
    />

    </div>

    <hr/>

    <div>
    <h3>IT.10 _ DICE</h3>

      <Dice />

    </div>
    <div>
    <h3>IT.11 _ CAROUSEL</h3>

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
    <h3>IT.12 _ NUMBERS TABLE</h3>

    <NumbersTable limit={12} />

    </div>
    <div>

    <h3>IT.13 and 14 _ FACEBOOK </h3>

    <Facebook />
    
    </div>
  

  </main>



  );
}




export default App;
