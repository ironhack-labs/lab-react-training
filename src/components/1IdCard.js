import React from 'react'

const IdCard = (props) => {
    const cardStyle = {
        display: 'flex',
        flexDirection: 'row',
        border: '2px solid black',
        alignItems: 'flex-start',
        width: '400px'
        // height: 'auto'
    }
    const letterStyle = {
        lineHeight:'5px', 
        textAlign:'left', 
        display: 'inline-block', 
        verticalAlign: 'top',
    }
    return (
        <div style={cardStyle}>
            <div style={{textAlign: 'right'}}>
                <img style={{height:'150px', padding: '3px'}} src={props.picture} alt='Profile'/>
            </div>
            <div style={letterStyle}>
                <p><strong>First Name:</strong> {props.firstName}</p>
                <p><strong>Last Name:</strong> {props.lastName}</p>
                <p><strong>Gender:</strong> {props.gender}</p>
                <p><strong>Height:</strong> {props.height}</p>
                <p><strong>Birth:</strong> {props.birth}</p>
            </div>
        </div>
    )
}

export default IdCard