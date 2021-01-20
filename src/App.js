//1. Import
import React from 'react';
import './App.css';
import DriverCard from './components/DriverCard';
import LikeButton from './components/LikeButton';

// 2. Function || Class & Export
export default function App() {
  return (
    <div className="App">
      <h1>DriverCard</h1>

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
      <LikeButton initialCounter={0} />
      <LikeButton initialCounter={4} />
    </div>
  );
}
