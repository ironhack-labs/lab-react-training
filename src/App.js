import './App.css';
import picture from './assets/images/maxence.png'
import pictureGlasses from './assets/images/maxence-glasses.png'
import IdCard from './components/IdCard/IdCard'
import Greetings from './components/Greetings/Greetings'
import Random from './components/Random/Random'
import BoxColor from './components/BoxColor/BoxColor'
import CreditCard from './components/CreditCard/CreditCard'
import Rating from './components/Rating/Rating'
import DriverCard from './components/DriverCard/DriverCard'
import LikeButton from './components/LikeButton/LikeButton'
import ClickablePicture from './components/ClickablePicture/ClickablePicture'
import Dice from './components/Dice/Dice'
import Carousel from './components/Carousel/Carousel'




function App() {
  return (
    <>
      <IdCard
        lastName='Doe'
        firstName='John'
        gender='male'
        height={178}
        birth={(new Date("1992-07-14")).toDateString()}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />

      <IdCard
        lastName='Delores '
        firstName='Obrien'
        gender='female'
        height={172}
        birth={(new Date("1988-05-11")).toDateString()}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />

      <Greetings
        lang="de"
        children="Ludwig"
      />

      <Greetings
        lang="fr"
        children="François"
      />

      <Random
        min={1}
        max={6}
      />

      <Random
        min={1}
        max={100}
      />

      <BoxColor
        r={255}
        g={0}
        b={0}
      />

      <BoxColor
        r={128}
        g={255}
        b={0}
      />

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

      <br />
      <br />

      <Rating
        children={0}
      />

      <br />

      <Rating
        children={1.49}
      />

      <br />

      <Rating
        children={1.5}
      />

      <br />

      <Rating
        children={3}
      />

      <br />

      <Rating
        children={4}
      />

      <br />

      <Rating
        children={5}
      />

      <br />
      <br />
      <br />

      <DriverCard
        name="Travis Kalanick"
        rating={4.2}
        img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
        car={{
          model: "Toyota Corolla Altis",
          licensePlate: "CO42DE"
        }}
      />

      <br />

      <DriverCard
        name="Dara Khosrowshahi"
        rating={4.9}
        img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
        car={{
          model: "Audi A3",
          licensePlate: "BE33ER"
        }}
      />

      <br />
      <br />

      <LikeButton />

      <LikeButton />
      
      <br />
      <br />

      <ClickablePicture
        img={picture}
        imgClicked={pictureGlasses}
      />

      <br />
      <br />
      <br />
      <br />

      <Dice />

      <br />
      <br />
      <br />
      <br />

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
