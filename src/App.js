import React from 'react';
import './App.css';
import ClickablePicture from './components/ClickablePicture';
import Dice from './components/Dice';
import DriverCard from './components/DriverCard';
import LikeButton from './components/LikeButton';
import Carousel from './components/Carousel'
import NumbersTable from './components/NumbersTable'
import Facebook from './components/Facebook';
import Demo from './components/SignupPage';
import RGBPicker from './components/RGBColorPicker'

function App() {
  return (
    <div className="App">
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
      <LikeButton />
      <LikeButton />
      <ClickablePicture
        img="/img/persons/maxence.png"
        imgClicked="/img/persons/maxence-glasses.png"
      />
      <Dice />
      <Carousel
        imgs={[
          'https://randomuser.me/api/portraits/women/1.jpg',
          'https://randomuser.me/api/portraits/men/1.jpg',
          'https://randomuser.me/api/portraits/women/2.jpg',
          'https://randomuser.me/api/portraits/men/2.jpg',
        ]}
      />
      <NumbersTable limit={12} />
      <Facebook />
      <Demo/>
      <RGBPicker />
    </div>
  );
}

export default App;
