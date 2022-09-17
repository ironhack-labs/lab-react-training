import './App.css';
import IdCard from './components/IdCard';

const idArray = [
  {
    user: {
      firstname: 'John',
      lastname: 'Doe',
      gender: 'male',
      height: '178',
      birth: '1992-07-14',
      picture: 'https://randomuser.me/api/portraits/men/44.jpg',
    },
  },
  {
    user: {
      firstname: 'Obrien',
      lastname: 'Delores',
      gender: 'female',
      height: '172',
      birth: '1993-05-11',
      picture: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
  },
];

function sayHello() {
  console.log('say hello');
}

function App() {
  return (
    <div>
      <IdCard idArray={idArray[0]} />
      <IdCard idArray={idArray[1]} />
      {/* sayHello()
      sayHello() */}
    </div>
  );
}

export default App;
