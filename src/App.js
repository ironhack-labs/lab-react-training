import IdCard from './components/IdCard';
import Greetings from './Greetings';

const App = () => {
  return (
    <>
      <div>
        <IdCard
          lastName="Doe"
          firstName="John"
          gender="male"
          height={178}
          birth={new Date('1992-07-14')}
          picture="https://randomuser.me/api/portraits/men/44.jpg"
        />

        <IdCard
          lastName="Delores "
          firstName="Obrien"
          gender="female"
          height={172}
          birth={new Date('1988-05-11')}
          picture="https://randomuser.me/api/portraits/women/44.jpg"
        />


<h1>Greetings</h1>
      <Greetings lang="de" children="Ludwig"/>
      <Greetings lang="fr">François</Greetings>
      </div>
      

    </>
  );
};

export default App;