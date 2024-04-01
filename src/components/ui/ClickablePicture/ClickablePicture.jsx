import {useState} from 'react';
import './ClickablePicture.css';

function ClickablePicture({ img, imgClicked }) {
  const [state, setState] = useState(0);

  const actualState = () => {
    setState(state === 0 ? state + 1 : state - 1);
  }

  return (
    <div>
      <img src={img} onClick={actualState} alt='Pickle Rick' className='clickablepicture-rick'/>
      <img src={imgClicked} alt='Glasses' onClick={actualState} className='clickablepicture-glasses' style={{display: state === 0 ? 'none' : 'block'}}/>
    </div>
  );
}

export default ClickablePicture;