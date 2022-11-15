import styled from 'styled-components';
import { FlexDivWithBorder, P, BoldSpan } from './Styles';

function IdCard({ lastName, firstName, gender, height, birth, picture }) {
  const addDotInHeight = (num) => {
    return [num.toString().slice(0, 1), '.', num.toString().slice(1)].join('');
  };

  return (
    <FlexDivWithBorder>
      <Img src={picture} alt="profile" />
      <DescriptionDiv>
        <P>
          <BoldSpan>First name:</BoldSpan> {firstName}
        </P>
        <P>
          <BoldSpan>Last name:</BoldSpan> {lastName}
        </P>
        <P>
          <BoldSpan>Gender:</BoldSpan> {gender}
        </P>
        <P>
          <BoldSpan>Height:</BoldSpan> {addDotInHeight(height)}m
        </P>
        <P>
          <BoldSpan>Birth:</BoldSpan> {birth.toDateString()}
        </P>
      </DescriptionDiv>
    </FlexDivWithBorder>
  );
}
export default IdCard;

const DescriptionDiv = styled.div`
  text-align: start;
  margin-left: 5px;
`;

const Img = styled.img`
  width: auto;
  height: 100%;
`;
