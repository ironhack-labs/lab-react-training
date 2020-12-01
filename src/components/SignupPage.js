import React, { Component } from 'react';

class SignupPage extends Component {

    state={inputValue: "", selectValue:"German", message: "", greeting: "", isCorrect: ""}

    handleInputChange = (e) => {
        this.setState({inputValue: e.target.value});
    }

    handleSelectChange = (e) => {
        this.setState({selectValue: e.target.value});
    }

    handleSubmit = event => {
        let greeting, isCorrect;
        switch(this.state.selectValue){
            case "German":
                greeting = "Hallo";
                break;
            case "French":
                greeting = "Bonjour";
                break;
            case "American":
                greeting = "Hello";
                break;
        }
        if(this.state.inputValue.includes("@") && this.state.inputValue.split("@")[1].includes(".")){
            isCorrect = "correct";
        }else{
            isCorrect = "incorrect";
        }
        this.setState({message: "Your email address is: " + this.state.inputValue,
        greeting: greeting,
        isCorrect: "Your email address is " + isCorrect
        });
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label for="email">Email address</label>
                    <input type="email" class="form-control" name="email" placeholder="Enter email" value={this.state.value} onChange={this.handleInputChange}></input>
                    <label for="password">Password</label>
                    <input type="password" class="form-control" name="password" placeholder="Enter password"></input>
                    <label for="nationality">Nationality</label>
                    <select class="form-control" name="nationality" value={this.state.selectValue} onChange={this.handleSelectChange}>
                        <option>German</option>
                        <option>French</option>
                        <option>American</option>
                    </select>
                    <input type="submit" value="Submit"></input>
                </form>
                <p>{this.state.greeting}</p>
                <p>{this.state.message}</p>
                <p>{this.state.isCorrect}</p>
            </div>
        );
    }
}

export default SignupPage;