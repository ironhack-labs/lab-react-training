import React from 'react';
import './App.scss';
import IdCard from './components/IdCard/IdCard'
import Greetings from './components/Greetings/Greetings'
import Random from './components/Random/Random'
import BoxColor from './components/BoxColor/BoxColor'
import CreditCard from './components/CreditCard/CreditCard'
import Rating from './components/Rating/Rating'
import DriverCard from './components/DriverCard/DriverCard'
import LikeButton from './components/LikeButton/LikeButton'
import ClickablePicture from './components/ClickablePicture/ClickablePicture'
import Dice from './components/Dice/Dice'
import Carousel from './components/Carousel/Carousel'
import NumbersTable from './components/NumbersTable/NumbersTable';
import FaceBook from './components/FaceBook/FaceBook';
import SignupPage from './components/SignupPage/SignupPage';
import RGBColorPicker from './components/RGBColorPicker/RGBColorPicker';

function App() {
  return (
    <div className="App">
      <h1>React Training</h1>

      <h2><i className="lab la-react"></i> Iteration 1</h2>

      <div className="It1__Cards">
        <IdCard
          lastName='Doe'
          firstName='John'
          gender='male'
          height={178}
          birth={new Date("1992-07-14")}
          picture="https://randomuser.me/api/portraits/men/44.jpg"
        />
        <IdCard
          lastName='Delores'
          firstName='Obrien'
          gender='female'
          height={172}
          birth={new Date("1988-05-11")}
          picture="https://randomuser.me/api/portraits/women/44.jpg"
        />
      </div>

      <hr/>
      <h2><i className="lab la-react"></i> Iteration 2</h2>

      <ul>
        <li><Greetings lang="de">Ludwig</Greetings></li>
        <li><Greetings lang="en">English</Greetings></li>
        <li><Greetings lang="fr">François</Greetings></li>
        <li><Greetings lang="es">Español</Greetings></li>
      </ul>

      <hr/>
      <h2><i className="lab la-react"></i> Iteration 3</h2>

      <Random min={1} max={6}/>
      <Random min={1} max={100}/>

      <hr/>
      <h2><i className="lab la-react"></i> Iteration 4</h2>

      <BoxColor r={255} g={0} b={0} color="#fff"/>
      <BoxColor r={128} g={255} b={0} color="#000" />

      <hr/>
      <h2><i className="lab la-react"></i> Iteration 5</h2>

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

      <hr/>
      <h2><i className="lab la-react"></i> Iteration 6</h2>

      <Rating>0</Rating>
      <Rating>1.49</Rating>
      <Rating>1.5</Rating>
      <Rating>3</Rating>
      <Rating>4</Rating>
      <Rating>5</Rating>

      <hr/>
      <h2><i className="lab la-react"></i> Iteration 7</h2>

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


      <hr/>
      <h2><i className="lab la-react"></i> Iteration 8</h2>   
      <LikeButton /> <LikeButton />


      <hr/>
      <h2><i className="lab la-react"></i> Iteration 9</h2>   

      <ClickablePicture
        img='/img/persons/maxence.png'
        imgClicked='/img/persons/maxence-glasses.png'
      />


      <hr/>
      <h2><i className="lab la-react"></i> Iteration 10</h2>   
      <Dice />


      <hr/>
      <h2><i className="lab la-react"></i> Iteration 11</h2>   

      <Carousel
        imgs={[
          'https://randomuser.me/api/portraits/women/1.jpg',
          'https://randomuser.me/api/portraits/men/1.jpg',
          'https://randomuser.me/api/portraits/women/2.jpg',
          'https://randomuser.me/api/portraits/men/2.jpg'
        ]}
      />

      <hr/>
      <h2><i className="lab la-react"></i> Iteration 12</h2> 

      <NumbersTable limit={15} />

      <hr/>
      <h2><i className="lab la-react"></i> Iteration 13 & 14</h2>

      <FaceBook />

      <hr/>
      <h2><i className="lab la-react"></i> Iteration 15</h2> 

      <SignupPage />

      <hr/>
      <h2><i className="lab la-react"></i> Iteration 16</h2>     

      <RGBColorPicker />

    </div>
  );
}

export default App;
