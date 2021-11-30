import React from 'react';
import { useState } from 'react';
import './App.css';

function App(props) {

  const [liked, setLiked] = useState(0)
  
  const likeHandler = () => setLiked(liked => liked + 1 )
  
  return (
      <div className="App">
        <header className="App-header">

          <button onClick={likeHandler}> {liked} Likes</button>

        </header>
      </div>
    );
  }
  
  export default App;
