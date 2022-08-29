import { useState } from 'react';

import './ClickablePicture.css';

function ClickablePicture({ image, imageClicked }){
  const [clicked, setClicked] = useState(false);
  const handleClick = () => setClicked(clickedPrev => clickedPrev ? false : true);
  return (
    <div className="clickable-picture">
        <img src={require('../../assets/images/' + (clicked ? imageClicked : image))} alt="" onClick={handleClick}/>
    </div>
  );
}

export default ClickablePicture;