import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

function Rating({ children }) {
  const numberStars = Math.round(children);

  let items = [];

  //map through the array with empty spaces based on the number of children passed as a prop. return filled stars based on the number passed as argument.
  items = [...Array(numberStars)].map((item) => {
    return <p key={uuidv4()}>&#9733;</p>;
  });

  while (items.length < 5) {
    items.push(<p key={uuidv4()}>&#9734;</p>);
  }

  return (
    <StarRating>
      {' '}
      {items.map((item) => {
        return item;
      })}
    </StarRating>
  );
}

const StarRating = styled.p`
  display: flex;
  margin: 0;
  font-size: 4rem;
  line-height: 0px;
  padding: 0px;
`;

export default Rating;
