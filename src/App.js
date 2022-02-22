import logo from './logo.svg';
import './App.css';
import IdCard from './components/IdCard';

function App() {
  return (
    <div className="App">
      <IdCard firstName='Leonardo'
              lastName='Bravo'
              gender='male'
              height={185}
              birth={new Date('1992-10-15')}
              picture="https://randomuser.me/api/portraits/men/44.jpg"
      />
      <IdCard firstName='Sofía'
              lastName='Bravo'
              gender='female'
              height={165}
              birth={new Date('1991-05-19')}
              picture="https://randomuser.me/api/portraits/women/44.jpg"
      />
    </div>
  );
}

export default App;
