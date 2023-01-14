import LikeButton from './components/LikeButton';
import ClickablePicture from './components/ClickablePicture';
import Dice from './components/Dice';
import img from './assets/images/maxence.png';
import imgClicked from './assets/images/maxence-glasses.png';

function App() {
  return (
    <div className="App">
      <LikeButton />
      <ClickablePicture img={img} imgClicked={imgClicked} />
      <Dice />
    </div>
  );
}

export default App;
