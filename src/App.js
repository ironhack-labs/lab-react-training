import './App.css';
import IdCard from './idcard/IdCard';
import moment from 'moment'

function App() {
  return (
    <div className="App">
      <IdCard
        lastName="Doe"
        firstName="John"
        gender="male"
        height={1.78}
        birth={moment('1992-05-11').format('MMMM Do YYYY').toString()}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />
      <IdCard
        lastName="Obrien"
        firstName="Delores"
        gender="female"
        height={1.72}
        birth={moment('1993-11-04').format('MMMM Do YYYY').toString()}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />
    </div>
  );
}

export default App;
