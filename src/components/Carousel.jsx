import {useState} from 'react'

//it works, but is it a good solution?? having vars outside the component?
let count = 0;

function Carousel(props) {
    const {images} = props;
    const [image, setImage] = useState(images[0]);

    const goRight = () => { 
        count = (count +1) % 4
        setImage(images[count])
    }
    const goLeft = () => {
        if(count === 0){
            count = images.length -1;
            setImage(images[count]);
        } else{
            count --
            setImage(images[count])
        }
    }
    
    
  return (
    <div>
        <img src={image} alt="pics" />
        <div>
            <button onClick={goLeft}>goLeft</button>
            <button onClick={goRight}>goRight</button>
        </div>
    </div>
  )
}

export default Carousel