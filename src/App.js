import logo from './logo.svg';
import './App.css';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import Random from './components/Random';
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreditCard';
import Rating from './components/Rating';
import LikeButton from './components/LikeButton';
import DriverCard from './components/DriverCard';
import ClickablePicture from './components/ClickablePicture';
import Dice from './components/Dice';
import Carousel from './components/Carousel';
import NumbersTable from './components/NumbersTable';
import RGBColorPicker from './components/RGBColorPicker';
import Facebook from './components/Facebook';
import SignupPage from './components/SignupPage';

function App() {

  const createStars = (numRatings) => {

    const roundedNum = Number(Math.round(numRatings))

    if (roundedNum === 0) {
      return `☆ ☆ ☆ ☆ ☆`
    }
    else if (roundedNum === 1) {
      return `★ ☆ ☆ ☆ ☆`
    }
    else if (roundedNum === 2) {
      return `★ ★ ☆ ☆ ☆`
    }
    else if (roundedNum === 3) {
      return `★ ★ ★ ☆ ☆`
    }
    else if (roundedNum === 4) {
      return `★ ★ ★ ★ ☆`
    }
    else if (roundedNum === 5) {
      return `★ ★ ★ ★ ★`
    }
  }

  return (
    <div className="App container mt-5">

      <br></br>

      <h1 style={{ backgroundColor: 'grey' }}>ITERATION 1</h1><br></br>

      <IdCard
        lastName='Doe'
        firstName='John'
        gender='male'
        height={178}
        birth={new Date("1992-07-14")}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      /> <br></br>

      <IdCard
        lastName='Delores '
        firstName='Obrien'
        gender='female'
        height={172}
        birth={new Date("1988-05-11")}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      /><br></br>

      <h1 style={{ backgroundColor: 'grey' }}>ITERATION 2</h1><br></br>

      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>
      <Greetings lang="en">Lucia</Greetings>
      <Greetings lang="es">Michelle</Greetings><br></br>

      <h1 style={{ backgroundColor: 'grey' }}>ITERATION 3</h1><br></br>

      <Random min={1} max={6} /><br></br>
      <Random min={1} max={100} /><br></br>

      <h1 style={{ backgroundColor: 'grey' }}>ITERATION 4</h1><br></br>

      <BoxColor r={255} g={0} b={0} /><br></br>
      <BoxColor r={128} g={255} b={0} /><br></br>

      <h1 style={{ backgroundColor: 'grey' }}>ITERATION 5</h1><br></br>

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

      <h1 style={{ backgroundColor: 'grey' }}>ITERATION 6</h1><br></br>

      <Rating createStars={createStars}>0</Rating>
      <Rating createStars={createStars}>1.49</Rating>
      <Rating createStars={createStars}>1.5</Rating>
      <Rating createStars={createStars}>3</Rating>
      <Rating createStars={createStars}>4</Rating>
      <Rating createStars={createStars}>5</Rating><br></br>

      <h1 style={{ backgroundColor: 'grey' }}>ITERATION 7</h1><br></br>

      <DriverCard
        name="Travis Kalanick"
        rating={4.2}
        createStars={createStars}
        img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
        car={{
          model: "Toyota Corolla Altis",
          licensePlate: "CO42DE"
        }}
      />

      <DriverCard
        name="Dara Khosrowshahi"
        rating={4.9}
        createStars={createStars}
        img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
        car={{
          model: "Audi A3",
          licensePlate: "BE33ER"
        }}
      /><br></br>

      <h1 style={{ backgroundColor: 'grey' }}>ITERATION 8</h1><br></br>

      <LikeButton id='firstBtn' num='0' />
      <LikeButton id='secondBtn' num='0' /><br></br>

      <h1 style={{ backgroundColor: 'grey' }}>ITERATION 9</h1><br></br>

      <ClickablePicture
        img='maxence.png'
        imgClicked='maxence-glasses.png'
      /><br></br>

      <h1 style={{ backgroundColor: 'grey' }}>ITERATION 10</h1><br></br>

      <Dice img='../assets/images/dice-empty.png' /><br></br>

      <h1 style={{ backgroundColor: 'grey' }}>ITERATION 11</h1><br></br>

      <Carousel
        num='0'
        images={[
          'https://randomuser.me/api/portraits/women/1.jpg',
          'https://randomuser.me/api/portraits/men/1.jpg',
          'https://randomuser.me/api/portraits/women/2.jpg',
          'https://randomuser.me/api/portraits/men/2.jpg'
        ]}
      /><br></br>

      <h1 style={{ backgroundColor: 'grey' }}>ITERATION 12</h1><br></br>

      <NumbersTable limit='12' /><br></br>

      <h1 style={{ backgroundColor: 'grey' }}>ITERATION 13 & 14</h1><br></br>

      <Facebook /><br></br>

      <h1 style={{ backgroundColor: 'grey' }}>ITERATION 15</h1><br></br>

      <SignupPage /><br></br>

      <h1 style={{ backgroundColor: 'grey' }}>ITERATION 16</h1><br></br>

      <RGBColorPicker /><br></br>

    </div>
  );
}

export default App;