import React, {Fragment} from 'react'
import './IdCard.css'

export default function IdCard(props) {
    // console.log('this is props', props)
    return (
        <Fragment>
            <div className="id-container">
                <div className="images-container">
                    <img className="imagesId" src={props.picture} alt="portrate"/> 
                </div>
                <div className="data-container">
                    <p>Last Name: {props.lastName}</p>
                    <p>First Name: {props.firstName}</p>
                    <p>Gender: {props.gender}</p>
                    <p>Height: {props.height}</p>
                    <p>Birth: {props.birth.toDateString()}</p>
                </div>
            </div>
        </Fragment>
    )
}
