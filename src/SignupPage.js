import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


 const SignupPage = () => {

    return (
        <div>
        <form>
        <label>Email
        <input type="text" name="email" />
        </label>


        <label>Password</label>
            <input/>

            <label>Nationality</label>
            <input/>
            <input type="submit" value="Submit" />
        </form>
        </div>
    )
}
export default SignupPage
