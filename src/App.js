import React from 'react';
import {useState} from 'react';
import logo from './logo.svg';
import './App.css';

const IdCard = (props) => {

  const date = props.birth
  const parseDate = date.toString().slice(0,15)
  const height = props.height.toString()
  const parseHeight = height.slice(0, 1) + '.' + height.slice(1,3) + ' m'

  return <div className="id-card">
    <div>
      <img src={props.picture}/>
    </div>
    <div>
      <p><strong>First Name: </strong>{props.firstName}</p>
      <p><strong>Last Name: </strong>{props.lastName}</p>
      <p><strong>Gender: </strong>{props.gender}</p>
      <p><strong>Height: </strong>{parseHeight}</p>
      <p><strong>Birth: </strong>{parseDate}</p>
    </div>
  </div>
}

const Greetings = (props) => {

  const languages = {
    en: 'Hello',
    de: 'Hallo',
    es: 'Hola',
    fr: 'Bonjour'
  }

  return <div className="greetings">
    <p>{languages[props.lang]} {props.children}</p>
  </div>
}

const Random = (props) => {
  const randomNum = Math.floor(Math.random()*props.max+props.min);

  return <div className="greetings">
    <p>Random value between {props.min} {props.max} => {randomNum}</p>
  </div>
}

const BoxColor = (props) => {

  const divStyle = {
    backgroundColor: `rgb(${props.r},${props.g},${props.b})`
  }

  return <div className="box-color" style={divStyle}>
    <p>rgb({props.r},{props.g},{props.b})</p>
  </div>
}

const CreditCard = (props) => {
  let propsType = props.type
  let type = ""

  if (propsType.toString() === "Visa") {
    type = "./img/visa.png"
  } else {
    type = "./img/master-card.svg"
  }

  const divStyle = {
    backgroundColor: props.bgColor,
    color: props.color
  }

  const propsNumber = props.number
  const cardNumber = "•••• •••• •••• " + propsNumber.toString().slice(-4)

  return <div className="credit-card" style={divStyle}>
    <div className='card__type'>
      <img src= {type}/>
    </div>
    <p className='card__number'>{cardNumber}</p>
    <div className="card__info">
      <p>Expires {props.expirationMonth}/{props.expirationYear}</p>
      <p>{props.bank}</p>
    </div>
    <p className="card__owner">{props.owner}</p>
  </div>
}

const Rating = (props) => {

  const num = Math.round(Number(props.children))
  let rating = ""

  for (let i = 0; i < 5; i++) {
    if (i < num) {
      rating += "★"
      continue
    }
    rating += "☆"
  }

  return <div>
    <p className = "rating">{rating}</p>
  </div>
}

const DriverCard = (props) => {
  const num = Math.round(Number(props.rating))
  let rating = ""

  for (let i = 0; i < 5; i++) {
    if (i < num) {
      rating += "★"
      continue
    }
    rating += "☆"
  }

  return <div className="driver-card">
    <div>
      <img src={props.img}/>
    </div>
    <div>
      <h2>{props.name}</h2>
      <p className = "rating">{rating}</p>
      <p>{props.car.model} - {props.car.licensePlate}</p>
    </div>
  </div>
}

const LikeButton = () => {
  const [count, setCount] = useState(0)

  function add() {
    setCount(count+1)
  }

  return (<button className='like-button' onClick={add}>
    {count} Likes
  </button>)
}

const ClickablePicture = (props) => {
  const [image, setImage] = useState(props.img)

  function clickImg(){
    console.log('hello')
    if (image == "/img/persons/maxence.png") {
      setImage(props.imgClicked)
    } else {
      setImage(props.img)
    }
  }

  return (
    <img className='clickable-picture' src={image} onClick={clickImg}/>
  )
}

