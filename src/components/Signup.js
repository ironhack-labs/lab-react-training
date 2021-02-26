import React, {useState} from 'react'

export default function SignupPage() {
    const [newUser, setnewUser] = useState({
        email: "",
        password: "",
        nationality: ""
    });
    const [user, setUser] = useState([]);
    const [saveUser, setSaveUser] = useState({
        email: "",
        password: "",
        nationality: ""
    });
    const manejoDeCambios = (e) => {
        setnewUser({
            ...newUser,
            [e.target.name]:e.target.value
        })
        console.log(e.target.value)
    }
    const submitForm = (e) => {
        e.preventDefault()
        setUser([
            ...user,
            newUser
        ])
        setSaveUser({
            email: newUser.email,
            password: newUser.password,
            nationality: newUser.nationality
        }
        )

        setnewUser({
            email: "",
            password: "",
            nationality:""
        })
    }
    return (
        <div>
        <form>
            <label>Email</label>
            <input type="email" name="email" onChange={(e) => manejoDeCambios(e)} value={newUser.email} />
            <label>Password</label>
            <input type="password" name="password" onChange={(e) => manejoDeCambios(e)} value={newUser.password}/>
            <label>Nationality</label>
            <input type="" name="nationality" onChange={(e) => manejoDeCambios(e)} value={newUser.nationality}/>
            <button onClick={(e) => submitForm(e)}>SignUp</button>
            <p>{}</p>
            <p>Your email address is {saveUser.email}</p>
        </form>
        </div>
    )
}