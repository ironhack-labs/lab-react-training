import React, {useState} from 'react';

const ClickablePicture = (props) => {
  const [ state, setState] = useState({
    imgPath: props.img,
    toggleBtn: true
  })

  const imgClick = () => {
    if (state.toggleBtn) return setState({
      imgPath: props.imgClicked,
      toggleBtn: false
    })
    return setState({
      imgPath: props.img,
      toggleBtn: true
    })
  }

  return (  
    <div className="picture-container">
      <img onClick={imgClick} src={state.imgPath} alt=""/>
    </div>
  );
}

export default ClickablePicture;