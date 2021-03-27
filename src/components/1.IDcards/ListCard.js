import React from 'react'
import IdCard from './IdCard'
import './ListCard.scss'
import { cardInfo } from '../../assets/data'

const ListCard = () => {
    return(
        <div className="ListCard">
            { cardInfo.map(info => {
                return(
                    <IdCard key={info.id} {...info} />
                )
            })}
        </div>
    )
}

export default ListCard