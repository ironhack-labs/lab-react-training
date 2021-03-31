import React, { useState } from 'react'
import Popup from '../16.Popup/Popup'
import './SignupPage.scss'

const SignupPage = () => {
    const [showPopup, setPopup] = useState(false)
    const [nationality, setNationality] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    // TODO: Aprender a reutilizar con e.target.name & useState
    const handleFormEmail = (e) => {
            setEmail(e.target.value)
    }
    const handleFormNationality = (e) => {
        setNationality(e.target.value)
    }
    const handleFormPassword = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }
    const handlePopUp = () => {
        showPopup
        ? setPopup(false)
        : setPopup(true)
    }

    return (
        <div className="SignupPage">
            <form onSubmit={handleSubmit} >
                <div className="inputs15">
                    <label>Email</label>
                    <input 
                        name="email"
                        value={email}
                        placeholder='email'
                        onChange={handleFormEmail}
                    />
                </div>
                <div className="inputs15">
                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        value={password}
                        placeholder='password'
                        onChange={handleFormPassword}
                    />
                </div>
                <div className="inputs15">
                    <label>Nationality</label>
                    <select
                        name="nationality"
                        placeholder='email'
                        value={nationality}
                        onChange={handleFormNationality}
                    >
                        <option value="Spain">Spain</option>
                        <option value="France">France</option>
                        <option value="USA">USA</option>
                    </select>
                </div>
                <button 
                    type="submit"
                    onClick={handlePopUp}
                >
                    Sumbit
                </button>
            </form>
            <div>
                { showPopup && <Popup email={ email } nationality={ nationality } onClick={handlePopUp} />}
            </div>
        </div>
    )
}

export default SignupPage
