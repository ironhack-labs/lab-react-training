import React from 'react'
import moment from 'moment'

const IdCard = props => {
    return (
        <article className="card">
            <img className="card-pic" src={props.picture} alt="pic" />
            <div className="card-details">
               <p><b>First name: </b>{props.firstName}</p>
               <p><b>Last name: </b>{props.lastName}</p>
               <p><b>Gender: </b>{props.gender}</p>
               <p><b>Height: </b>{props.height / 100}m</p>
               <p><b>Birth: </b>{moment(props.birth).format('dddd MMM Do YYYY')}</p>
            </div>
        </article>
    )
}

export default IdCard
