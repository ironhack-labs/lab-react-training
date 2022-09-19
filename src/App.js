// import logo from './logo.svg';
import './App.css';
import IdCard from './components/card/IdCard';

const users = [
  {
    "lastName": 'Doe',
    "firstName": 'John',
    "gender": 'male',
    "height": 178,
    "birth": new Date('1992-07-14').toDateString(),
    "picture": "https://randomuser.me/api/portraits/men/44.jpg"
  },
  {
    "lastName": 'Delores',
    "firstName": 'Obrien',
    "gender": 'female',
    "height": 172,
    "birth": new Date("1988-05-11").toDateString(),
    "picture": "https://randomuser.me/api/portraits/women/44.jpg"
  },

]
function App() {
  return (
    users.map((user) => <IdCard key={user.firstName} user={user} />)

  );
}

export default App;
