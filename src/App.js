import logo from './logo.svg';
import './App.css';
import IdCard from './components/misc/IdCard';
import { arrIdCards } from './data/IdCard';
import Greetings from './components/misc/Greetings';
import Random from './components/misc/Random';
import Boxcolor from './components/misc/Boxcolor';
import CreditCard from './components/misc/CreditCard';

function App() {
  return (
    <div className="App">
      {/* <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossorigin="anonymous"
      ></link> */}
      <body>
        <h1>Iteration 1: IdCard</h1>
        {arrIdCards.map((card) => {
          return (
            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <IdCard
                key={card.firstName}
                firstName={card.firstName}
                lastName={card.lastName}
                gender={card.gender}
                height={card.height}
                birth={card.birth}
                picture={card.picture}
              />
            </div>
          );
        })}
        <h1>Iteration 2: Greeting</h1>
        <Greetings />

        {/* <script
          src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
          integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
          crossorigin="anonymous"
        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js"
          integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
          crossorigin="anonymous"
        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js"
          integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
          crossorigin="anonymous"
        ></script> */}
        <h1>Iteration 3: Random</h1>
        <Random min="1" max="100" />
        <h1>Iteration 4: Boxcolor</h1>
        <Boxcolor r="255" g="0" b="0" />
        <h1>Iteration 5: CreditCard</h1>
        <CreditCard
          type="Visa"
          number="0123456789018845"
          expirationMonth={3}
          expirationYear={2021}
          bank="BNP"
          owner="Maxence Bouret"
          bgColor="#11aa99"
          color="white"
        />

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
      </body>
    </div>
  );
}

export default App;
