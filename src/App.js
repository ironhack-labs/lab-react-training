import './App.css';
import IdCard from './components/id-card/IdCard';

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <h1 className="mt-3">Id Card</h1>
        <IdCard
          lastName="Doe"
          firstName="John"
          gender="male"
          height={178}
          birth={new Date('1992-07-14')}
          picture="https://randomuser.me/api/portraits/men/44.jpg"
          className="mb-2"
        />

        <IdCard
          lastName="Delores "
          firstName="Obrien"
          gender="female"
          height={172}
          birth={new Date('1988-05-11')}
          picture="https://randomuser.me/api/portraits/women/44.jpg"
          className="mb-2"
        />
      </div>
    </div>
  );
}

export default App;
