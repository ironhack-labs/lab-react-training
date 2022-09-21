import './App.css';
import IdCard from './components/IdCard/IdCard';
import Greetings from './components/Greetings/Greetings';
import Random from './components/Random/Random';
import BoxColor from './components/BoxColor/BoxColor';
import CreditCard from './components/CreditCard/CreditCard';
import DriverCard from './components/DriverCard/DriverCard';
import LikeButton from './components/LikeButton/LikeButton';
import image1 from './assets/images/maxence.png';
import image2 from './assets/images/maxence-glasses.png';
import ClickablePic from './components/ClickablePic/ClickablePic';
import Dice from './components/Dice/Dice';
import Carousel from './components/Carousel/Carousel';
import NumbersTable from './components/NumbersTable/NumbersTable';
import profiles from './data/berlin.json';
import Facebook from './components/Facebook/Facebook';

const carouselArr = [
  'https://randomuser.me/api/portraits/women/1.jpg',
  'https://randomuser.me/api/portraits/men/1.jpg',
  'https://randomuser.me/api/portraits/women/2.jpg',
  'https://randomuser.me/api/portraits/men/2.jpg'
]

function App() {
  return (

    <div className="app-container">
      <IdCard 
        lastName="Simpson" 
        firstName="Homer" 
        gender='Male'
        height={178}
        birth={(new Date("1992-07-14")).toString().slice(0, 15)}
        picture="https://randomuser.me/api/portraits/men/44.jpg" 
      />
      <IdCard
        lastName='Delores '
        firstName='Obrien'
        gender='Female'
        height={172}
        birth={(new Date("1988-05-11")).toString().slice(0, 15)}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />

      <div className='app-greetings'>
        <Greetings lang='fr'>Marina</Greetings>
        <Greetings lang='de'>Jesus</Greetings>
        <Greetings lang='en'>Amanda</Greetings>
        <Greetings lang='es'>José</Greetings>
      </div>

      <div className='app-random'>
        <Random minN={7} maxN={9}/>
        <Random minN={0} maxN={100}/>
      </div>

      <div className='app-boxcolor'>
        <BoxColor r={220} g={158} b={183}/>
      </div>

      <div className='app-creditcard'>
        <CreditCard
          type="Visa"
          number="0123456789018845"
          expM={3}
          expY={2021}
          bank="BNP"
          owner="Maxence Bouret"
          bgColor="#11aa99"
          color="white" 
        /> 
        <CreditCard
          type="Master Card"
          number="0123456789010995"
          expM={3}
          expY={2021}
          bank="N26"
          owner="Maxence Bouret"
          bgColor="#eeeeee"
          color="#222222"
        />
      </div>

      <div className="app-drivercard">
        <DriverCard
          name="Dara Khosrowshahi"
          rating={4.9}
          img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
          car={{
            model: "Audi A3",
            licensePlate: "BE33ER"
          }}
        />
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

      <div className='app-likeBtn'>
          <LikeButton />
      </div>

      <div className='app-pic'>
        <ClickablePic 
        img={image1}
        imgClicked={image2}
        />
      </div>

      <div className='app-dice'>
          <Dice />
      </div>

      <div className='app-carousel'>
          <Carousel images={carouselArr} />
      </div>

      <div className='app-ntable'>
        <NumbersTable limit={8} />
      </div>

      <div className='app-facebook'>
        {
          profiles.map(({ firstName, lastName, country, img, isStudent}) => {
            return <Facebook firstName={firstName} lastName={lastName} country={country} img={img} isStudent={isStudent} key={img}/>
          })
        }
      </div>
      
    </div>
  );
}

export default App;
