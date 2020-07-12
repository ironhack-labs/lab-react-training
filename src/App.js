import React from 'react';
import IdCard from "./components/IdCard/IdCard"
import Greetings from "./components/Greetings/Greetings"


function App() {
  return (
    <div >
    <IdCard
  lastName='Doe'
  firstName='John'
  gender='male'
  height={178}
  //birth={new Date("1992-07-14")}
  picture="https://randomuser.me/api/portraits/men/44.jpg"
/>
<IdCard
  lastName='Delores '
  firstName='Obrien'
  gender='female'
  height={172}
  //birth={new Date("1988-05-11")}
  picture="https://randomuser.me/api/portraits/women/44.jpg"
/>
<Greetings lang="de"> Ludwig </Greetings>
<Greetings lang="sp"> Alberto </Greetings>
    </div>
  );
}

export default App;
