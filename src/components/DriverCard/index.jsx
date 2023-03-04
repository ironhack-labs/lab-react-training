import { useState } from 'react';
import LikeButton from '../LikeButton';
import ClickablePicture from '../ClickablePicture';

function DriverCard(props) {
  const { id, name, rating, img, car } = props;
  const { model, licensePlate } = car;
  const [likes, setLikes] = useState(0);
  const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];
  const [colorIndex, setColorIndex] = useState(0);
  const handleClick = () => {
    const nextColorIndex = (colorIndex + 1) % colors.length;
    setColorIndex(nextColorIndex);
    setLikes(likes + 1);
  };
  const stars = '★'.repeat(Math.round(rating)) + '☆'.repeat(5 - Math.round(rating));
  const style = {
    backgroundColor: colors[colorIndex],
    color: 'white',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.3)',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: '20px',
  };
  const imgStyle = {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    marginRight: '20px',
  };
  return (
    <div style={style}>
      <ClickablePicture
        img='/maxence.png'
        imgClicked="/maxence-glasses.png"
        style={imgStyle}
      />
      <div>
        <h2>{name}</h2>
        <div>{stars}</div>
        <p>
          {model} - {licensePlate}
        </p>
      </div>
      <LikeButton likes={likes} onClick={handleClick} id={id} />
    </div>
  );
}

export default DriverCard;
