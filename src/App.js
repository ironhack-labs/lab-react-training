import './App.css';
import {IdCard} from './components'
import { useState, useEffect } from "react"


function App() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
      fetch('berlin.json')
          .then((res) => res.json())
          .then((data) => {
            setPosts(data)
          })
          .catch((err) => {
            console.log(err.message)
          })
    }, [])

  return (
    <div className="App">
      <IdCard array={posts}/>
    </div>
  );
}

export default App;
