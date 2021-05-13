import React from 'react'

function SignupPage() {

    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [nationality, setNationality] = React.useState("");
    const [isSubmitted, setIsSubmitted] = React.useState(false);


    function handleSubmit(event) {
        event.preventDefault();
        setEmail(event.target.email.value);
        setNationality(event.target.nationality.value);
        setPassword(event.target.pwd.value);
        if(email && password) {setIsSubmitted(true);  }
    }

    return (
        <div>
        <form onSubmit={handleSubmit}>
            <label for="email">Email</label>
            <input type="email" id="email" name="email" value={email} onChange={(event) => setEmail(event.target.value)}></input>
            <br></br>
            <label for="pwd">Password</label>
            <input type="password" id="pwd" name="pwd" value={password} onChange={(event) => setPassword(event.target.value)}></input>
            <br></br>
            <label for="nationality">Language</label>
            <select name="nationality" id="nationality" value={nationality} onChange={(event) => setNationality(event.target.value)}>
            <option value="en">English</option>
            <option value="de">German</option>
            <option value="fr">French</option>
            </select>
            <button>Sign up</button>
        </form>
        <FormSubmit isSubmitted={isSubmitted} email={email} nationality={nationality}/>
        </div>
    )
}

function FormSubmit(props) {
    const {isSubmitted, email, nationality} = props;
    const greetings = {en: "Hello", fr: "Bonjour", de: "Hallo"}
    return <div style={{visibility: `${isSubmitted?"visible":"hidden"}`}}>
            {greetings[nationality]}
            <br></br>
            Your email address is: {email} 
        </div>
}



export default SignupPage

