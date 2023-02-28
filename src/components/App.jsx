import './App.css'
import ClickablePicture from './ClickablePicture/ClickablePicture'
import LikeButton from './LikeButton/LikeButton'
import Dice from './Dice/Dice'
import Carousel from './Carousel/Carousel'
import NumbersTable from './NumbersTable/NumbersTable'


function App() {
  return (
    <div className="App">
      <h1>Aquí van las primeras 7 iteraciones</h1>
      <hr />
      <LikeButton />
      <LikeButton />
      <hr />
      <ClickablePicture />
      <hr />
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
    </div>
  )
}


export default App