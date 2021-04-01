import React from 'react';
import BoxItem from '../components/BoxItem'

const Card = [
    {
        id: '1',
        lastName: 'Doe',
        firstName: 'John',
        gender: 'Male',
        height: 178,
        birth: '1992-07-14',
        picture: 'https://randomuser.me/api/portraits/men/44.jpg'
    },

    {
        id: '2',
        lastName: 'Delores',
        firstName: 'Obrien',
        gender: 'female',
        height: 172,
        birth: '1988-05-11',
        picture: 'https://randomuser.me/api/portraits/women/44.jpg'
    }
]

const CardBox = () => {
    
    return(
        <div className="CardBox">
            {Card.map(card => {
                return (
                  <BoxItem {...card} key={card.id}/>
                )
            })}
        </div>
    )
}

export default CardBox