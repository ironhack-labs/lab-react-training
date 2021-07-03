import React, {useState} from 'react';

import './ClickablePicture.css';

const ClickablePicture = ({title}) => {
    let [clicked, setClicked] = useState(false);

    return (
      <article className="ClickablePicture">
        <h2>{title}</h2>
        <div
          className="ClickablePicture__wrapper"
          onClick={() => setClicked((prevClick) => !prevClick)}
        >
          <img
            src={
              !clicked ? '../img/biggie.png' : '../img/biggie-with-stars.png'
            }
            alt={!clicked ? 'big papa' : 'big papa with stars'}
          />
        </div>
      </article>
    );
}
 
export default ClickablePicture;