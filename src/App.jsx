// import logo from './logo.svg';
import './App.css';
import IdCard from './components/card/IdCard';
import Greeting from './components/greetings/Greeting';
import Random from './components/random/Random'
import BoxColor from './components/color/BoxColor'
import CreditCard from './components/creditCard/CreditCard'
import LikeButton from './components/likes/LikeButton'
import ClickablePicture from './components/clickablePicture/ClickablePicture'
import img from './assets/images/maxence.png'
import imgClicked from './assets/images/maxence-glasses.png'
import Dice from './components/dice/Dice'
import Carousel from './components/carousel/Carousel'


// const users = [
//   {
//     "lastName": 'Doe',
//     "firstName": 'John',
//     "gender": 'male',
//     "height": 178,
//     "birth": new Date('1992-07-14').toDateString(),
//     "picture": "https://randomuser.me/api/portraits/men/44.jpg"
//   },
//   {
//     "lastName": 'Delores',
//     "firstName": 'Obrien',
//     "gender": 'female',
//     "height": 172,
//     "birth": new Date("1988-05-11").toDateString(),
//     "picture": "https://randomuser.me/api/portraits/women/44.jpg"
//   },

// ]

function App() {
  return (
    <>

      {/* users.map((user) => <IdCard key={user.firstName} user={user}></IdCard>), */}
      <IdCard
        lastName='Doe'
        firstName='John'
        gender='male'
        height={178}
        birth={new Date("1992-07-14").toDateString()}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />

      <IdCard
        lastName='Delores '
        firstName='Obrien'
        gender='female'
        height={172}
        birth={new Date("1988-05-11").toDateString()}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />

      <Greeting lang="de" >Ludwig</Greeting>
      <Greeting lang="fr">François</Greeting>


      <Random min={1} max={6} />
      <Random min={1} max={100} />


      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />

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

      <LikeButton />
      <LikeButton />

      <ClickablePicture
        img={img}
        imgClicked={imgClicked}
      />
      <Dice />

      <Carousel
        images={[
          'https://randomuser.me/api/portraits/women/1.jpg',
          'https://randomuser.me/api/portraits/men/1.jpg',
          'https://randomuser.me/api/portraits/women/2.jpg',
          'https://randomuser.me/api/portraits/men/2.jpg'
        ]}
      />
    </>



  );
}

export default App;
