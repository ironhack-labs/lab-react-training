import { useState } from "react"
import "../styles/SignupPage.css"

function SignupPage(props) {
    const [email, setEmail] = useState('')
    const [pwd, setPwd] = useState('')
    const [language, setLanguage] = useState('English')

    function Greetings(language) {
        if(language==="German") {
            return 'Hallo'
        }
        else if(language==="English") {
            return "Hello"
        }
        else if(language==="French") {
            return "Bonjour"
        }
    }

    function checkEmail(email) {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            return '#4BB543'
        }
        else {
            return 'red'
        }
    }

    function checkPwd(pwd) {
        if (/^(?=.*\d)(?=.*[-!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])([0-9a-zA-Z-!@#$%^&*]{8,32})$/.test(pwd)) {
            console.log('password test successful')
            return '#4BB543'
        }
        else {
            return 'red'
        }
    }


    return (
        <div className="SignupPage">
            <form>
                <div>
                    <label>
                        Email
                        <input style={{borderColor: checkEmail(email), outline: 'none'}} onChange={(input)=> setEmail(input.target.value)} type="email" placeholder="Your email" />
                        {checkEmail(email)==='#4BB543' ? <p className="p-0 m-0 text-success">You typed a valid email</p> : <p className="p-0 m-0 text-danger">Invalid email, please update</p>}
                    </label>
                    <label>
                        Password
                        <input style={{borderColor: checkPwd(pwd), outline: 'none'}} onChange={(input)=> setPwd(input.target.value)} type="password" placeholder="Your password" />
                        {checkPwd(pwd)==='#4BB543' ? <p className="p-0 m-0 text-success">Strong password</p> : <p className="p-0 m-0 text-danger text-start">Your password is too weak, add numbers and/or special characters</p>}
                    </label>
                    <label>
                        Nationality
                        <select onChange={e => {
                            console.log(e.target.value)
                            setLanguage(e.target.value)}} name="nationality" id="nationality">
                            <option value="German">German</option>
                            <option value="English">English</option>
                            <option value="French">French</option>
                        </select>
                    </label>
                    <button className="btn btn-primary mt-2 px-4">Sign up</button>
                    <br></br>
                    <p className="m-0 p-0">{Greetings(language)}!</p>
                    <p className="p-0">Your email address is <span className="text-bold">{email}</span></p>
                </div>
            </form>
        </div>

    )
}

export default SignupPage