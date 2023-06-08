function ClickablePicture( {img, imgClicked }) {
    let wasClicked = false;
    const changeImg = (() => {
        const currentImage = document.getElementById('diplayedImg');

        if (wasClicked === false) {
            currentImage.src = img;
            wasClicked = true;
        } else {
            currentImage.src = imgClicked
            wasClicked = false;
        }
    })

    return (
      <div className="clickablePicture-box">
        <img src={img} alt="photo" id="diplayedImg" onClick={changeImg} />
      </div>
    );
  }
  
  export default ClickablePicture;