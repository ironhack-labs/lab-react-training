import './App.css';
import img from './assets/images/maxence.png'
import imgClicked from './assets/images/maxence-glasses.png'
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import Random from './components/Random';
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreditCard';
import BasicRating from './components/BasicRating';
import DriverCard from './components/DriverCard';
import LikeButton from './components/LikeButton';
import ClickablePicture from './components/ClickablePicture';
import Dice from './components/Dice';
import Caroussel from './components/Caroussel';
import NumbersTable from './components/NumbersTable';

function App() {
  return (
    <div className="App">

      <NumbersTable limit={12} />

      <Caroussel images={[
        'https://randomuser.me/api/portraits/women/1.jpg',
        'https://randomuser.me/api/portraits/men/1.jpg',
        'https://randomuser.me/api/portraits/women/2.jpg',
        'https://randomuser.me/api/portraits/men/2.jpg'
      ]} />

      <Dice />

      {/* <ClickablePicture
        img={img}
        imgClicked={imgClicked}
      />

      <LikeButton />
      <LikeButton />

      <IdCard
        lastName='Doe'
        firstName='John'
        gender='male'
        height={178}
        birth="1992-07-14"
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />

      <IdCard
        lastName='Delores '
        firstName='Obrien'
        gender='female'
        height={172}
        birth="1988-05-11"
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />

      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>

      <Random min={1} max={6}/>
      <Random min={1} max={100}/>

      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />  

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
            // type="Master Card"
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
            className="augmented-width"
          />
      </div>

     
      <BasicRating className="black-bg">0</BasicRating>
      <BasicRating className="black-bg">1.49</BasicRating>
      <BasicRating className="black-bg">1.9</BasicRating>
      <BasicRating className="black-bg">3</BasicRating>
      <BasicRating className="black-bg">4</BasicRating>
      <BasicRating className="black-bg">5</BasicRating>

      <div className="columns">
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
      </div> */}

    </div >
  );
}

export default App;
