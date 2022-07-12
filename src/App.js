import './App.css';
import IdCard from './components/iteration1/IdCard'
import Greetings from './components/iteration2/Greetings'
import Random from './components/iteration3/Random'
import BoxColor from './components/iteration4/BoxColor'
import CreditCard from './components/iteration5/CreditCard'
import Rating from './components/iteration6/Rating'
//import DriverCard from './components/iteration7/DriverCard'
import LikeButton from './components/iteration8/LikeButton'
import ClickablePicture from './components/iteration9/ClickablePicture'
import maxence from './assets/images/maxence.png'
import maxenceGlasses from './assets/images/maxence-glasses.png'
// import Dice from './components/iteration10/Dice';
import Carousel from './components/iteration11/Carousel'
import NumbersTable from './components/iteration12/NumbersTable'
import FaceBook from './components/iteration13/FaceBook'

function App() {
  return (
    <>

      {/* iteracion1 */}

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

      {/* iteration2 */}

      <Greetings lang="es">Pepe</Greetings>
      <Greetings lang="fr">Pepè</Greetings>

      {/* iteration3 */}

      <Random min={1} max={6} />
      <Random min={1} max={100} />

      {/* iteration4 */}

      <div>
        <BoxColor r={255} g={0} b={0} />
        <BoxColor r={128} g={255} b={0} />
      </div>

      {/* iteration5 */}

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

      {/* iteration6 */}

      <Rating>0</Rating>
      <Rating>1.49</Rating>
      <Rating>1.5</Rating>
      <Rating>3</Rating>
      <Rating>4</Rating>
      <Rating>5</Rating>

      {/* iteration7 */}

      {/* <DriverCard
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
      /> */}

      {/* iteration8 */}

      <LikeButton />

      {/* iteration9 */}

      <ClickablePicture
        img={maxence}
        imgClicked={maxenceGlasses}
      />

      {/* iteration10 */}

      {/* <Dice /> */}

      {/* iteration11 */}

      <Carousel
        images={[
          'https://randomuser.me/api/portraits/women/1.jpg',
          'https://randomuser.me/api/portraits/men/1.jpg',
          'https://randomuser.me/api/portraits/women/2.jpg',
          'https://randomuser.me/api/portraits/men/2.jpg'
        ]}
      />

      {/* iteration12 */}

      <NumbersTable limit={12} />

      {/* iteration13/14 */}

      <FaceBook />

    </>
  );
}

export default App;
