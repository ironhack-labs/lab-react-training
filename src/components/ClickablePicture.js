import React, {useState} from 'react'

export default function ClickablePicture(props) {
    const [clicked, setClicked] = useState('false');

    const handleClick = () => setClicked(!clicked);
  
    return (
      <div className='clickable'style={{width: '200px', height: '200px'}}>
        <img className='clickable-img' 
          onClick={handleClick}
          src={clicked ? props.img: props.imgClicked}
          alt="max"
        />
      </div>
    );
}

