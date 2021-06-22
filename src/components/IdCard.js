import React from 'react'

export default function IdCard(props) {
    console.log(props.birth)
    return (
        <div class='idCard'>
            <img className="picture-id" src={props.picture} alt=""/>
            <div className='data-id'>
                <div>Last Name: {props.lastName}</div>
                <div >First Name: {props.firstName}</div>
                <div>Gender: {props.gender}</div>
                <div> Height: {props.height}</div>

                </div>
        </div>
    )
}
