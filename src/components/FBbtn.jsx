import React from 'react'

export default function FBbtn(props) {
    return (
        <div>
            <button 
                onClick={props.filterProfiles}
            >
                {props.country}
            </button>
        </div>
    )
}
