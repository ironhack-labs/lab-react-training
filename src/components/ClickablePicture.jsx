import charmander from "../assets/images/Charmander.jpeg"
import charmeleon from "../assets/images/Charmeleon.jpeg"
import charizard from "../assets/images/Charizard.jpeg"
import {useState} from "react"

function ClickablePicture() {
  const pokePics = [charmander, charmeleon, charizard];

  const [count, setCount] = useState(0);
  const evolve = () => {
    setCount((count + 1) % 3);
  }

  return (
    <img src={pokePics[count]} alt="pokemons" style={{width: "100px", cursor: "pointer"}}  onClick={evolve}/>
  )
}

export default ClickablePicture