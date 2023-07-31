import './App.css';
import IdCard from './components/IdCard'
import Greetings from './components/Greetings'
import Random from './components/Random'
import BoxColor from './components/BoxColor'
import CreditCard from './components/CreditCard'
import Rating from './components/Rating'
import DriverCard from './components/DriverCard'
import LikeButton from './components/LikeButton';
import ClickablePicture from './components/ClickablePicture';
import Dice from './components/Dice';
import Carousel from './components/Carousel';
import NumbersTable from './components/NumbersTable';
import FaceBook from './components/FaceBook';
import SignupPage from './components/SignupPage';
import RGBColorPicker from './components/RGBColorPicker';
import { useState } from 'react'

function App() {
  const scoreToStars = (rating) => {
    const score = Number(rating).toFixed()
    let stars = []
    for (let i = 1; i < 6; i++) {
      i <= score ? stars.push('★') : stars.push('☆')
    }
    return <>{stars.join('')}</>
  }

  let leftValue = '0px', topValue = '0px'
  const [circleStyle, setCircleStyle] = useState({
    display: 'none',
    width: 40,
    height: 40,
    border: '2px solid black',
    borderRadius: '50%',
    backgroundColor: 'transparent',
    position: 'absolute',
    left: { leftValue },
    top: { topValue },
    zIndex: 1
  })

  const handleClickArea = (e) => {
    const x = e.pageX, y = e.pageY
    leftValue = x - 20 + 'px'
    topValue = y - 20 + 'px'
    setCircleStyle(previousStyle => ({ ...previousStyle, 'display':'block', 'left': leftValue, 'top': topValue}))
    setTimeout(
      () => {
        setCircleStyle((previousStyle) => ({ ...previousStyle, 'display': 'none' }))
      },
      100
    )
  }

  return (
    <div
      className="App"
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <IdCard
        lastName="Doe"
        firstName="John"
        gender="male"
        height={178}
        birth={new Date('1992-07-14')}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />
      <IdCard
        lastName="Delores "
        firstName="Obrien"
        gender="female"
        height={172}
        birth={new Date('1988-05-11')}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />

      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>

      <Random min={1} max={6} />
      <Random min={1} max={100} />

      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />

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

      <Rating scoreToStars={scoreToStars}>0</Rating>
      <Rating scoreToStars={scoreToStars}>1.49</Rating>
      <Rating scoreToStars={scoreToStars}>1.5</Rating>
      <Rating scoreToStars={scoreToStars}>3</Rating>
      <Rating scoreToStars={scoreToStars}>4</Rating>
      <Rating scoreToStars={scoreToStars}>5</Rating>

      <DriverCard
        name="Travis Kalanick"
        rating={4.2}
        img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
        car={{
          model: 'Toyota Corolla Altis',
          licensePlate: 'CO42DE',
        }}
        scoreToStars={scoreToStars}
      />

      <DriverCard
        name="Dara Khosrowshahi"
        rating={4.9}
        img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
        car={{
          model: 'Audi A3',
          licensePlate: 'BE33ER',
        }}
        scoreToStars={scoreToStars}
      />

      <div onClick={handleClickArea}>
        <div className="circle" style={circleStyle}></div>
        <LikeButton />
        <LikeButton />
      </div>

      <div onClick={handleClickArea}>
        <div className="circle" style={circleStyle}></div>
        <ClickablePicture img="maxence.png" imgClicked="maxence-glasses.png" />
      </div>

      <Dice />

      <Carousel
        images={[
          'https://randomuser.me/api/portraits/women/1.jpg',
          'https://randomuser.me/api/portraits/men/1.jpg',
          'https://randomuser.me/api/portraits/women/2.jpg',
          'https://randomuser.me/api/portraits/men/2.jpg',
        ]}
      />

      <NumbersTable limit={12} />

      <FaceBook />

      <SignupPage />

      <RGBColorPicker />
    </div>
  );
}

export default App
