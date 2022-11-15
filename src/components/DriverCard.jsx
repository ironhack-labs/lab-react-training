import styled from 'styled-components';
import Rating from './Rating';
import { FlexDiv } from './Styles';

function DriverCard({ name, rating, img, car }) {
  return (
    <DriverCardDiv>
      <FlexDiv>
        <RoundImg src={img} alt="" />
        <TextContent>
          <h3>{name}</h3>
          <Rating>{rating}</Rating>
          <p>
            {car.model}
            <span> - {car.licensePlate}</span>
          </p>
        </TextContent>
      </FlexDiv>
    </DriverCardDiv>
  );
}
export default DriverCard;

const RoundImg = styled.img`
  object-fit: cover;
  border-radius: 50%;
  height: 100px;
  width: 100px;
`;

const DriverCardDiv = styled.div`
  width: 330px;
  height: fit-content;
  border-radius: 10px;
  margin: 10px;
  padding: 20px;
  display: flex;
  color: white;
  background-color: #455eb5;
  text-align: left;
`;

const TextContent = styled.div`
  margin-left: 20px;
  > * {
    margin: 0;
  }
`;
