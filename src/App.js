import './App.css';
import {BoxColor, CreditCard, Greetings, IdCard, Random, Rating} from './components'
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
    <>
      <div className="App">
        <IdCard array={posts}/>
      
        <Greetings personName="Amanda" />
        
        <Random  min={5} max={10}/>
        <BoxColor hex={"#80ff00"} />

        <CreditCard 
          type="Visa" 
          bgColor={"#80ff00"} 
          number={"2306 5009 5335 3006"} 
          expirationMonth={"04"} 
          expirationYear={"25"}
          owner={"Amanda L H Pereira"}
          bank = {"Inter"}
          
        />

        <Rating rat={4} />
      </div>

    
    </>


  );
}

export default App;
