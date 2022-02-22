import './App.css';
import ClickablePicture from './components/ClickablePicture';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const color = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];
  const [background, colorSetter] = useState(color);

  const setCountHandler = () => {
    colorSetter(background);
    setCount(count + 1);
  };
  return (
    <div className="App">
      <header className="App-header">
        <button
          style={{ backgroundColor: { color } }}
          onClick={setCountHandler}
        >
          {count}Likes
        </button>
      </header>
      <ClickablePicture
        img="./assets/images/maxence.png"
        imgClicked="./assets/images/maxence-glasses.png"
      />
    </div>
  );
}

export default App;
