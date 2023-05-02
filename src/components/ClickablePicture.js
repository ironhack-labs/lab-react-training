import imgNow from '../assets/images/maxence.png';
import imgClicked from '../assets/images/maxence-glasses.png';


function ClickablePicture() {
    return (
      <div className="ClickablePicture">
        <img src={imgNow} alt="maxWithoutGlasses" width="200" />
        <img src={imgClicked} alt="maxWithGlasses" width="200" />
  
      </div>
    );
  }
  
  export default ClickablePicture;
  

