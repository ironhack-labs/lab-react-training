import React from 'react';
import '../assets/css/FacebookItem.css'

const FacebookItem = (props) => {
    const {
        firstName,
        lastName,
        country,
        img,
        isStudent,
        color
    } = props;
    return (
        <div className='FacebookItem' style={{backgroundColor: color}}>
            <img src={img} />
            <div>
                <h1>First name:<span className='FacebookSpan'> {firstName}</span></h1>
                <h1>Last name:<span className='FacebookSpan'> {lastName}</span></h1>
                <h1>Country:<span className='FacebookSpan'> {country}</span></h1>
                <h1>Type:<span className='FacebookSpan'> {isStudent ? 'Student' : 'Teacher'}</span></h1>
            </div>
        </div>)
}

export default FacebookItem