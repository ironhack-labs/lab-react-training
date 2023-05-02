import './App.css';
import studentList from './data/berlin.json';
import IdCard from './components/IdCard';

function App() {
  return (
    <div className="App">
      {studentList.map((name) => {
        return <IdCard name={name} key={name.firstName} />;
      })}
    </div>
  );
}

export default App;
