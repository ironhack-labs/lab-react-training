import './App.css';
import IdCard from './Components/IdCard/IdCard';
import Greetings from './Components/Greetings/Greetings'
import Random from './Components/Random/Random'
import BoxColor from './Components/BoxColor/BoxColor'
import CreditCard from './Components/CreditCard/CreditCard'
import Rating from './Components/Rating/Rating'
import DriverCard from './Components/DriverCard/DriverCard'
import LikeButton from './Components/LikeButton/LikeButton';
import ClickablePicture from './Components/ClickablePicture/ClickablePicture';
import Dice from './Components/Dice/Dice';
import Carousel from './Components/Carousel/Carousel';
import NumbersTable from './Components/NumbersTable/NumbersTable';
import Facebook from './Components/FaceBook/FaceBook';



function App() {
  return (
    <main>
      <h1>Ejercicio 2</h1>
      <h3>iteracion1</h3>
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

      <hr></hr>

      <h3>iteracion2</h3>


      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>

      <hr></hr>

      <h3>iteracion3</h3>

      <Random min={1} max={6} />
      <Random min={1} max={100} />

      <h3>iteracion4</h3>

      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />

      <hr></hr>
      <h3>iteracion5</h3>

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
      <hr></hr>

      <h3>iteracion6</h3>

      <Rating>0</Rating>
      <Rating>1.49</Rating>
      <Rating>1.5</Rating>
      <Rating>3</Rating>
      <Rating>4</Rating>
      <Rating>5</Rating>


      <hr></hr>

      <h3>iteracion7</h3>


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


      <hr></hr>

      <h3>iteracion8</h3>

      <LikeButton />


      <hr></hr>

      <h3>iteracion9</h3>



      <ClickablePicture
        img='./assets/images/maxence.png'
        imgClicked='../assets/images/maxence-glasses.png'
      />


      <hr></hr>

      <h3>iteracion10</h3>

      <Dice />

      <hr></hr>



      <h3>iteracion11</h3>


      <Carousel
        images={[
          'https://randomuser.me/api/portraits/women/1.jpg',
          'https://randomuser.me/api/portraits/men/1.jpg',
          'https://randomuser.me/api/portraits/women/2.jpg',
          'https://randomuser.me/api/portraits/men/2.jpg'
        ]}
      />

      <hr></hr>



      <h3>iteracion12</h3>

      <NumbersTable limit={12} />


      <hr></hr>



      <h3>iteracion13</h3>

      <Facebook />








    </main>

  );
}

export default App;
