function ClickablePicture( {img, imgClicked }) {
    const changeImg = (() => {
        const currentImage = document.getElementById('diplayedImg');

        if (currentImage.src.match(img)) {
            currentImage.src = img
        } else {
            currentImage.src = imgClicked
        }
    })

    return (
      <div className="clickablePicture-box">
        <img src={img} alt="photo" id="diplayedImg" onClick={changeImg} />
      </div>
    );
  }
  
  export default ClickablePicture;