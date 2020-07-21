import React from 'react';
import './App.css';
import IdCard from './IdCard';
import Greetings from './Greetings';
import Random from './Random';
import BoxColor from './BoxColor';

function App() {
  return (
    <div className="App">
        <p>
          <h1>IdCard</h1> 
          <IdCard  
          lastName='Robson'
          firstName='Santos'
          gender='male'
          height={181}
          birth={new Date("1981-09-04")}
          picture="https://scontent.fcgh37-1.fna.fbcdn.net/v/t1.0-0/p206x206/74575651_2597664863589997_2029651297543651328_o.jpg?_nc_cat=100&_nc_sid=da31f3&_nc_ohc=a23hl9QxqYoAX--pDZW&_nc_ht=scontent.fcgh37-1.fna&_nc_tp=6&oh=442a4df3ee8977b9cdcb6ce31b8f77c2&oe=5F3D5DE3"/>
        </p>
        
        <h1>Greetings</h1>
        {/* Use the Greetings component and definie props.lang="de" and props.children="Ludwig" */}
        <Greetings lang="en">Ironhacker</Greetings> 

        <h1>Random</h1>
        <Random min={1} max={10}/>

        <h1>BoxColor</h1>
        <BoxColor r={255} g={0} b={0} />
        </div>
  )
}

export default App;
