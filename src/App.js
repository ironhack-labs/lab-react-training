import './App.css';
import IdCard from './components/id-card/IdCard.js';

function App() {
  return (
    <div className="App">
      <div className='id-cards'>
        <h3 className='my-3 mx-2'><b>IdCard</b></h3>
        <IdCard
          lastName='Doe'
          firstName='John'
          gender='male'
          height={178}
          birth={new Date("1992-07-14")}
          picture="https://randomuser.me/api/portraits/men/44.jpg"
        />
        <IdCard
          lastName='Dolores '
          firstName='Obrien'
          gender='female'
          height={172}
          birth={new Date("1988-05-11")}
          picture="https://randomuser.me/api/portraits/women/44.jpg"
        />
      </div>

    </div>
  );
}

export default App;
