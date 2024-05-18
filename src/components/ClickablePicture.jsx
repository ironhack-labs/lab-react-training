import { useState } from 'react';
import PropTypes from 'prop-types';
import "./ClickablePicture.css"; 


const ClickablePicture = ({ img, imgClicked }) => {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked);
    };

    if (isClicked) {
        return (
            <div className='overlap'>
        <img className='Dog'
        src={img} 
        onClick={handleClick}
        style={{ cursor: 'pointer' }}
        ></img>


   <img className='glasses'
         src={imgClicked}
        onClick={handleClick}
        style={{ cursor: 'pointer' }}
        ></img>


        </div>

 
        )
    } else {
        return (
            <div className='overlap'>
            <img className='Dog'
                src={img}
                onClick={handleClick}
                style={{ cursor: 'pointer' }}
            ></img>
            </div>

        )

    }


};

ClickablePicture.propTypes = {
    img: PropTypes.string,
    imgClicked: PropTypes.string,
};

export default ClickablePicture;