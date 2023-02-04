import { useState } from "react";
import { Form, FormGroup, Label, Input, FormFeedback, Button } from "reactstrap";

function SignupPage() {

    const [email, setEmail] = useState('');
    function handleEmailInput(event) {
        setEmail(event.target.value)
        checkEmail(event.target.value)
    }

    const [isValidEmail, setIsValidEmail] = useState(false)

    let emailValidation = new RegExp(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g)
    // or 
    // let emailValidation = new RegExp('^[\\w-.]+@([\\w-]+.)+[\\w-]{2,4}$')


    function checkEmail(emailParameter) {
        // We then change the badge's color and text based on the password strength
        if (emailValidation.test(emailParameter)) {
            setIsValidEmail(true)
        } else {
            setIsValidEmail(false)

        }

    }

    const [isWeakPassword, SetIsWeakPassword] = useState(true)
    const [isStrongPassword, SetIsStrongPassword] = useState(false)
    // The strong and weak password Regex pattern checker
    // let strongPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})')
    let mediumPassword = new RegExp('((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))')
    function StrengthChecker(PasswordParameter) {
        // We then change the badge's color and text based on the password strength
        if (mediumPassword.test(PasswordParameter)) {
            SetIsWeakPassword(false)
            SetIsStrongPassword(true)
        } else {
            SetIsWeakPassword(true)
            SetIsStrongPassword(false)

        }

    }

    const [password, setPassword] = useState('');
    function handlePasswordInput(event) {
        setPassword(event.target.value)
        StrengthChecker(event.target.value)
    }


    const [selectedNationality, setSelectedNationality] = useState('England');
    function handleSelectedNationality(event) {
        const nat = event.target.value
        setSelectedNationality(nat)
    }

    function greeting() {

        switch (selectedNationality) {
            case 'en':
                return 'Hello'
            case 'de':
                return 'Hallo'
            case 'fr':
                return 'Bonjour'
            default:
                return ''
        }

    }


    // FUNCTION TO CHECK IF YOU ARE LOGGED IN
    const [isLogedIn, setIsLoggedIn] = useState(false);
    function handleFormSubmit(event) {
        event.preventDefault()

        if (!isLogedIn) {
            setIsLoggedIn(true)

        } else {
            setIsLoggedIn(false)
        }

    }



    if (!isLogedIn) {

        return (
            <Form onSubmit={handleFormSubmit}>

                <FormGroup>
                    <Label for="email">
                        Email
                    </Label>
                    <Input onChange={handleEmailInput} id="email" type="email" valid={isValidEmail} invalid={!isValidEmail} value={email} />
                    <FormFeedback valid>
                        You tiped a valid email
                    </FormFeedback>
                    <FormFeedback>
                        You tiped an invalid email
                    </FormFeedback>
                </FormGroup>

                <FormGroup>
                    <Label for="password">
                        Passord
                    </Label>
                    <Input onChange={handlePasswordInput} id="password" type="password" valid={isStrongPassword} invalid={isWeakPassword} value={password} />
                    <FormFeedback>
                        Your password is too weak
                    </FormFeedback>
                    <FormFeedback valid>
                        Your password is good
                    </FormFeedback>
                </FormGroup>

                <FormGroup>
                    <Label for="nationality">
                        Nationality
                    </Label>
                    <Input value={selectedNationality} onChange={handleSelectedNationality} id="nationality" type="select" >
                        <option value="en">England</option>
                        <option value="de">German</option>
                        <option value="fr">French</option>
                    </Input>

                </FormGroup>
                <Button type="submit">Sign Up</Button>

            </Form>)

    } else {
        return (
            <>
                <Form onSubmit={handleFormSubmit}>
                    <FormGroup>
                        <Label for="email">
                            Email
                        </Label>
                        <Input onChange={handleEmailInput} id="email" type="email" valid value={email} />
                        <FormFeedback valid>
                            You tiped a valid email
                        </FormFeedback>
                    </FormGroup>

                    <FormGroup>
                        <Label for="password">
                            Passord
                        </Label>
                        <Input onChange={handlePasswordInput} id="password" type="password" valid={isStrongPassword} invalid={isWeakPassword} value={password} />
                        <FormFeedback>
                            Your password is too weak
                        </FormFeedback>
                        <FormFeedback valid>
                            Your password is good
                        </FormFeedback>
                    </FormGroup>
                    <FormGroup>
                        <Label for="nationality">
                            Nationality
                        </Label>
                        <Input value={selectedNationality} onChange={handleSelectedNationality} id="nationality" type="select">
                            <option value="en">England</option>
                            <option value="de">German</option>
                            <option value="fr">French</option>
                        </Input>

                    </FormGroup>
                    <Button>Sign Up</Button>

                </Form>
                <div>

                    <h3>{greeting()}</h3>
                    <p>Your email address is: {email}</p>
                    <p>Your email address is correct</p>
                </div>

            </>
        )

    }


}

export default SignupPage;