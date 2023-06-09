import './App.css';
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreditCard';
import Greetings from './components/Greetings';
import IdCard from './components/IdCard';
import Random from './components/Random';
import Rating from './components/Rating';
import DriverCard from './components/DriverCard';
import { useState } from 'react';
import LikeButton from './components/LikeButton';
import ClickablePicture from './components/ClickablePicture';
import Dice from './components/Dice';
import Carousel from './components/Carousel';

function App() {
  const [likeCounter, setLikeCounter] = useState(0);
  const [likeCounter2, setLikeCounter2] = useState(0);

  return (
    <div className="App">
      <h1>Hello bello</h1>
      <div className="flex-container">
        <IdCard
          lastName="Doe"
          firstName="John"
          gender="male"
          height="178"
          birth="1992-07-14"
          picture="https://randomuser.me/api/portraits/men/44.jpg"
        />

        <IdCard
          lastName="Delores "
          firstName="Obrien"
          gender="female"
          height="172"
          birth="1988-05-11"
          picture="https://randomuser.me/api/portraits/women/44.jpg"
        />
      </div>
      <div>
        <Greetings lang="en" children="Ludwig" />
        <Greetings lang="fr" children="François" />
        <Random min={6} max={30} />
        <Random min={1} max={100} />
        <BoxColor r={255} g={0} b={0} />
        <BoxColor r={128} g={255} b={0} />
        <div className="all-cards-box">
          <CreditCard
            type={'Visa'}
            number={'0123456789018845'}
            expirationMonth={3}
            expirationYear={2021}
            bank={'BNP'}
            owner={'Maxence Bouret'}
            bgColor={'#11aa99'}
            color={'white'}
          />

          <CreditCard
            type={'Master Card'}
            number={'0123456789010995'}
            expirationMonth={3}
            expirationYear={2021}
            bank={'N26'}
            owner={'Maxence Bouret'}
            bgColor={'#eeeeee'}
            color={'#222222'}
          />

          <CreditCard
            type={'Visa'}
            number={'0123456789016984'}
            expirationMonth={12}
            expirationYear={2019}
            bank={'Name of the Bank'}
            owner={'Firstname Lastname'}
            bgColor={'#ddbb55'}
            color={'white'}
          />
        </div>
        <div className="all-rating">
          <Rating children={0} />
          <Rating children={1.49} />
          <Rating children={1.5} />
          <Rating children={3} />
          <Rating children={4} />
          <Rating children={5} />
        </div>
        <div className="all-driverCard">
          <DriverCard
            name="Travis Kalanick"
            rating={4.2}
            img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
            car={{
              model: 'Toyota Corolla Altis',
              licensePlate: 'CO42DE',
            }}
          />

          <DriverCard
            name="Dara Khosrowshahi"
            rating={4.9}
            img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
            car={{
              model: 'Audi A3',
              licensePlate: 'BE33ER',
            }}
          />
        </div>
        <div className="all-likeBtn">
          <LikeButton
            likeCounter={likeCounter}
            setLikeCounter={setLikeCounter}
          />
          <LikeButton
            likeCounter={likeCounter2}
            setLikeCounter={setLikeCounter2}
          />
        </div>
        <ClickablePicture
          img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvhwnWFdz2y8eH8k2q2rbBNKYpMA842VZcQQ&usqp=CAU"
          imgClicked="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS857vYUAHqfHQD0HNlKGj81YNa6FckXAJtAA&usqp=CAU"
        />
        <Dice />
        <Carousel
          images={[
            'https://randomuser.me/api/portraits/women/1.jpg',
            'https://randomuser.me/api/portraits/men/1.jpg',
            'https://randomuser.me/api/portraits/women/2.jpg',
            'https://randomuser.me/api/portraits/men/2.jpg',
          ]}
        />
      </div>
    </div>
  );
}

export default App;
