import React, { useState } from 'react'
import './SignupPage.scss'

const SignupPage = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [nationality, setNationality] = useState('')
    const [formsubmit, setFormsubmit] = useState(false)

    const salu2 = {
        en: 'Hello',
        fr: 'Salut',
        de: 'Hallo'
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handlePass = (e) => {
        setPassword(e.target.value)
    }

    const handleNationality = (e) => {
        setNationality(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setFormsubmit(true)
    }

    return (
        <div className="SignupPage">
            <form onSubmit={ handleSubmit }>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" value={email} onChange={ handleEmail } />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" value={password} onChange={ handlePass } />
                </div>
                <div>
                    <label htmlFor="nationality">Nationality</label>
                    <select name="nationality" id="nationality" value={nationality} onChange={ handleNationality }>
                        <option value="fr">France</option>
                        <option value="en">England</option>
                        <option value="de">Denmark</option>
                    </select>
                </div>
                <div>
                    <button type="submit">Enviar formulario</button>
                </div>
            </form>

            { formsubmit && (
                <>
                    <p>{ salu2[nationality] }</p>
                    <p>Your email adress is { email }</p>
                </>
            ) }
        </div>
    )
}

export default SignupPage
