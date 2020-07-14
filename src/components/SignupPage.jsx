import React, { useState } from 'react'
import Greetings from './Greetings';

export default function SignupPage() {

    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');
    const [nationality, setNationality] = useState('');

    const emailRegEx = /^\S+@\S+\.\S+$/;    
    const pwdRegEx = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/

    const handleChanges = (path, type, updateFn) => {
        if (path.value.match(type)) {
            updateFn(path.value)
            path.className = "form-control is-valid"
        } else if (path.value.length > 5) {
            path.className = "form-control is-invalid"
        } else {
            path.className = "form-control"
        }
    }

    const errorMsg = (field) => {
        const pwdError = <p className="text-danger">
        The password must contain a lowercase letter, a capital letter, a number and at least 6 characters
        </p>
        const emailError = <p className="text-danger">
        Wrong email
        </p>
        switch (field) {
            case 'pwd':
                return pwdError;
            default:
                return emailError;
        }
    }

    return (
        <form className="col-4 d-flex flex-column ">
            <label htmlFor="">
                Email
            </label>
            <input 
                type="email" 
                placeholder="example@example.com" 
                name="email" 
                className="form-control"
                onChange={e => handleChanges(e.target, emailRegEx, setEmail)}/>
                {email ? '' : errorMsg()}
            <label htmlFor="">
                Password
            </label>
            <input 
                type="password" 
                name="pwd"  
                placeholder="Type your password here"
                className="form-control"
                onChange={e => handleChanges(e.target, pwdRegEx, setPwd)}/>
            {pwd ? '' : errorMsg('pwd')}

            <select name="nationality" onChange={e => setNationality(e.target.value)} className="form-control">
                <option value="es">España</option>
                <option value="de">Alemania</option>
                <option value="fr">Francia</option>
                <option value="en">Reino Unido</option>
            </select>
            <input type="submit" value="Save" className="form-control btn btn-success mt-2"/>
            
            <p>Your email is {email}</p>
            <p>Your password is {pwd}</p>
            <Greetings lang={nationality}/>
        </form>
    )
}
