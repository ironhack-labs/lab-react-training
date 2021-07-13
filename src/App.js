import React from 'react';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings'
import './App.css';

function App() {
  return (
    <main>
      <section>
        <h1>Cards</h1>
        <IdCard
          lastName='Doe'
          firstName='John'
          gender='male'
          height={178}
          birth="Tue Jul 14 1992"
          picture="https://randomuser.me/api/portraits/men/44.jpg"
        />

        <IdCard
          lastName='Delores '
          firstName='Obrien'
          gender='female'
          height={172}
          birth="Tue May 11 1988"
          picture="https://randomuser.me/api/portraits/women/44.jpg"
        />

      </section>
      <section>

        <h1>Greetings</h1>
        <Greetings lang='es'
          children='Hola Jose!'>
        </Greetings>
        <Greetings lang='en'
          children='Hello Mr Hose!'>

        </Greetings>


      </section>
    </main>




  );
}

export default App;
