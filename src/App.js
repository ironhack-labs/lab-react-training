import './App.css';
import LikesButton from './components/LikeButton';
import ClickablePicture from './components/ClickablePicture';
import DiceChange from './components/Dice';
import Carousel from './components/Carousel';

function App() {
  return (
    <div className="App">
<LikesButton/>
<ClickablePicture/>
<DiceChange/>
<Carousel/>
    </div>
  );
}

export default App;
