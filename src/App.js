import logo from './logo.svg';
import './App.css';



const IdCard = ({ firstName, lastName, gender, height, birth, picture }) => {

  return (
    <div className="IdCard box">
      <p> First name: {firstName}</p>
      <p> Last name: {lastName}</p>
      <p>Gender: {gender}</p>
      <p> height: {height}</p>
      <p> Birth: {birth.toDateString()}</p>
      <img src={picture}></img>
    </div>

  )

}

const Greetings = ({ lang, children }) => {

  let greet;
  if (lang === "eng") {
    greet = "Hello"
  }
  if (lang === "fr") {
    greet = "Bonjuur"
  }

  return (
    <div className="Greetings">
      <p> {greet} {children}</p>
    </div>
  )
}

const Random = ({ min, max }) => {
  let randomNumber = Math.floor(Math.random() * max) + min

  return (
    <div className="Random">
      <p>Random valuen between {min} and {max} => {randomNumber}</p>
    </div>
  )
}

const BoxColor = ({ r, g, b }) => {


  return (
    <div
      className="Box"
      style={{ color: `rgb(${r}, ${g}, ${b})` }}>
      <p> rgb({r}, {g}, {b}) </p>
    </div>
  )

}

const CreditCard = ({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) => {
  return (
    <div className="CreditCard">
      <p> {type} </p>
      <p> {number} </p>
      <p> {expirationMonth} </p>
      <p> {expirationYear} </p>
      <p> {bank} </p>
      <p> {owner} </p>
      <p> {bgColor} </p>
      <p> {color} </p>
    </div>
  )
}

const Rating = ({ children }) => {
  let displayArr = [1,2,3,4,5]
  return (
    <div className="Rating">
      {displayArr.map((v, i)=>{
        if(i<children) {
          return '★'
        } else {
          return '☆'
        }
      })
    }
    </div>

  )


}

const DriverCard = ({driverName,rating,img, car: {licensePlace, model}}) => {
  return(
    <div className="DriverCard">
      <img src={img}></img>
      <p> {driverName}</p>
      <Rating>{rating}</Rating>
      <p>{model} - {licensePlace}</p>
    </div>
  )
}





function App() {
  return (
    <div className="App">
      <h1>IdCard</h1>
      <IdCard
        lastName="Doe"
        firstName="John"
        gender="male"
        height={178}
        birth={new Date("1992-07-14")}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />

      <IdCard
        lastName="Delores"
        firstName="Obrien"
        gender="female"
        height={172}
        birth={new Date("1988-05-11")}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />
      <h1> Greetings</h1>
      <Greetings lang="eng">Ludwing</Greetings>
      <Greetings lang="fr">François</Greetings>

      <h1>Random</h1>
      <Random
        min={1}
        max={6}
      />
      <Random
        min={1}
        max={100}
      />
      <h1>BoxColor</h1>
      <BoxColor
        r={225}
        g={0}
        b={0}
      />
      <BoxColor
        r={128}
        g={225}
        b={0}
      />

      <h1>CreditCard </h1>

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
      //bgColor="#eeeeee"
      //color="#222222"
      />

      <CreditCard
        type="Visa"
        number="0123456789016984"
        expirationMonth={12}
        expirationYear={2019}
        bank="Name of the Bank"
        owner="Firstname Lastname"
      //bgColor="#ddbb55"
      //color="white"
      />

<h1>Rating</h1>
<Rating>0</Rating>
<Rating>1.49</Rating>
<Rating>1.5</Rating>
<Rating>3</Rating>
<Rating>4</Rating>
<Rating>5</Rating>

<h1>DiverCard</h1>
<DriverCard
  driverName="Travis Kalanick"
  rating={4}
  img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
  car={{
    model: "Toyota Corolla Altis",
    licensePlate: "CO42DE"
  }}
/>

<DriverCard
  driverName="Dara Khosrowshahi"
  rating={4.9}
  img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
  car={{
    model: "Audi A3",
    licensePlate: "BE33ER"
  }}
/>
    </div>
  );
}



export default App;
