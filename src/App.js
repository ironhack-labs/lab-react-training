import './App.css';
import IdCard from './components/IdCard';

function App() {
  return (
    <div>
      <IdCard
        lastName="Doe"
        firstName="John"
        gender="male"
        height={178}
        birth={27}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />
    </div>
  );
}

export default App;
