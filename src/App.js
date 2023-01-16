import LikeButton from './components/LikeButton';
import ClickablePicture from './components/ClickablePicture';
import Dice from './components/Dice';
import img from './assets/images/maxence.png';
import imgClicked from './assets/images/maxence-glasses.png';
import Carousel from './components/Carousel';
import NumbersTable from './components/NumbersTable';
import Facebook from './components/Facebook';
import SignupPage from './components/SignupPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <LikeButton />
      <ClickablePicture img={img} imgClicked={imgClicked} />
      <Dice />
      <Carousel
        images={[
          'https://randomuser.me/api/portraits/women/1.jpg',
          'https://randomuser.me/api/portraits/men/1.jpg',
          'https://randomuser.me/api/portraits/women/2.jpg',
          'https://randomuser.me/api/portraits/men/2.jpg',
        ]}
      />
      <NumbersTable limit={12} />
      <Facebook />
      <SignupPage />
    </div>
  );
}

export default App;
