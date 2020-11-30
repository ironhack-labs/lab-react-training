import React from 'react';
import logo from './logo.svg';
import './App.css';
import IdCard from './components/idCard/IdCard'
import Button from './components/button/Button'
import Greetings from './components/greetings/Greetings'
import Random from './components/random/Random'
import Students from './components/students/Students'


function App() {
  return (
    <>
      <IdCard
        lastName='Doe'
        firstName='John'
        gender='male'
        height={178}
        birth={new Date("1992-07-14")}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />
      <IdCard
        lastName='Delores '
        firstName='Obrien'
        gender='female'
        height={172}
        birth={new Date("1988-05-11")}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />
      <Button start={5} /> <Button start={5} /> <Button start={5} /> <Button start={5} /> <Button start={5} /> <Button start={5} /> <Button start={5} /> <Button start={5} /> <Button start={5} /> <Button start={5} /> <Button start={5} /> <Button start={5} /> <Button start={5} /> <Button start={5} /> <Button start={5} /> <Button start={5} /> <Button start={5} /> <Button start={5} /> <Button start={5} />
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>
      <Random min={1} max={6}/>
      <Random min={1} max={100}/>
      <Students />
    </>
  );
}

export default App;