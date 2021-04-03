import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

class SignupPage extends React.Component {
    state = {
        submitted: false,
        email: '',
        password: '',
        nationality: '',
    }

    handleChange = (e) => {
        let {name, value } = e.target;
        this.setState({[name]: value})
    }

    handleSubmit = (e) => {
        e.preventDefault();
    
        this.setState({
            submitted: true,
        })
    }

    refreshForm = () => {
        this.setState({
            submitted: false,
            email: '',
            password: '',
            nationality: '',
        })
    }

    render() {
        return (
            !this.state.submitted
            ? (
                <form onSubmit={this.handleSubmit} style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <input className="input mb-2" placeholder="Email" name="email" 
                        value={this.state.email} type="email" onChange={(e) => this.handleChange(e)} 
                        style={{marginBottom: '0.5rem', width: '75%', height: '1.5rem'}} autoComplete="off" required
                    />
                    <input className="input mb-2" placeholder="Password" name="password" 
                        value={this.state.password} type="password" onChange={(e) => this.handleChange(e)} 
                        style={{marginBottom: '0.5rem', width: '75%', height: '1.5rem'}} autoComplete="off" required
                    />
                    <select name="nationality" id="nationality" onChange={(e) => this.handleChange(e)}
                        style={{marginBottom: '0.5rem', width: '76%', height: '1.8rem'}} required>
                        <option value="">Choose a nationality</option>
                        <option value="Hola">Spanish</option>
                        <option value="Olá">Portuguese</option>
                        <option value="Ciao">Italian</option>
                    </select>
                    <button className="add-pointer" type="submit" style={{width: '25%', height: '1.5rem', border: '0.1rem solid'}}>Signup</button>
                </form>
            ) : (
                <>  
                    <p>{this.state.nationality}</p>
                    <p>Your Email is {this.state.email}</p>
                    <p style={{color: 'green'}}>This form was submitted to infinity correctly!</p>
                    <button className="add-pointer" onClick={this.refreshForm} style={{width: '25%', height: '1.5rem', border: '0.1rem solid'}}>Refresh Form</button>
                </>
            )
        )
    }
}

export default SignupPage;