import React, { Component } from 'react'
import Greetings from './Greetings'

export default class SignupPage extends Component {
    constructor(props){
        super(props)
        this.state = {
            form: {
                email: '',
                password: '',
                nationality: ''
            },
            users: [],
            validForm: null,
            errorMessage: false

        }
        this.initialForm = {...this.state.form}
    }

    handleChange = ({target}) => {

        const isValid = target.name === 'email' ? 
        this.checkEmail(target.value) : 
        this.checkPassword(target.value);

        if (isValid) {
            this.setState({
                form: {
                    ...this.state.form,
                    [target.name]: target.value},
                ...this.state.users,
                validForm: 'is-valid'
                })    
        } else {
            this.setState({
                form: {...this.state.form,
                    [target.name]: target.value},
                users: [...this.state.users],
                validForm: 'is-invalid'
            })
        }
        
    }

    checkEmail = (value) => {
        const regEx = /^\S+@\S+\.\S+$/
        return value.match(regEx)
    }

    checkPassword = (value) => {
        const regEx = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/
        return value.match(regEx)
    }



    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.validForm === 'is-valid') {
            const copyData = {...this.state.form}
            const copyUsers = [...this.state.users]
            copyUsers.push(copyData)
            this.setState({
            form: {...this.initialForm},
            users: copyUsers,
            validForm: null,
            errorMessage: false
        })
        } else {
            this.setState({
                form: {...this.state.form},
                users: [...this.state.users],
                validForm: 'is-invalid',
                errorMessage: true
            })
        }
    }



    render() {

        const {email, password} = this.state.form;
        const {validForm, errorMessage} = this.state;
        const errorObjects = {
            email: !errorMessage ? null : (
                <p>Please, type a valid email</p>
            ),
            password: !errorMessage ? null : (
                <p>The password must include at least 6 characters, a lowercase letter, a capital letter and a number.</p>
            )
        }
        
        const renderUsers = this.state.users.map(user => {
            return  <div key={user.email}>
                        <p>Email: {user.email}</p>
                        <p>Password: {user.password}</p>
                        <Greetings lang={user.nationality}/>
                    </div>
        })



        return (
            <div className="col-4" onSubmit={this.handleSubmit}>
                <form className="form-group">
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="example@example.com" 
                        className={`form-control ${validForm}`} 
                        onChange={this.handleChange}
                        value={email}
                        /
                        >
                    {errorObjects.email}
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password" 
                        name="password" 
                        className={`form-control ${validForm}`}
                        placeholder="Your password here" 
                        onChange={this.handleChange}
                        value={password}/
                        >
                    {errorObjects.password}
                    <label htmlFor="nationality">Nationality</label>
                    <select name="nationality" onChange={this.handleChange}>
                        <option value="es" selected>Spain</option>
                        <option value="de">Germany</option>
                        <option value="fr">France</option>
                        <option value="en">United Kingdom</option>
                    </select>
                    <input type="submit" value="Submit"/>
                </form>
                {renderUsers}
            </div>
        )
    }
}
