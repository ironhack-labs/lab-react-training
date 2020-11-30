import React from 'react'

export default function StudentsDetail(props) {
    return (
        <div>
            {props.detail.name}
            <button onClick={ () =>{ props.deleteHandler(props.detail.id) }}>Delete</button>
        </div>
    )
}