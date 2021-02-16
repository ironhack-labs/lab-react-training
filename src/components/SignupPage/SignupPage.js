import React,{Component} from "react";

class SignupPage extends Component {
    state = {
        email:"",
        password:"",
        nationality:"",
        msg:"",
        completeForm:"none"
    }

    handleChange = (e) => {
        const { value,name,options } = e.target;
        const greetings = {
            EN:"Hello",
            DE:"Hallo",
            FR:"Bonjour"
        }
        this.setState(state => ({
            ...state,
            [name]:value,
        }))
        this.setState({msg:greetings[this.state.nationality]})
    }
    handleClick = (e) => {
        e.preventDefault();
        if(this.state.password)
        this.setState({completeForm:"contents"})
    }
    render(){
        return (
            <div className="container">
                <form onClick={this.handleClick} className="form" style={{display:"flex",flexDirection:"column",justifyContent:"space-between",maxWidth:"600px",margin:"0 auto"}}>
                    <label className="label" htmlFor="nationality">Nationality</label>
                    <select className="select" onChange={this.handleChange} name="nationality">
                        <option className="option">EN</option>
                        <option className="option">DE</option>
                        <option className="option">FR</option>
                    </select>
                    <label className="label" htmlFor="email">Email</label>
                    <input className="input" onChange={this.handleChange} type="email" name="email" id="email"></input>
                    <label className="label" htmlFor="password">Password</label>
                    <input className="input" onChange={this.handleChange} type="password" name="password" id="password"></input>
                    <button type="submit">Sign up</button>
                </form>
                <div style={{display:`${this.state.completeForm}`}}>
                    <p>{this.state.msg}</p>
                    <p><strong>Your email address is:</strong>{this.state.email}</p>
                </div>
            </div>
        )
    }
}

export default SignupPage;