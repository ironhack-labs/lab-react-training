import React, {Component} from 'react';
import './SignupPage.css';

const initialState = {
    email: '',
    password: '',
    nationality: 'en',
    error: false,
    submitted: false
}

class SignupPage extends Component {
    state = {...initialState};

    onSubmit = (event) => {
        const {email, password, nationality} = this.state;
        event.preventDefault();

        if(email && password && nationality){
            this.setState({submitted: true})
        } else {
            this.setState({error: true})
        }
    };

    handleOnChange = (event) => {
        const {name, value} = event.target
        this.setState({ [name]: value })
    }

    render(){
        const {email, password, nationality, error} = this.state;

        return (
            <div className="container">
                <form className="signup-form" onSubmit={this.onSubmit}>
                    <label htmlFor="">Email</label>
                    <input style={{border: `1px solid ${error && 'red'}`}} type="email" name="email" value={email} onChange={this.handleOnChange}/>
                    <label htmlFor="">Password</label>
                    <input style={{border: `1px solid ${error && 'red'}`}} type="password" name="password" value={password} onChange={this.handleOnChange}/>
                    <label htmlFor="nationality">Nationality</label>
                    <select name="nationality" id="nationality" onChange={this.handleOnChange}>
                        <option value="en">English</option>
                        <option value="de">German</option>
                        <option value="fr">French</option>
                    </select>
                    <button className='btn btn-primary mt-3 mb-2'>Submit</button>
                </form>
                {
                    this.state.submitted && (
                        <div>
                            <p>{
                                (nationality === 'en') ? 'Hello' : (nationality === 'fr') ? 'Bonjour' : 'Hallo'
                            }</p>
                            <p>Your email address is: {email}</p>
                        </div>
                    )
                }
            </div>
        )
    }
};

export default SignupPage;