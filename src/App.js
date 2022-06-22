import './App.css';
import IdCard from './data/IdCard';

// not possible to see in the page
function App() {
  return (
    <div className="App">
      <IdCard
        lastName="Doe"
        firstName="John"
        gender="male"
        height={178}
        birth={new Date('1992-07-14')}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />

      <p>teste</p>
    </div>
  );
}

export default App;
