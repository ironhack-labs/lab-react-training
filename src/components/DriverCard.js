import styled from 'styled-components'

import Rating from './Rating'

const DriCard = styled.div`
    background-color: #425cbb;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    margin: 5px;
`;

const DriImage = styled.img.attrs({
    alt: props => props.title,
    src: props => props.source
  })`
    border-radius: 50%;
    width: 75px;
    margin-right: 15px
`;

const DriverCard = ({name, rating, image, car}) =>{
    
    return (
        <DriCard>
            <DriImage source={image} title={name}></DriImage>
            <div>
                <h4>{name}</h4>
                <Rating>{rating}</Rating>
                <p>
                    <span>{car.model}       </span>
                    <span>{car.licensePlate}</span>
                </p>
            </div>
        </DriCard>
    )
}

export default DriverCard