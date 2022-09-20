import { useState } from 'react';
import Greetings from '../Greetings/Greetings';
import './SignupPage.css';

const initialFormState = {
    email: '',
    password: '',
    nationality: '',
};

//TODO: Check email valid / Strong or weak password
function SignupPage() {
    const [state, setState] = useState(initialFormState);
    const [show, setShow] = useState(false);

    const submitForm = (e) => {
        console.log(state);
        // console.log(e.target);
        setShow(!show);
        e.preventDefault();
    };

    //TODO: Learn how this shit works
    const handleInput = (e) => {
        const { name, value } = e.target;
        setState({
            ...state,
            [name]: value,
        });
    };


    return (
        <div>
            <form onSubmit={submitForm}>
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    value={state.email}
                    onChange={handleInput}
                />
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    value={state.password}
                    onChange={handleInput}
                />
                <label htmlFor="nationality">Nationality</label>
                <select name="nationality" value={state.nationality} onChange={handleInput}>
                    <option value="en">English</option>
                    <option value="de">Deutch</option>
                    <option value="fr">French</option>
                </select>
                <button type="submit">Signup</button>
                {show && (
                    <div className='onChange'>
                        <Greetings lang={state.nationality}/>
                            <p>Your email adress is: {state.email}</p>
                    </div>
                )}
            </form>
        </div>
    );
}

export default SignupPage;
