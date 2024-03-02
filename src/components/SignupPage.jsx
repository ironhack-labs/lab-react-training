import React, {useState} from 'react'
import Greetings from './Greetings';

export default function SignupPage() {
  const [user, setUser] = useState({
    email: "",
    password: "",
    nationality: "en",
  });

  const [finalUser, setFinalUser] = useState({isCreated: false});

  const handleSubmit = (event) => {
    event.preventDefault();
    setFinalUser({...user, isCreated: true});

    setTimeout(() => {
        setUser({
            email: "",
            password: "",
            nationality: "en",
        })
    }, 1)
  }

  const handleChange = (event) => {
    console.log({[event.target.name]: event.target.value});
    setUser((prevState) => ({...prevState,[event.target.name]: event.target.value}))
  }


  return (
    <div>
        <form className="sign-up-form" onSubmit={handleSubmit}>
            <div>
                <label>Email</label>
                <input type="text" name="email" value={user.email} onChange={handleChange}/>
            </div>

            <div>
                <label>Password</label>
                <input type="password" name="password" value={user.password} onChange={handleChange} className={(user.password.length < 5 && user.password.length != 0) && "red-border"} />
                {(user.password.length < 5 && user.password.length != 0) && <div className="weak-pass-text">Your password is too weak</div>}
            </div>

            <div>
                <label>Nationality</label>
                <select name="nationality" onChange={handleChange}>
                    <option value="en">English</option>
                    <option value="de">German</option>
                    <option value="fr">French</option>
                    <option value="es">Spanish</option>
                </select>
            </div>

            <button className="button">Sign Up</button>
        </form>

        {finalUser.isCreated &&
        <div className="user-info">
            <Greetings lang={finalUser.nationality} />
            <span><b>Your email address is: </b>{finalUser.email}</span>
            <span><b>Your password is: </b>{finalUser.password}</span>
        </div>}
    </div>
  )
}
