import React from 'react'
import Id from "./Id"

const CardList = (props) => {
    const showIds = () =>
    props.cardList.map((id) => (
        <Id 
            id={id}
        />
    ));
    return showIds();
}

export default CardList;