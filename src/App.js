import './App.css';


const IDcard = ({lastName, firstName, gender, height, birth, picture }) => {
  const birthDate = new Date(birth)
  return(
    <div>
    <div className="idElements">
    <img src={picture} alt="id"/>
    <h4>First Name: {firstName}</h4>
    <h4>Last Name: {lastName}</h4>
    <h4>Gender: {gender}</h4>
    <h4>Height: {height}</h4>
    <h4>Birthday: {birthDate.toDateString()}</h4>
    </div>
    </div>
  )
}
const Greetings =({lang, children}) => {
  let greeting=''
  if(lang === "de") {
    greeting="Hallo";
  } else if(lang === "fr") {
    greeting="Bonjour"
  } else if(lang === "en") {
    greeting="Hello"
  } else if(lang === "es") {
    greeting="Hola"
  }
  
  return(
    <div className="Greetings">
    <p>{greeting} {children}</p>
    </div>
    
  )
}
const RandomNumber =({min, max}) => {
  let numberRan = Math.floor(Math.random() *max) +min
  return(
    <div className="RandomNumber">
      <p>Random value between {min} and {max} => {numberRan}</p>
    </div>
  )
  
}
function App() {
  return (
    <div className="App">
      <h1 className="iDCard">IDcard</h1>
      <IDcard
        lastName="Reilly"
        firstName="Lilli"
        gender="female"
        height="5'6"
        birth={new Date("1996-09-19")}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />
      <IDcard
      lastName="Doe"
      firstName="John"
      gender="male"
      height="1.78m"
      birth={new Date("1992-07-14")}
      picture="https://randomuser.me/api/portraits/men/44.jpg"
      />
      <Greetings lang="de" child="Ludwig">Lugwig</Greetings>
      <Greetings lang="fr" child="François">François</Greetings>
      <h1>Random Number</h1>
      <RandomNumber min={1} max={6}/>
      <RandomNumber min={1} max={100}/>
    </div>
  );
}

export default App;
