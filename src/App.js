import './App.css';
import Greetings from './assets/components/Greetings/Greetings';
import IdCard from './assets/components/IdCard/IdCard';
import Random from './assets/components/Random/Random';
import BoxColor from './assets/components/BoxColor/BoxColor';
import CreditCard from './assets/components/CreditCard/CreditCard';
import Rating from './assets/components/Rating/Rating';
import DriverCard from './assets/components/DriverCard/DriverCard';
import LikeButton from './assets/components/ButtonLike/LikeButton';
import ClickablePicture from './assets/components/ClickablePicture/ClickablePicture';
import img from './assets/images/maxence.png';
import imgClicked from './assets/images/maxence-glasses.png'
import Dice from './assets/components/Dice/Dice';
import Carousel from './assets/components/Carousel/Carousel';


function App() {
  return (
    <div>
    <div>
    <h2>IdCard</h2>
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
    <div>
    <h2>Greetings</h2>
      <Greetings lang="de">Luwding</Greetings>  
      <Greetings lang="fr">François</Greetings>
    </div>
    <div>
    <h2>Random</h2>
      <Random min={1} max={6}/>
      <Random min={1} max={100}/>
    </div>
    <div>
    <h2>BoxColor</h2>
      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />
    </div>
    <h2>CreditCard</h2>
    <div className="container-card-credit">
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
    </div>
    <div>
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
    <div>
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
    <h2>Rating</h2>
    <Rating>0</Rating>
    <Rating>1.49</Rating>
    <Rating>1.5</Rating>
    <Rating>3</Rating>
    <Rating>4</Rating>
    <Rating>5</Rating>
    </div>
    <div>
    <h2>DriverCard</h2>
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
    <div>
    <h2>LikeButton</h2>
    <LikeButton initialLike={0}
    />
    </div>
    <div>
    <h2>ClickablePicture</h2>
    <ClickablePicture
      img={img}
      imgClicked={imgClicked}
    />
    </div>
    <div>
    <h2>Dice</h2>
    <Dice />  
    <div>
    <h2>Carousel</h2>
    <Carousel
      images={[
        'https://randomuser.me/api/portraits/women/1.jpg',
        'https://randomuser.me/api/portraits/men/1.jpg',
        'https://randomuser.me/api/portraits/women/2.jpg',
        'https://randomuser.me/api/portraits/men/2.jpg'
      ]}
    />
    </div>  
    </div>
    </div>
  );
}

export default App;
