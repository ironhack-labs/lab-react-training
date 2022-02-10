import { useEffect, useState } from "react";

function Carousel(props) {
    const { images } = props;
    const [counter, setCounter] = useState(0);
    const [image, setImage] = useState(images[counter]);

    const handleImgChange = (dir) => {
        dir === 'right'
            ? setCounter((prevCounter) => (prevCounter + 1) % 4)
          : setCounter((prevCounter) => (prevCounter + 1) % 4);
    }

    useEffect(() => {
        setImage(images[counter])
    }, [counter])

    return (
      <div className="Carousel">
        <button
          onClick={() => {
            handleImgChange('left');
          }}
        >
          Left
        </button>
            <img alt="Carousel" src={image} />
        <button
          onClick={() => {
            handleImgChange('right');
          }}
        >
          Right
        </button>
      </div>
    );
}

export default Carousel;