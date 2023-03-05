import './App.css';
import BoxColor from './components/misc/BoxColor';
import CreditCard from './components/misc/CreditCard';
import Greetings from './components/misc/Greetings';
import IdCard from './components/misc/IdCard';
import Random from './components/misc/Random';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* It. 1 */}
        <IdCard
          lastName="Doe"
          firstName="John"
          gender="male"
          height={1.78}
          birth={new Date('1992-07-14').toLocaleDateString()}
          picture="https://randomuser.me/api/portraits/men/44.jpg"
        />

        <IdCard
          lastName="Delores "
          firstName="Obrien"
          gender="female"
          height={1.72}
          birth={new Date('1988-05-11').toLocaleDateString()}
          picture="https://randomuser.me/api/portraits/women/44.jpg"
        />

        {/* It. 2 */}

        <Greetings lang="fr">Daniel</Greetings>

        {/* It.3 */}

        <Random min={3} max={10}></Random>

        {/* It.4 */}

        <BoxColor r={255} g={0} b={0} />
        <BoxColor r={128} g={255} b={0} />

        {/* It.5 */}
        <div className='creditcards'>

        <CreditCard
          type="Visa"
          number="0123456789018845"
          expirationMonth={3}
          expirationYear={2021}
          bank="BNP"
          owner="Maxence Bouret"
          bgColor="#11aa99"
          color="white"
        ></CreditCard>

        <CreditCard
          type="Master Card"
          number="0123456789010995"
          expirationMonth={3}
          expirationYear={2021}
          bank="N26"
          owner="Maxence Bouret"
          bgColor="#eeeeee"
          color="#222222"
        />

        <CreditCard
          type="Visa"
          number="0123456789016984"
          expirationMonth={12}
          expirationYear={2019}
          bank="Name of the Bank"
          owner="Firstname Lastname"
          bgColor="#ddbb55"
          color="white"
        />
        </div>
      </header>
    </div>
  );
}

export default App;
