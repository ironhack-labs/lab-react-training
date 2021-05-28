import React from 'react'

export default function IdCard(props) {
    console.log(props.birth)
    return (
        <div class='border border-dark d-flex m-4'>
            <img src={props.picture} alt=""/>
            <div class='p-2'>
                <div>Last Name: {props.lastName}</div>
                <div>First Name: {props.firstName}</div>
                <div>Gender: {props.gender}</div>
                <div>Height: {props.height}</div>
                {/* <div>Birth: {props.birth.Date()}</div> */}
            </div>

            
        </div>
    )
}
