//jshint esversion:8

import './App.css';
import {IdCard} from './components/IdCard';

const cards = [
  {
    lastName: 'Doe',
    firstName: 'John',
    gender: 'male',
    height: 178,
    birth: "1992-07-14",
    picture:"https://randomuser.me/api/portraits/men/44.jpg"
  },
  {
    lastName: 'Delores',
    firstName: 'Obrien',
    gender: 'female',
    height: 172,
    birth: "1988-05-11",
    picture:"https://randomuser.me/api/portraits/women/44.jpg"
  }
]

function App() {
  return (
    <div className="App">
      <IdCard firstName={cards[0].firstName} lastName={cards[0].lastName} gender={cards[0].gender} height={cards[0].height} birth={cards[0].birth} picture={cards[0].picture} />
      <IdCard firstName={cards[1].firstName} lastName={cards[1].lastName} gender={cards[1].gender} height={cards[1].height} birth={cards[1].birth} picture={cards[1].picture} />
    </div>

    
  );
}

export default App;
