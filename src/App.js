import './App.css';
import LikeButton from './components/LikeButton';
import ClickablePicture from './components/ClickablePicture';
import pic from './assets/images/maxence.png';
import clickedPic from './assets/images/maxence-glasses.png';
import Dice from './components/Dice';
import Carousel from './components/Carousel';
import NumbersTable from './components/NumbersTable';
import Facebook from './components/Facebook';
import SingupPage from './components/SingupPage';

function App() {
  return (
    <div className="App">
      <LikeButton />
      <LikeButton />

      <ClickablePicture img={pic} imgClicked={clickedPic} />

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
      <NumbersTable limit={14} />
      <NumbersTable limit={15} />

      <Facebook />

      <SingupPage />
    </div>
  );
}

export default App;
