import React from 'react';
import Intro from './components/Intro'
import Iteration from './components/Iteration'
import ListCard from './components/ListCard'
import Greetings from './components/Greetings'
import Random from './components/Random'
import Boxes from './components/Boxes'
import './App.scss';

function App() {
  return (
    <div className="App">
     {/* <Intro title="React trainging" /> */}
     <Iteration num={1}/>
     <ListCard />
     <Iteration num={2}/>
     <Greetings />
     <Iteration num={3}/>
     <Random min={25} max={50} />
     <Random min={75} max={100} />
     <Iteration num={4}/>
     <Boxes />
    </div>
  );
}

export default App;
