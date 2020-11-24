import React from 'react'
import DriverCard from "./DriverCard"

const DriverCardList = (props) => {
    const showDriverCards = () =>
    props.driverCardList.map((driverCard) => (
        <DriverCard 
            driverCard={driverCard}
        />
    ));
    return showDriverCards();
}

export default DriverCardList;