import React, { useState } from 'react';
import styled from 'styled-components';

const ButtonStyled = styled.button`
  background-color: ${(props) => props.colorBg};
  border: none;
  margin: 0.5rem;
`;

function LikeButton() {
  let [counter, setCounter] = useState(0);

  return (
    <ButtonStyled
      onClick={() => {
        setCounter((counter += 1));
      }}
      colorBg={() =>
        ['purple', 'blue', 'green', 'yellow', 'orange', 'red'][counter % 6]
      }
    >
      {counter} Likes
    </ButtonStyled>
  );
}

export default LikeButton;
