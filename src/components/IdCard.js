import React from 'react'


function IdCard(props) {
    const {lastName,firstName,gender,height,birth,picture} = props
    return (
            <div className='card'>
                <img src={picture} alt="perro"/>
                <p>lastName{lastName} </p>
                <p>firstName{firstName}</p>
                <p>gender{gender}</p>
                <p>height{height}</p>
                <p>birth{birth.toString()}</p>
            </div>
    );
}

export default IdCard