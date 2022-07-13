import React from 'react'

export default function IdCard(props) {

    return (
        
        <div class="task1-1">

            <div class="task1-2">
                <span>{props.theUser.lastName} {props.theUser.firstName}</span>
                <span>{props.theUser.gender}</span>
                <span>{props.theUser.height}</span>
                <span>{props.theUser.birth.toString().slice(4, 16)}</span>
            </div>

            <div>
                <img class="task1-photo" height="128px" width="128px" src={props.theUser.picture} alt="pic" />
            </div>

        </div>
        
    )
}



