import { useState, useEffect } from "react";
import './Random.css'

const Random = (props) => {
  let { min, max } = props;

  const [numberRandom, setRandom] = useState(0);

  useEffect(() => {
    setRandom(parseInt(Math.random() * (max - min) + min));
  }, []);

  return (
    <p id='random-item'>Random value betwee {min} and {max} {'=>'} {numberRandom}</p>
  )

}

export default Random