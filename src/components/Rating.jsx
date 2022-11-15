import styled from 'styled-components';
import { FlexDiv, P } from './Styles';

function Rating({ children }) {
  const starFull = '\u2605';
  const starEmpty = '\u2606';

  return (
    <FlexDiv>
      <LargerP>
        {starFull.repeat(Math.round(children)).padEnd(5, starEmpty)}
      </LargerP>
    </FlexDiv>
  );
}
export default Rating;

const LargerP = styled(P)`
  font-size: 24px;
`;
