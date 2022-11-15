import { useState } from 'react';
import styled from 'styled-components';

function Carousel({ images }) {
  const [imageNo, setImageNo] = useState(images[0]);

  const handlePrevClick = () => {
    if (images.indexOf(imageNo) === 0) {
      setImageNo(images[3]);
    } else setImageNo(images[images.indexOf(imageNo) - 1]);
  };

  const handleNextClick = () => {
    if (images.indexOf(imageNo) === images.length - 1) {
      setImageNo(images[0]);
    } else setImageNo(images[images.indexOf(imageNo) + 1]);
  };

  return (
    <ImageContainer>
      <img src={imageNo} alt="img" />
      <LeftButton onClick={() => handlePrevClick()}></LeftButton>
      <RightButton onClick={() => handleNextClick()}></RightButton>
    </ImageContainer>
  );
}
export default Carousel;

const Button = styled.button`
  background: rgba(255, 255, 255, 0);
  width: 10%;
  height: 100%;
  border: none;
  position: absolute;
  transition: 0.3s;
  &:hover {
    background: rgba(255, 255, 255, 0.5);
  }
  &:active {
    background: rgba(255, 0, 255, 0.7);
  }
`;

const ImageContainer = styled.div`
  height: 200px;
  margin-left: 10px;
  position: relative;
  display: inline-block;
  > img {
    height: 100%;
  }
`;

const LeftButton = styled(Button)`
  left: 0;
  border-radius: 0 50% 50% 0;
`;
const RightButton = styled(Button)`
  right: 0;
  border-radius: 50% 0 0 50%;
`;
