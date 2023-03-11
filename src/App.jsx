import Greetings from './components/greetings/Greetings';
import IdCard from './components/idCard/IdCard';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <div className="id-cards">
        <h1>IdCards Component</h1>
        <IdCard
          firstName="John"
          lastName="Doe"
          gender="male"
          height={178}
          birth={new Date('1992-07-14')}
          picture="https://randomuser.me/api/portraits/men/44.jpg"
        />
        <IdCard
          firstName="Obrien"
          lastName="Delores"
          gender="female"
          height={172}
          birth={new Date('1988-05-11')}
          picture="https://randomuser.me/api/portraits/women/44.jpg"
        />
      </div>

      <hr />

      <div className="greetings">
        <h1>Greetings Component</h1>
        <Greetings>Español</Greetings>
        <Greetings lang="en">English</Greetings>
        <Greetings lang="fr">François</Greetings>
        <Greetings lang="de">Ludwig</Greetings>
      </div>

      <hr />
    </div>
  );
};

export default App;
