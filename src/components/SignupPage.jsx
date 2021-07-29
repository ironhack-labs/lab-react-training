import 'bootstrap/dist/css/bootstrap.css';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import { Button, Input, Label } from 'reactstrap';

import {useState, useEffect} from 'react';

function SignupPage() {
    const [emailAddress, setEmailAddress] = useState('');
    const [nationality, setNationality] = useState('');

    const handleSubmit = (event, errors, values) =>{
        if(errors.length===0) {
            setEmailAddress(values.email);
            setNationality(values.countrySelect);
        }
    }

    const renderWelcome = () => {
        if(emailAddress !== '' && nationality !== '') {
            let greeting='Hello';
            switch (nationality) {
                case 'USA':
                    greeting='Hello';
                    break;
                case 'Germany':
                    greeting='Hallo';
                    break;
                case 'France':
                    greeting='Bonjour';
                    break;
                case 'Mexico':
                    greeting='Hola';
                    break;
            }
            return (
                <div className="signUpWelcome">
                    <span>{greeting}</span>
                    <span>Your email address is: {emailAddress}</span>
                    <span>Your email address is correct</span>
                </div>
            );
        }

        return (
        <div className="signUpWelcome">
        </div>
        );
    }

    return (
        <AvForm className='signUpPage' onSubmit={handleSubmit}>
            <AvField name="email" label="Email" type="email" validate={{
                required: {value: true, errorMessage: 'Please enter an email'},
                minLength: {value: 6, errorMessage: 'Your name must be between 6 and 50 characters'},
                maxLength: {value: 50, errorMessage: 'Your name must be between 6 and 50 characters'}
            }}/>
            <AvField name="password" label="Password" type="password" validate={{
                required: {value: true, errorMessage: 'Please enter a password'},
                minLength: {value: 8, errorMessage: 'Your name must be between 8 and 50 characters'},
                maxLength: {value: 50, errorMessage: 'Your name must be between 8 and 50 characters'}
            }}/>
            <AvField type="select" name="countrySelect" label="Country" validate={{
                required: {value: true, errorMessage: 'Please select a country'}
            }}>
                <option disabled={true} value="">Select a country</option>
                <option value="USA">USA</option>
                <option value="Germany">Germany</option>
                <option value="France">France</option>
                <option value="Mexico">Mexico</option>
            </AvField>
            <Button>Submit</Button>
            {renderWelcome()}
        </AvForm>
    );
}

export default SignupPage;