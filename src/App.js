import IdCard from './components/IdCard';
import './App.css';

const contacts = [
  {
    lastName: 'Doe',
    firstName: 'John',
    gender: 'male',
    height: 178,
    birth: new Date("1992-07-14"),
    picture: "https://randomuser.me/api/portraits/men/44.jpg"
  },
  {
    lastName: 'Delores',
    firstName: 'Obrien',
    gender: 'female',
    height: 172,
    birth: new Date("1988-05-11"),
    picture: "https://randomuser.me/api/portraits/women/44.jpg"
  }
]

const contactList = () => contacts.map(contact => (
  <IdCard lastName={ contact.lastName} firstName={ contact.firstName } gender={ contact.gender } height={ contact.height } birth={ contact.birth } picture={ contact.picture } />
 ))

function App() {
  return (
    <div className="App">
      {contactList()}
    </div>
  );
}


export default App;