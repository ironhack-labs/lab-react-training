import { FlexDivWithBorder, P } from './Styles';

function Random({ min, max }) {
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return (
    <FlexDivWithBorder>
      <P>
        Random value between {min} and {max} =&gt; {randomNumber}
      </P>
    </FlexDivWithBorder>
  );
}
export default Random;
