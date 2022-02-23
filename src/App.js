
import './App.css';
import LikeButton from './components/LikeButton'
import withoutGlassesImage from './assets/images/maxence.png'
import withGlassesImage from './assets/images/maxence-glasses.png'
import ClickablePicture from './components/ClickablePicture'
import Dice from './components/Dice'

function App() {
  return (
    <div className="App">
      <LikeButton />

      <ClickablePicture img={withoutGlassesImage} imgClicked={withGlassesImage}/>

      <Dice />

    </div>
  );
}

export default App;
