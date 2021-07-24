import React, { useState } from "react";

function SignUpPage(){
    const [validEmail, setValidEmail] = useState(false);
    const [strongPassword, setStrongPassword] = useState(false);
    const [nacionality, setNacionality] = useState('Unknown');

    let languages ={
        en: "English",
        de: "German",
        fr: "French"
    }

    const handleEmailChange = (event) => {
        console.log(event.target.value)
        if(event.target.value.lenght > 5) {
            setValidEmail(true);
        }else{
            setValidEmail(false);
        }
    }

    const handlePasswordChange = (event) =>{
        console.log(event.target.value)
        if(event.target.value.lenght > 10){
            setStrongPassword(true);
        }else{
            setStrongPassword(false);
        }
    }

    const handleNacionalityChange = (event) =>{
        setNacionality(languages[event.target.value])
    }

    return(
        <div>
            <input onChange={handleEmailChange} style={{backgroundColor: `${setValidEmail ? 'green' : 'red'}` }} type="email" name="email"> </input>
            {validEmail && <p> Your email is valid. </p>}
            <input onChange={handlePasswordChange} style={{backgroundColor: `${strongPassword ? 'green' : 'red'}` }} type="password" name="password"> </input>
            {!strongPassword && <p> Your password is too weak. </p>}
            <select onChange={handleNacionalityChange}>
                <option value="fr"> French </option>
                <option value="en"> English </option>
                <option select value="de"> German </option>
            </select>
            <p> Hi, are you {nacionality} ? </p>
            <p> </p>
        </div>
    )
}

export default SignUpPage