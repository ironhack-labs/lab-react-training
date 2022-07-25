import styled from 'styled-components'
import Rating from './Rating'

const DriverCard = ({ name, rating, img, car }) => {
  return (
    <Wrapper>
      <ImgContainer img={img}></ImgContainer>
      <Info>
        <h3>{name}</h3>
        <Rating size="30" color="white">
          {rating}
        </Rating>
        <p>{`${car.model} - ${car.licensePlate}`}</p>
      </Info>
    </Wrapper>
  )
}

export default DriverCard

const Wrapper = styled.div`
  width: 60%;
  padding: 1.5rem 0;
  background-color: #455eb5;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0.5rem;
  border-radius: 20px;
  color: white;
  column-gap: 0.8rem;
`
const ImgContainer = styled.div`
  width: 150px;
  height: 150px;
  background-image: ${({ img }) => `url(${img})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  overflow: hidden;
  border-radius: 99999px;
`
const Info = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
  h3,
  p {
    margin: 0;
  }
`
