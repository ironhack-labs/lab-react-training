import React from 'react'

function IdCard(props) {


    let cardStyle={
        display:'flex',
        flexDirection:'row',
        padding: '25px',
        marginTop: '20px',
        marginLeft: '20px',
        marginRight:'20px',  
        border:'solid 1px black'
    }

    let dataStyle={
        paddingLeft: '25px'  
    }

    return (
        <div style={cardStyle}>
            <img src={props.picture} alt='userPic'/>
            <div style={dataStyle}>
                <p><strong>First Name: </strong>{props.firstName}</p>
                <p><strong>Last Name: </strong>{props.lastName}</p>
                <p><strong>Gender: </strong>{props.gender}</p>
                <p><strong>Height: </strong>{props.height}</p>
                <p><strong>Birth: </strong>{props.birth}</p>
            </div>    
        </div>
    )
};

export default IdCard