const Dice = () => {
  let random = Math.floor((Math.random() * 6) + 1);
  const [image, setImage] = useState(`/img/dice${random}.png`)

  function randomPic(){
    setImage('/img/dice-empty.png')
    setTimeout(()=> setImage (`/img/dice${random}.png`), 1000)
  }

  return (
    <img className='dice' src={image} onClick={randomPic}/>
  )
}

const Carousel = (props) => {
  const images = [...props.imgs]
  const [counter, setCounter] = useState(0)

  function right() {
    if (counter < images.length-1) {
      setCounter(counter+1)
    } else {
      setCounter(0)
    }
  }

  function left() {
    if (counter > 0) {
      setCounter(counter-1)
    } else {
      setCounter(images.length-1)
    }
  }

  return (<div>
    <button onClick={left}>left</button>
    <img src={images[counter]}/>
    <button onClick={right}>right</button>
  </div>)
}

const NumbersTable = (props) => {
  const table = []
  for (let i = 1; i < props.limit+1; i++) {
    if (i % 2 === 0) {
      table.push({odd: "red", num: i})
    } else {
      table.push({odd: "", num: i})
    }
  }
  
const listItems = table.map((elm, index) => <li className={elm.odd}>{elm.num}</li>)

  return (<ul className="table">
    {listItems}
  </ul>)
}

function App() {
  return (
    <div className="container">
    <h1>IdCard</h1>
    <IdCard
      lastName='Doe'
      firstName='John'
      gender='male'
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

    <h1>Greetings</h1>

    <Greetings lang="de">Ludwig</Greetings>
    <Greetings lang="fr">François</Greetings>

    <h1>Random</h1>

    <Random min={1} max={6}/>
    <Random min={1} max={100}/>

    <h1>Box Color</h1>

    <BoxColor r={255} g={0} b={0} />
    <BoxColor r={128} g={255} b={0} />

    <h1>Credit Card</h1>

    <CreditCard
      type="Visa"
      number="0123456789018845"
      expirationMonth={3}
      expirationYear={2021}
      bank="BNP"
      owner="Maxence Bouret"
      bgColor="#11aa99"
      color="white" />
    <CreditCard
      type="Master Card"
      number="0123456789010995"
      expirationMonth={3}
      expirationYear={2021}
      bank="N26"
      owner="Maxence Bouret"
      bgColor="#eeeeee"
      color="#222222" />
    <CreditCard
      type="Visa"
      number="0123456789016984"
      expirationMonth={12}
      expirationYear={2019}
      bank="Name of the Bank"
      owner="Firstname Lastname"
      bgColor="#ddbb55"
      color="white" />

    <h1>Rating</h1>

    <Rating>0</Rating>
    <Rating>1.49</Rating>
    <Rating>1.5</Rating>
    <Rating>3</Rating>
    <Rating>4</Rating>
    <Rating>5</Rating>

    <h1>DriveCard</h1>

    <DriverCard
      name="Travis Kalanick"
      rating={4.2}
      img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
      car={{
        model: "Toyota Corolla Altis",
        licensePlate: "CO42DE"
      }} />
    <DriverCard
      name="Dara Khosrowshahi"
      rating={4.9}
      img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
      car={{
        model: "Audi A3",
        licensePlate: "BE33ER"
      }} />

    <h1>Like Button</h1>

    <LikeButton />

    <h1>Clickable Picture</h1>

    <ClickablePicture
      img='/img/persons/maxence.png'
      imgClicked='/img/persons/maxence-glasses.png'
    />

    <h1>Dice</h1>

    <Dice />

    <h1>Carousel</h1>

    <Carousel
      imgs={[
        'https://randomuser.me/api/portraits/women/1.jpg',
        'https://randomuser.me/api/portraits/men/1.jpg',
        'https://randomuser.me/api/portraits/women/2.jpg',
        'https://randomuser.me/api/portraits/men/2.jpg'
      ]}
    />

    <h1>Number Table</h1>
    
    <NumbersTable limit={12} />
    </div>
  );
}

export default App;
