import './App.css';
import IdCard from './components/IdCard';

function App() {
  return (
    
    <div className="App">
    <h1>IdCard</h1>
    <section>
    <div className="cards-info">
      <IdCard 
        lastName="Doe"
        firstName="John"
        gender="male"
        height={178}
        birth={new Date('1992-07-14')}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />
     </div>

     <br></br>
     
     <div className="cards-info">
      <IdCard className="cards-info"
        lastName="Delores "
        firstName="Obrien"
        gender="female"
        height={172}
        birth={new Date('1988-05-11')}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />
      </div> 
      </section>
    </div>
  );
}

export default App;
