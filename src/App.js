import './App.css';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import Random from './components/Random';
import Boxcolor from './components/Boxcolor';
import CreditCard from './components/CreditCard';
import Rating from './components/Rating';
import DriverCard from './components/DriverCard';
import LikeButton from "./components/LikeButton"
import ClickablePicture from "./components/ClickablePicture"
import Dice from "./components/Dice"
import Carousel from "./components/Carousel"
import NumbersTable from "./components/NumbersTable"
import FaceBook from "./components/FaceBook"
import profiles from "./data/berlin.json"

function App() {
  const cardArray = [ {  
    lastName: "Delores",
    firstName:'Obrien',
    gender: 'female',
    height: 172,
    birth: Date("1988-05-11"),
    picture: "https://randomuser.me/api/portraits/women/44.jpg"}

, { 
    lastName: "Doe",
    firstName:'John',
    gender: 'male',
    height: 178,
    birth: Date("1992-07-14"),
    picture: "https://randomuser.me/api/portraits/men/44.jpg"
} ];

  
  return (
    <div className='App'>
      <div>
        {cardArray.map (card => {
          return <IdCard eachCard={card}/>
        }
        )}
      </div>
      <div>
        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="fr">François</Greetings>
      </div>
      <div>
        <Random min={1} max={6}/>
        <Random min={1} max={100}/>
      </div>
      <div>
        <Boxcolor r={255} g={0} b={0} />
        <Boxcolor r={128} g={255} b={0} />
      </div>
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
      <div>
          <Rating>0</Rating>
          <Rating>1.49</Rating>
          <Rating>1.5</Rating>
          <Rating>3</Rating>
          <Rating>4</Rating>
          <Rating>5</Rating>
      </div>
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

            {/* Iteration 8 - Like Button */}
            <LikeButton />

            {/* Iteration 9 - Clickable image */}
            <ClickablePicture
                img='https://www.thesprucepets.com/thmb/3ABKoAPm0Hu4PcWsDH1giawq7ck=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/chinese-dog-breeds-4797219-hero-2a1e9c5ed2c54d00aef75b05c5db399c.jpg'
                imgClicked='https://www.akc.org/wp-content/uploads/2018/05/samoyed-mother-dog-with-puppy-outdoors.jpg'
              />

            {/* Iteration 10 - Dice */}
            <Dice />

            {/* Iteration 11 - Carousel */}
            <Carousel
              images={[
                'https://randomuser.me/api/portraits/women/1.jpg',
                'https://randomuser.me/api/portraits/men/1.jpg',
                'https://randomuser.me/api/portraits/women/2.jpg',
                'https://randomuser.me/api/portraits/men/2.jpg'
              ]}
            />
            {/* Iteration 12 - NumbersTable */}
            <NumbersTable limit={12} />

            {/* Iteration 13 - Facebook */}
            {profiles.map(elem => {
              return  <FaceBook profile={elem}/>})}
        
  
            
      </div>
      </div>
  );
}

export default App;
