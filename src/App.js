import Carousel from './components/Carousel';
import './App.css';

function App() {
  return (
    <div className="App">
      <Carousel
        number={0}
        images={[
          'https://randomuser.me/api/portraits/women/1.jpg',
          'https://randomuser.me/api/portraits/men/1.jpg',
          'https://randomuser.me/api/portraits/women/2.jpg',
          'https://randomuser.me/api/portraits/men/2.jpg',
        ]}
      />
    </div>
  );
}

export default App;
