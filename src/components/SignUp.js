import React, {useState} from 'react'

export default function SignUp() {

    const [signUpInfo, setSignUpInfo] = useState({
        email: "",
        password: "",
        nacionality: ""
    })

    const [newSignUp, setNewSignUp] = useState({
        email: "",
        password: "",
        nacionality: "en"
    })

    function handleChange(event) {
       
        setNewSignUp({...newSignUp, [event.target.name]:event.target.value})
    }

    function submit (e) {
        e.preventDefault()
        setSignUpInfo(newSignUp)
        setNewSignUp({
            email: "",
            password: "",
            nacionality: "en"
        })
    }

    function changeLang(idioma) {
        if(idioma === 'en') {
            return 'Hello'
        } else if(idioma === 'de') {
            return 'Hallo'
        } else {
            return 'Bonjour'
        } 
    }

    return (
        <>
          <div>
              <form>
                  <label>Email</label>
                  <input name="email" type='email' value={newSignUp.email} onChange={(e) => handleChange(e)} />
                  <label>Password</label>
                  <input name="password" type='password' value={newSignUp.password} onChange={(e) => handleChange(e)} />
                  <label>Nacionality</label>
                  <select name="nacionality" value={newSignUp.nacionality} onChange={(e) => handleChange(e)}>
                      <option value='en'>English</option>
                      <option value='de'>German</option>
                      <option value='fr'>French</option>
                  </select>
                  <button onClick={(e) => submit(e)}>Submit</button>
              </form>
          </div>
          <div>
                <p>{changeLang(signUpInfo.nacionality)}</p>
                <p>{signUpInfo.email}</p>
          </div>  
        </>
    )
}
