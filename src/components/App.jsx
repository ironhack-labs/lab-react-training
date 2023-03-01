import './App.css'
import Carousel from './Carousel/Carousel'
import ClickablePicture from './ClickablePicture/ClickablePicture'
import Dice from './Dice/Dice'
import IdCard from './IdCard/IdCard'
import LikeButton from './LikeButton/LikeButton'
import NumbersTable from './NumbersTable/NumbersTable'


const App = () => {
  return (

    <div className='App'>

      <IdCard
        lastName='Doe'
        firstName='John'
        gender='male'
        height={178}
        birth={new Date("1992-07-14")}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />

      <IdCard
        lastName='Delores '
        firstName='Obrien'
        gender='female'
        height={172}
        birth={new Date("1988-05-11")}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />

      <hr />

      <h1>Aquí irían las 6 siguientes iteracciones.</h1>

      <hr />

      <LikeButton />

      <LikeButton />

      <hr />

      <ClickablePicture
        img='maxence.png'
        imgClicked='maxence-glasses.png'
      />

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
