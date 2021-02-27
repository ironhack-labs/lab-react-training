import { Fragment } from 'react';

import IdCard from './src/components/idcard/IdCard';

import './App.css';

function App() {
  return (
    <Fragment>
      <div className="card">
        <IdCard lastName="Guerola"></IdCard>
        <IdCard firstName="Guerola"></IdCard>
        <IdCard gender="Female"></IdCard>
        <IdCard height="156"></IdCard>
        <IdCard birth={Date}></IdCard>
        <IdCard picture="./../public/img/persons/maxence-glasses.png"></IdCard>
      </div>
    </Fragment>

  );
}

export default App;