import React from 'react';
import logo from './logo.svg';
import './App.css';
import IdCard from './components/IdCard';
import Greetings from './components/greetings';
import Random from './components/Random';
import BoxColor from './components/BoxColor';
import LikeButton from './components/Liked';
import ClickablePicture from './components/ClickablePicture';
import NumbersTable from './components/NumbersTable';

function App() {
  return (
    <>
      <IdCard
        lastName='Eli'
        firstName='Hini'
        gender='female'
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
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>
      <Random min={1} max={6}/>
      <Random min={1} max={100}/>
      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />


      {/* //iteration who knows wha tnumber */}
      <LikeButton></LikeButton>
      <LikeButton></LikeButton>
      
      <ClickablePicture></ClickablePicture>

      <NumbersTable limit={12} />

    </>
  );
}
export default App;