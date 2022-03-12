//jshint esversion:8

import './App.css';
import {IdCard} from './components/IdCard';
import styled from 'styled-components';
import styledComponents from 'styled-components';


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
];

function App() {
  return (
    <div className="App">

      {cards.map(elem => {
        return <IdCard firstName={elem.firstName} lastName={elem.lastName} gender={elem.gender} height={elem.height} birth={elem.birth} picture={elem.picture} />
      })}
      
      
    </div>
  );
}

export default App;
