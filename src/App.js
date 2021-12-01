import React from 'react';
//import logo from './logo.svg';
import './App.css';
import IdCard from './IdCard'
import Greetings from './Greetings';
import Random from './Random';
import LikeButton from './LikeButton';
import Carousel from './Carousel';


function App() {
  return (
    <div className="App">

      <div>
        <h1>ID card</h1>
        <div className="ids">

          <IdCard
            firstName="John"
            lastName="Doe"
            gender="male"
            height={178}
            // birth={new Date("1992-07-14")}
            picture="https://randomuser.me/api/portraits/men/44.jpg"
          />


          <IdCard
            lastName='Delores '
            firstName='Obrien'
            gender='female'
            height={172}
            // birth={new Date("1988-05-11")}
            picture="https://randomuser.me/api/portraits/women/44.jpg"
          />

        </div>
      </div>

      <div className="Greetings">
        <h1> Greetings </h1>
        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="fr">François</Greetings>
      </div>

      <div className="Random">
        <h1> Random </h1>

        <Random min={1} max={6} />
        <Random min={1} max={100} />
      </div>
      <h1> Buttons </h1>
      <div className="Button">
        <LikeButton /> <LikeButton />
      </div>
      <h1> Carousel</h1>
      <Carousel
        imgs={[
          'https://randomuser.me/api/portraits/women/1.jpg',
          'https://randomuser.me/api/portraits/men/1.jpg',
          'https://randomuser.me/api/portraits/women/2.jpg',
          'https://randomuser.me/api/portraits/men/2.jpg'
        ]}
      />
    </div>
  );
}

export default App;
