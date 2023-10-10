
import './App.css';
import Carousel from './Carousel/Carousel';
import ClickablePicture from './ClickablePicture/ClickablePicture';
import CounterButton from './CounterButton/CounterButton';
import Dice from './Dice/Dice';
import FaceBook from './FaceBook/FaceBook';
import NumbersTable from './NumbersTable/NumbersTable';




function App() {
  return (
    <div className="App">

      <CounterButton /> <hr />
      <ClickablePicture
        img='maxence.png'
        imgClicked='maxence-glasses.png'
      /> <hr />
      <Dice />
      <hr />
      <Carousel
        images={[
          'https://randomuser.me/api/portraits/women/1.jpg',
          'https://randomuser.me/api/portraits/men/1.jpg',
          'https://randomuser.me/api/portraits/women/2.jpg',
          'https://randomuser.me/api/portraits/men/2.jpg'
        ]}
      />
      <hr />

      <NumbersTable limit={12} />

      <hr />

      <FaceBook />


    </div>
  );
}

export default App;
