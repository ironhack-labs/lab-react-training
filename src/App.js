import './App.css';
import IdCard from './components/IdCard/IdCard';

const cardsArray = [  
  {  
    lastName: 'Doe',
    firstName: 'John',
    gender: 'male',
    height: 178,
    birth: "1992-07-14",
    picture: "https://randomuser.me/api/portraits/men/9.jpg"  
  },
  {    
    lastName: 'Delores ',
    firstName: 'Obrien',
    gender: 'female',
    height: 172,
    birth: "1988-05-11",
    picture: "https://randomuser.me/api/portraits/women/44.jpg"    
  },  
];


function App() {
  return (
    <div className="App">
      <IdCard card={ cardsArray[0] }/>
      <IdCard card={ cardsArray[1] }/>
    </div>
  );
}

export default App;
