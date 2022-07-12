import logo from './logo.svg';
import './App.css';
import IdCard from './components/IdCard';

function App() {
  return (
    <>
      <IdCard
        lastName="Doe"
        firstName="John"
        gender="male"
        height={178}
        birth={new Date('1992-07-14')}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />
      <IdCard
        lastName="Obrien"
        firstName="Delores"
        gender="female"
        height={172}
        birth={new Date('1992-07-14')}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />
    </>
  );
}

export default App;
