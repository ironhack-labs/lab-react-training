import './App.css';
import LikesButton from './components/LikeButton';
import ClickablePicture from './components/ClickablePicture';
import DiceChange from './components/Dice';
import Carousel from './components/Carousel';
import NumbersTable from './components/NumbersTable'; 
import Facebook from './components/FaceBook';

function App() {
  return (
    <div className="App">
<LikesButton/>
<ClickablePicture/>
<DiceChange/>
<Carousel
  images={[
    'https://randomuser.me/api/portraits/women/1.jpg',
    'https://randomuser.me/api/portraits/men/1.jpg',
    'https://randomuser.me/api/portraits/women/2.jpg',
    'https://randomuser.me/api/portraits/men/2.jpg'
  ]}
/>
 <NumbersTable limit={12}/> 
 <Facebook/>
    </div>
  );
}

export default App;
