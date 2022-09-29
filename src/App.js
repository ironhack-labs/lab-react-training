import React from 'react';
import './App.css';

/* IMAGES  */
import img from './assets/images/maxence.png';
import imgClicked from './assets/images/maxence-glasses.png';

/* COMPONENTS */
import BoxColor from './components/BoxColor/BoxColor';
import ClickablePicture from './components/ClickablePicture/ClickablePicture';
import CreditCard from './components/CreditCard/CreditCard';
import DriverCard from './components/DriverCard/DriverCard';
import Greeting from './components/Greeting/Greeting';
import IdCard from './components/IdCard/IdCard';
import LikeButton from './components/LikeButton/LikeButton';
import Random from './components/Random/Random';
import Rating from './components/Rating/Rating';
import Dice from './components/Dice/Dice';
import Carousel from './components/Carousel/Carousel';
import NumbersTable from './components/NumbersTable/NumbersTable';
import Facebook from './components/Facebook/Facebook';
import SignupPage from './components/SignupPage/SignupPage';
import RGBColorPicker from './components/RGBColorPicker/RGBColorPicker';

const App = () => {
  const IdCards = [
    {
      lastName: 'Doe',
      firstName: 'John',
      gender: 'male',
      height: 178,
      birth: new Date('1992-07-14').toDateString(),
      picture: 'https://randomuser.me/api/portraits/men/44.jpg',
    },
    {
      lastName: 'Delores',
      firstName: 'Obrien',
      gender: 'female',
      height: 172,
      birth: new Date('1988-05-11').toDateString(),
      picture: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
  ];

  const CreditCards = [
    {
      type: 'Visa',
      number: '0123456789018845',
      expirationMonth: 3,
      expirationYear: 2021,
      bank: 'BNP',
      owner: 'Maxence Bouret',
      bgColor: '#11aa99',
      color: 'white',
    },
    {
      type: 'Master Card',
      number: '0123456789010995',
      expirationMonth: 3,
      expirationYear: 2021,
      bank: 'N26',
      owner: 'Maxence Bouret',
      bgColor: '#eeeeee',
      color: '#222222',
    },
    {
      type: 'Visa',
      number: '0123456789016984',
      expirationMonth: 12,
      expirationYear: 2019,
      bank: 'Name of the Bank',
      owner: 'Firstname Lastname',
      bgColor: '#ddbb55',
      color: 'white',
    },
  ];

  const DriverCards = [
    {
      name: 'Travis Kalanick',
      rating: 4.2,
      img: 'https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428',
      car: { 
        model: 'Toyota Corolla Altis' ,
        licensePlate: 'CO42DE' 
      }          
    },
    {
      name: 'Dara Khosrowshahi',
      rating: 4.9,
      img: 'https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg',
      car: { model: 'Audi A3', 
        licensePlate: 'BE33ER' 
      }
    },
  ];

  return (
    <div className="App">
      {/* ITERATION 1 */}
      <div className="Cards-container">
        <h2>IdCards</h2>
        {IdCards.map(
          ({ lastName, firstName, gender, height, birth, picture }) => {
            return (
              <IdCard
                lastName={lastName}
                firstName={firstName}
                gender={gender}
                height={height}
                birth={birth}
                picture={picture}
                key={picture}
              />
            );
          }
        )}
      </div>
      {/* ITERATION 2 */}
      <div className="Greetings-container">
        <h2>Greetings</h2>
        <Greeting lang="de"> Ludwig </Greeting>
        <Greeting lang="fr"> François </Greeting>
      </div>
      {/* ITERATION 3 */}
      <div>
        <h2>Random</h2>
        <Random min={1} max={6} />
        <Random min={1} max={100} />
      </div>
      {/* ITERATION 4 */}
      <div>
        <h2>BoxColor</h2>
        <BoxColor r={255} g={0} b={0} />
        <BoxColor r={128} g={255} b={0} />
      </div>
      {/* ITERATION 5 */}
      <div>
        <h2>CreditCard</h2>
        <div className="CreditCards-container">
          {CreditCards.map(
            ({
              type,
              number,
              expirationMonth,
              expirationYear,
              bank,
              owner,
              bgColor,
              color,
            }) => {
              return (
                <CreditCard
                  type={type}
                  number={number}
                  expirationMonth={expirationMonth}
                  expirationYear={expirationYear}
                  bank={bank}
                  owner={owner}
                  bgColor={bgColor}
                  color={color}
                  key={number}
                />
              );
            }
          )}
        </div>
      </div>
      {/* ITERATION 6 */}
      <div>
        <h2>Rating</h2>
        <Rating>0</Rating>
        <Rating>1.49</Rating>
        <Rating>1.5</Rating>
        <Rating>3</Rating>
        <Rating>4</Rating>
        <Rating>5</Rating>
      </div>
      {/* ITERATION 7 */}
      <div>
        <h2>DriverCards</h2>
        {DriverCards.map(({ name, rating, img, car }) => {
          return (
            <DriverCard
              name={name}
              rating={rating}
              img={img}
              car={car}
              key={name}
            />
          );
        })}
      </div>
      {/* ITERATION 8 */}
      <div>
        <h2>Like Button</h2>
        <LikeButton />
      </div>

      {/* ITERATION 9 */}
      <div>
        <h2>ClickablePicture</h2>
        <ClickablePicture img={img} imgClicked={imgClicked} />
      </div>

      {/* ITERATION 10 */}
      <div>
        <h2>Dice</h2>
        <Dice />
      </div>

      {/* ITERATION 11 */}
      <div>
        <h2>Carousel</h2>
        <Carousel
          images={[
            'https://randomuser.me/api/portraits/women/1.jpg',
            'https://randomuser.me/api/portraits/men/1.jpg',
            'https://randomuser.me/api/portraits/women/2.jpg',
            'https://randomuser.me/api/portraits/men/2.jpg',
          ]}
        />
      </div>

      {/* ITERATION 12 */}
      <div>
        <h2>Numbers Table</h2>
        <div className="Numbers-container">
          <NumbersTable limit={12} />
        </div>
      </div>

      {/* ITERATION 13 & 14 */}
      <div>
        <h2>Facebook's profiles</h2>
        <Facebook />
      </div>

      {/* ITERATION 15 */}
      <div>
        <h2>Signup Page</h2>
        <SignupPage></SignupPage>
      </div>

      {/* ITERATION 16 */}
      <div>
        <h2>RGB Color Picker</h2>
        <RGBColorPicker></RGBColorPicker>
      </div>
    </div>
  );
};

export default App;
