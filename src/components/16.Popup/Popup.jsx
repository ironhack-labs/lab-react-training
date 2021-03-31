import React from 'react'
import './Popup.scss'

const Popup = ({ email, nationality, onClick }) => {
    const hi = (nationality) => {
        if (nationality === 'Spain') {
            return '!Hola!'
        } else if (nationality === 'France') {
            return 'Bonjour'
        } else if (nationality === 'USA') {
            return 'Hi there!'
        } else {
            return 'Hello'
        }
    }

    return (
        <div className="Popup">
                <div className="contentPopup">
                    <div className="btn-popup">
                        <button onClick={onClick}>x</button>
                    </div>
                    <div className="textPopup">
                        <h2>{ hi(nationality) }</h2>
                        <p>Your email is: { email }</p>
                    </div>
                </div>
        </div>
    )
}

export default Popup
