import './App.css';
import ClickablePicture from './components/ClickablePicture';
import LikeHandler from './components/LikeHandler';
import img from './assets/images/maxence.png';
import imgClicked from './assets/images/maxence-glasses.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LikeHandler />
        <ClickablePicture img={img} imgClicked={imgClicked} />
      </header>
    </div>
  );
}

export default App;
