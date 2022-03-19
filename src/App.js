import './App.css';
import IdCard from "./components/IdCard/IdCard"
import Greetings from "./components/Greetings/greetings"


function App() {
  const exampleData=[
  {
  lastName:'Doe',
  firstName:'John',
  gender:'male',
  height: 178,
  birth: new Date("1992-07-14"),
  picture:"https://randomuser.me/api/portraits/men/44.jpg",
  },
{
  lastName:'Delores ',
  firstName:'Obrien',
  gender:'female',
  height: 172,
  birth: new Date("1988-05-11"),
  picture:"https://randomuser.me/api/portraits/women/44.jpg",
}
  ]

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          {exampleData.map((person, index) => {
            return (
              <div className="row" key={index}>
                <IdCard {...person} />
              </div>
            );
          })}
          <div>
            <Greetings lang="de">Ludwig</Greetings>
            <Greetings lang="fr">François</Greetings>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App
