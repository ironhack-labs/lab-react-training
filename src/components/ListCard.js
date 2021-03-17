import React from 'react'
import IdCard from './IdCard'
import '../assets/css/ListCard.scss'

const cardInfo = [
    {
        lastName: 'Doe',
        firstName: 'John',
        gender: 'male',
        height: 178,
        birth: new Date("1992-07-14"),
        img: {src: "https://randomuser.me/api/portraits/men/44.jpg", alt: "picture"},
    },
    {
        lastName: 'Delores',
        firstName: 'Obrien',
        gender: 'female',
        height: 191,
        birth: new Date("1994-05-10"),
        img: {src: "https://randomuser.me/api/portraits/women/44.jpg", alt: "picture"},
    }
]

const ListCard = () => {
    return(
        <div classname="ListCard">
            {cardInfo.map(info => {
                return(
                    <IdCard {...info} />
                )
            })}
        </div>
    )
}

export default ListCard