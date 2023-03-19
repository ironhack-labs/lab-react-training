import './App.css';
import IdCard from './components/IdCard';

function App() {
  return (
    <div className='App'>
    <div className="cards">
      <div className="user">
        <IdCard
          birth={new Date("1992-07-14")}
          firstName='John'
          gender='male'
          height={178}
          lastName='Doe'
          picture="https://randomuser.me/api/portraits/men/44.jpg"
        />
      </div>
      
      <div className="user">
        <IdCard
      lastName='Delores '
      firstName='Obrien'
      gender='female'
      height={172}
      birth={new Date("1988-05-11")}
      picture="https://randomuser.me/api/portraits/women/44.jpg"
        />
      </div>
    </div>
</div>
  );
}

export default App;
