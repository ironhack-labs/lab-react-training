import './App.css';
import IdCard from './components/misc/IdCard/IdCard';

function App() {
  return (
    <div className="App">
      <IdCard
        lastName='Cristiano'
        firstName='Ronaldo'
        gender='male'
        height={185}
        birth={new Date("1992-07-14")}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />

      <IdCard
        lastName='Fernando '
        firstName='Alonso'
        gender='male'
        height={175}
        birth={new Date("1988-05-11")}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />    
    </div>
  );
}

export default App;
