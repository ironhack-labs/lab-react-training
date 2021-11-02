import React from 'react';
import './App.css';
import IdCard from './IdCard';
import Greeting from './Greeting';
import Random from './Random';
import DriverCard from './DriverCard';
import LikeButton from './LikeButton';


function App() {
  return (
    <div className="App">
      <header> <h2> LAB | React Training </h2> </header>
    
      <h4> Iteration 1 </h4>

      <div className="container">
          <IdCard 
          name="John" 
          surname="Manross" 
          gender="male" 
          height={1.82} 
          birth={1993}/>
          
          <IdCard 
          name="Gatsby" 
          surname="Bill" 
          gender="male" 
          height={1.92} 
          birth={1988}/>

          <IdCard name="Charly" surname="Bob" gender="male" height={1.77} birth={1983}/>
      </div>

      <h4> Iteration 2 </h4>

      <div class="container">
          <Greeting lang="de" children="Germany"> Hello Germany</Greeting>
          <Greeting lang="fr" children="France"> Hello France</Greeting>
      </div>

      <h4> Iteration 3 </h4>

      <div>
          <Random min={2} max={6}/> 
          <br/>
          <Random min={4} max={100}/>
      </div>

      <h4> Iteration 7 </h4>
      
      <div> 
          <DriverCard 
            name="Travis Kalanick"
            rating={4.2}
            img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
            car={{
              model: "Toyota Corolla Altis",
              licensePlate: "CO42DE"
            }}/>
          <hr/>
          <DriverCard 
            rating={4.9}
            img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
            car={{
              model: "Audi A3",
              licensePlate: "BE33ER"
            }}/>
      </div>

      <h4> Iteration 8 </h4>

      <div>
            <LikeButton />
      </div>

      <hr/>
      <hr/>
      <hr/>
      <hr/>

    </div>
  );
}

export default App;
