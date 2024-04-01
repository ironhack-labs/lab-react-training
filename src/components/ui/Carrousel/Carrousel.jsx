import { useState } from "react";
import './Carrousel.css';

function Carrousel({ images }) {

  const [element, changeElement] = useState(0)

  const up = () => {
    if (element < images.length - 1){
      changeElement(element + 1);
    }
  }

  const down = () => {
    if (element >= 1) {
      changeElement(element - 1);
    }
  }

  return (
    <div className="carrousel">
      <button onClick={down} className="button1">Left</button>
      <img src={images[element]} />
      <button onClick={up} className="button2">Right</button>
    </div>
  );
}

export default Carrousel;