import React from 'react';
import logo from './logo.svg';
import './App.css';
import IdCard from './components/IdCard'; 


function App() {

const user1= {
  lastName:'Doe',
  firstName:'John',
  gender:'male',
  height:178,
  birth: new Date("1992-07-14"),
  picture: "https://randomuser.me/api/portraits/men/44.jpg"
}
const user2={
  lastName:'Delores ',
  firstName:'Obrien',
  gender:'female',
  height: 172,
  birth: new Date("1988-05-11"),
  picture:"https://randomuser.me/api/portraits/women/44.jpg"
}
        return (
      <div className="App">
        <IdCard data={user1}/>
        <IdCard data={user2}/>
      </div>
    ); 
}

export default App;

// export default App;
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
