import './App.css';
import IdCard from "./components/IdCard/IdCard";

function App() {

  const idCard = [
    {
      lastName : "Doe",
      firstName: "John",
      gender: "male",
      height: "178",
      birth: new Date('1992-07-14').toDateString(),
      picture:"https://randomuser.me/api/portraits/men/44.jpg"
    },
    {
      lastName : "Delores",
      firstName: "Obrien",
      gender: "female",
      height: "172",
      birth: new Date('1988-05-11').toDateString(),
      picture:"https://randomuser.me/api/portraits/women/44.jpg"
    }
  ]
  return (
    <div className="App">
      <div>
        <h1>Id Cards</h1>
        {idCard.map(({picture, firstName, lastName , gender , height, birth })=> {
          return <IdCard picture={picture} lastName={lastName} firstName={firstName}
                  gender={gender} height={height} birth={birth} key={picture} />
        })}
      </div>
    </div>
  );
}

export default App;


