import './App.css';
import IdCard from './components/IdCard';

function App() {
  return (
    <div className="App container ">
      <div className='row border border-dark m-5 d-flex justify-content-start'>
      <IdCard
        className = 'row d-flex justify-content-start align-items-center'
        lastName='Doe'
        firstName='John'
        gender='male'
        height={178}
        // birth={new Date("1992-07-14")}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />
      </div>
      <div className='row border border-dark m-5'>
      <IdCard className = 'row d-flex justify-content-start align-items-center'
        lastName='Delores '
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
