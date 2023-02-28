import './App.css';
import LikeButton from './components/LikeButton';
// import IdCard from './components/IdCard';
// import Greetings from './components/Greetings';

function App() {
  // const user1 = {
  //   lastName: 'Doe',
  //   firstName: 'John',
  //   gender: 'male',
  //   height: 178,
  //   birth: '1992-07-14',
  //   picture: 'https://randomuser.me/api/portraits/men/44.jpg',
  // };

  // const user2 = {
  //   lastName: 'Delores ',
  //   firstName: 'Obrien',
  //   gender: 'female',
  //   height: 172,
  //   birth: '1988-05-11',
  //   picture: 'https://randomuser.me/api/portraits/women/44.jpg',
  // };

  return (
    <div className="App">
      {/* <div>
        <IdCard user={user1} />
      </div>

      <div>
        <IdCard user={user2} />
      </div> */}

      {/* <Greetings lang="de"> </Greetings>
      <Greetings lang="fr"></Greetings> */}

      <LikeButton />
    </div>
  );
}

export default App;
