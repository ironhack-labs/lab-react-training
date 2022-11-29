import './App.css';
import IdCard from './Components/IdCard/IdCard'
import LikeButton from './Components/LikeButton/LikeButton'
import ClickablePicture from './Components/ClickablePicture/ClickablePicture'

function App() {

  return (
    <section className='App'>

      <IdCard
        image={'https://randomuser.me/api/portraits/men/44.jpg'}
        details={{ lastName: 'Doe', firstName: 'John', gender: 'male', height: 178, birth: "1992-07-14" }}
      />
      <IdCard
        image={'https://randomuser.me/api/portraits/women/44.jpg'}
        details={{ lastName: 'Delores', firstName: 'Obrien', gender: 'female', height: 172, birth: "1988-05-11" }}
      />

      <LikeButton
      />

      <ClickablePicture
      />

    </section>
  );
}
export default App;
