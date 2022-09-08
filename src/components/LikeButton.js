import { useEffect, useState } from 'react';
const LikeButton = () => {
  const [like, setLike] = useState(0);
  const [otherLike, setOtherLike] = useState(0);
  const arrColor = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];
  const [buttonColor, setButtonColor] = useState(arrColor[-1]);
  const [otherButtonColor, setOtherButtonColor] = useState(arrColor[-1]);

  const changeButton = () => {
    setButtonColor(
      arrColor[
        arrColor.indexOf(buttonColor) + 1 < arrColor.length
          ? arrColor.indexOf(buttonColor) + 1
          : 0
      ]
    );
  };
  const changeOtherButton = () => {
    setOtherButtonColor(
      arrColor[
        arrColor.indexOf(otherButtonColor) + 1 < arrColor.length
          ? arrColor.indexOf(otherButtonColor) + 1
          : 0
      ]
    );
  };

  useEffect(() => {
    changeButton();
  }, [like]);

  useEffect(() => {
    changeOtherButton();
  }, [otherLike]);
  return (
    <>
    <div className='d-flex justify-content-around align-items-center' style={{width:150,height:50}}>
      <button
        style={{ background: buttonColor, color: 'white' }}
        onClick={() => setLike(like + 1)}
      >
        {' '}
        {like} {like > 1 ? 'likes' : 'like'}
      </button>
      <button
        style={{ background: otherButtonColor, color: 'white' }}
        onClick={() => setOtherLike(otherLike + 1)}
      >
        {' '}
        {otherLike} {otherLike > 1 ? 'likes' : 'like'}
      </button>
    </div>
    </>
  );
};
export default LikeButton;
