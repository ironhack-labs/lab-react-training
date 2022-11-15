import styled from 'styled-components';
import { FlexDiv, P } from './Styles';

function Rating({ children }) {
  const starFull = '\u2605';
  const starEmpty = '\u2606';

  return (
    <FlexDiv>
      <BiggerP>
        {starFull.repeat(Math.round(children)).padEnd(5, starEmpty)}
      </BiggerP>
    </FlexDiv>
  );
}
export default Rating;

const BiggerP = styled(P)`
  font-size: 24px;
`;
