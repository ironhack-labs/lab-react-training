import './App.css'
import IdCard from './components/IdCard/IdCard'
import Greetings from './components/Greetings/land'
import Random from './components/Random/Random'
import BoxColor from './components/Box-color/Box-color'
// import CreditCard from './components/CreditCard/CreditCard'
import Rating from './components/Rating/Rating'
import DriverCard from './components/DriverCar/DriverCar'
import LikeButton from './components/LikeButton/LikeButton'
import ClickablePicture from './components/ClickablePicture/ClickablePicture'
import Carousel from './components/Carousel/Carousel'
import NumbersTable from './components/NumbersTablet/NumbersTablet'
import FaceBook from './components/FaceBook/FaceBook'


import maxence from './assets/images/maxence.png'
import maxenceGlasses from './assets/images/maxence-glasses.png'

function App() {
  return (
    <div className="App">

      <h1>Iteración 1</h1>
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


      <h1>Iteración 2</h1>
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>

      <h1>Iteración 3</h1>
      <Random min={1} max={6} />
      <Random min={1} max={100} />

      <h1>Iteración 4</h1>
      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />

      {/* <h1>Iteración 5</h1>
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
      /> */}

      <h1>Iteración 6</h1>
      <Rating rating="☆☆☆☆☆">0</Rating>
      <Rating rating="★☆☆☆☆">1.49</Rating>
      <Rating rating="★★☆☆☆">1.5</Rating>
      <Rating rating="★★★☆☆">3</Rating>
      <Rating rating="★★★★☆">4</Rating>
      <Rating rating="★★★★★">5</Rating>

      <h1>Iteración 7</h1>
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

      <h1>Iteración 8</h1>
      <LikeButton />
      <LikeButton />

      <h1>Iteración 9</h1>
      <ClickablePicture
        img={maxence}
        imgClicked={maxenceGlasses}
      />

      <h1>Iteración 10</h1>
      <h1>----------</h1>

      <h1>Iteración 11</h1>
      <Carousel
        images={[
          'https://randomuser.me/api/portraits/women/1.jpg',
          'https://randomuser.me/api/portraits/men/1.jpg',
          'https://randomuser.me/api/portraits/women/2.jpg',
          'https://randomuser.me/api/portraits/men/2.jpg'
        ]}
      />

      <h1>Iteración 12</h1>
      <NumbersTable limit={12} />

      <h1>Iteracion 13</h1>
      <FaceBook />
    </div>



  )
}

export default App
