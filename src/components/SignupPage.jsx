import { useState } from "react"
import Greetings from "./Greetings"

function SignupPage(){
    const [greet, setGreet] = useState("en")
    const [email, setEmail]= useState("")
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    
    

    return(
        <div>
            <div className="card">
                <form>
                    <p>Email</p>
                    <div style={{ width: "500px" }}>
                        <input type="email" onChange={(e)=>{setEmail(e.target.value)}}/>
                    </div>
                    <p>Password</p>
                    <div style={{ width: "500px" }}>
                        <input type="text"
                        />
                    </div>
                    <p>Nationality</p>
                    <select onChange={(e)=>{
                        setGreet(e.target.value)
                    }}>
                        <option value="en">English</option>
                        <option value="de">German</option>
                        <option value="fr">French</option>
                    </select>
                    <button onClick={()=>{}}>
                        Sign up
                    </button>
                </form>

                <hr />
                <Greetings lang={greet}/>
                <p>Your email address is: {email}</p>
                <p>Your email address is {emailRegex.test(email) ? "correct": "incorrect"}</p>
            </div>
        </div>
        
    )

}

export default SignupPage