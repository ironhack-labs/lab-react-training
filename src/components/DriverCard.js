import styled from 'styled-components';
import Rating from './Rating';

function DriverCard({ name, rating, img, car: { model, licensePlate } }) {
  return (
    <Card>
      <Container>
        <Image alt="profile" src={img}></Image>
        <Content>
          <h1>{name}</h1>
          <Rating>{rating}</Rating>
          <h2>
            {model} {'-'} {licensePlate}
          </h2>
        </Content>
      </Container>
    </Card>
  );
}

const Card = styled.div`
  width: 100%;
  height: 25rem;
  background-color: #5f5dd4;
  margin: 2rem;
  border-radius: 2rem;
  display: flex;
`;

const Image = styled.img`
  width: 20rem;
  height: 20rem;
  border-radius: 50%;
  display: inline-block;
  margin: 30px;
`;

const Container = styled.div`
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;

const Content = styled.div`
  text-align: left;
  color: white;
`;

export default DriverCard;
