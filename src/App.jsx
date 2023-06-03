
import './App.css';
import IdCard from './components/IdCard.jsx'
import Greetings from './components/Greetings.jsx'
import Random from './components/Random.jsx'
import BoxColor from './components/BoxColor.jsx'
import CreditCard from './components/CreditCard.jsx'
import Rating from './components/Rating.jsx'
import DriverCard from './components/DriverCard.jsx'
import LikeButton from './components/LikeButton.jsx'
import maxence from './assets/images/maxence.png'
import maxenceGlasses from './assets/images/maxence-glasses.png'
import ClickablePicture from './components/ClickablePicture.jsx'
import Dice from './components/Dice.jsx'
import Carousel from './components/Carousel.jsx'
import NumbersTable from './components/NumbersTable.jsx'
import FaceBook from './components/FaceBook.jsx'
import SignupPage from './components/SignupPage.jsx'
import RGBColorPicker from './components/RGBColorPicker.jsx'




function App() {
  return (
    <div className="App">
      {/* iteration1 */}
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
      {/* iteration2 */}
      <div>
        <h2>Greetings</h2>
          <Greetings lang="de"> Ludwig</Greetings>
          <Greetings lang="fr"> François</Greetings>
          <Greetings lang="en"> Taylor</Greetings>
          <Greetings lang="es"> Maricarmen</Greetings>
      </div>
      {/* iteration3 */}
      <div>
        <h2>Random</h2>
        <Random min={1} max={6} />
        <Random min={1} max={100} />
      </div>
      {/* iteration4 */}
      <div>
        <h2>BoxColor</h2>
        <BoxColor r={255} g={0} b={0} />
        <BoxColor r={128} g={255} b={0} />
      </div>
      {/* iteration5 */}
      <div>
        <h2>CreditCard</h2>
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
      {/* iteration6 */}
      <div>
        <h2>Rating</h2>
        <Rating>0</Rating>
        <Rating>1.49</Rating>
        <Rating>1.5</Rating>
        <Rating>3</Rating>
        <Rating>4</Rating>
        <Rating>5</Rating>
      </div>
      {/* iteration7 */}
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
      {/* iteration8 */}
      <div>
        <h2>LikeButton</h2>
        <LikeButton />
      </div>
      {/* iteration9 */}
      <div>
        <h2>ClickablePicture</h2>
        <ClickablePicture
          img={maxence}
          imgClicked={maxenceGlasses}
        />
      </div>
      {/* iteration10 */}
      <div>
        <h2>Dice</h2>
        <Dice />
      </div>
      {/* iteration 11 */}
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
      {/* iteration 12 */}
      <div>
        <h2>NumbersTable</h2>
        <NumbersTable limit={40} />
      </div>
      {/* iteration 13 & 14 */}
      <div>
        <h2>FaceBook</h2>
        <FaceBook />
      </div>
      {/* iteration 15 */}
      <div>
        <h2>SignupPage</h2>
        <SignupPage />
      </div>
      {/* iteration 16 */}
      <div>
        <h2>RGBColorPicker</h2>
        <RGBColorPicker/>
      </div>

    </div>
  );
}

export default App;
