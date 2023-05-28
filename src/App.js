import './App.css';
import IdCard from './components/IdCard';

function App() {
  const cardArray = [ {  
    // id: 1,
    lastName: "Delores",
    firstName:'Obrien',
    gender: 'female',
    height: 172,
    birth: Date("1988-05-11"),
    picture: "https://randomuser.me/api/portraits/women/44.jpg"}

, { 
  // id: 2,
    lastName: "Doe",
    firstName:'John',
    gender: 'male',
    height: 178,
    birth: Date("1992-07-14"),
    picture: "https://randomuser.me/api/portraits/men/44.jpg"
} ];

  return (
    <div className='App'>
     {cardArray.map (card => {
      return <IdCard eachCard={card}/>
     }

     )}
    
      </div>
  
  );
}

export default App;
