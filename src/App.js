import './App.css';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import Random from './components/Random';
import BoxColor from './components/BoxColor/BoxColor';
import CreditCard from './components/CreditCard/CreditCard'
import Rating from './components/Rating'
import LikeButton from './components/LikeButton';
import ClickablePicture from './components/ClickablePicture';
import maxence from './assets/images/maxence.png';
import maxenceGlasses from './assets/images/maxence-glasses.png';
/* import Dice from './components/Dice'; */
import Carousel from './components/Carousel';
import NumbersTable from './components/NumbersTable'

function App() {
  return (
    <>

      <h1>ITERACIÓN 1</h1>

      <IdCard
        lastName={"Sanchez"}
        firstName={"Rafa"}
        gender={"male"}
        height={172}
        birth={new Date("1990-12-27")}
        picture={"https://randomuser.me/api/portraits/men/44.jpg"}
      />

      <IdCard
        lastName='Ramírez'
        firstName='Hernesto'
        gender='male'
        height={186}
        birth={new Date("1993-01-30")}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />

      <IdCard
        lastName='Sobrinos'
        firstName='Víctor'
        gender='female'
        height={192}
        birth={new Date("1996-07-01")}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />

      <IdCard
        lastName='Rodriguez'
        firstName='Manuel'
        gender='male'
        height={170}
        birth={new Date("1991-03-17")}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />

      <IdCard
        lastName='Sanchez'
        firstName='Luisa'
        gender='female'
        height={167}
        birth={new Date("1992-10-17")}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />

      <IdCard
        lastName='Paula'
        firstName='Benitez'
        gender='female'
        height={169}
        birth={new Date("1990-01-17")}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />

      <h1>ITERACIÓN 2</h1>

      {/* Children */}
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>
      <Greetings lang="en">Steven</Greetings>
      <Greetings lang="es">Manolo</Greetings>


      <h1>ITERACIÓN 3</h1>

      Random value between 1 and 6 = <Random min={1} max={6} />
      Random value between 1 and 100 = <Random min={1} max={100} />


      <h1>ITERACIÓN 4</h1>

      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />


      <h1>ITERACIÓN 5</h1>

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

      <h1>ITERACIÓN 6</h1>

      <Rating>0</Rating>
      <Rating>1.49</Rating>
      <Rating>1.5</Rating>
      <Rating>3</Rating>
      <Rating>4</Rating>
      <Rating>5</Rating>

      <h1>ITERACIÓN 8</h1>

      <LikeButton />
      <LikeButton />

      <h1>ITERACIÓN 9</h1>

      <ClickablePicture
        img={maxence}
        imgClicked={maxenceGlasses}
      />

      <h1>ITERACIÓN 10</h1>

      {/* <Dice /> */}

      <h1>ITERACIÓN 11</h1>

      <Carousel
        images={[
          'https://randomuser.me/api/portraits/women/1.jpg',
          'https://randomuser.me/api/portraits/men/1.jpg',
          'https://randomuser.me/api/portraits/women/2.jpg',
          'https://randomuser.me/api/portraits/men/2.jpg'
        ]}
      />

      <h1>ITERACIÓN 11</h1>

      <NumbersTable limit={12} />

    </>

  );
}

export default App;
