import './App.css';
// import "./CreditCard.css"

import BoxColor from './components/BoxColor';
import ClickablePicture from './components/ClickablePicture';
import CreditCard from './components/CreditCard';
import DriverCard from './components/DriverCard';
import Greetings from './components/Greetings';
import IdCard from './components/IdCard';
import LikeButton from './components/LikeButton';
import Random from './components/Random';
import Rating from './components/Rating';
import NormalPic from './assets/images/maxence.png';
import ClickedPic from './assets/images/maxence-glasses.png'
import Dice  from './components/Dice';
import Carousel from './components/Carousel';

function App() {
  return (
    <div className="App">
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

      {/* Iteration 2 */}
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>

      {/* Iteration 3 */}
      <Random min={1} max={6} />
      <Random min={1} max={100} />

      {/* Iteration 4 */}
      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />

      {/* Iteration 5 */}
      <div className="creditCards">
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
      {/* Iteration 6 */}
      <div>
        <Rating>0</Rating>
        <Rating>1.49</Rating>
        <Rating>1.5</Rating>
        <Rating>3</Rating>
        <Rating>4</Rating>
        <Rating>5</Rating>
      </div>
      {/* Iteration 7 */}
      <div>
        <DriverCard
          name="Travis Kalanick"
          rating={<Rating>4.2</Rating>}
          img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
          car={{
            model: "Toyota Corolla Altis",
            licensePlate: "CO42DE"
          }}
        />

        <DriverCard
          name="Dara Khosrowshahi"
          rating={<Rating>4.9</Rating>}
          img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
          car={{
            model: "Audi A3",
            licensePlate: "BE33ER"
          }}
        />
      </div>
      {/* Iteration 8 */}
      <div className='like-buttons'>
        <LikeButton /><LikeButton />
      </div>
      {/* Iteration 9 */}
      <div>
        <ClickablePicture
          // img='../assets/images/maxence.png'
          // imgClicked='../assets/images/maxence-glasses.png'
          img = {NormalPic}
          imgClicked = {ClickedPic}
        />
      </div>
      {/* Iteration 10  */}
      <div>
        <Dice/>
      </div><br />
      {/* Iteration 11 */}

      <div>
          
      <Carousel 
        images={[
          'data:image/jpeg;base64,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',
          'https://randomuser.me/api/portraits/women/1.jpg',
          'https://randomuser.me/api/portraits/men/1.jpg',
          'https://randomuser.me/api/portraits/women/2.jpg',
          'https://randomuser.me/api/portraits/men/2.jpg',
          'data:image/png;base64,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'
        ]}
        />
        </div>
    </div>
  );
}

export default App;
