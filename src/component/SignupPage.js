import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.greetings = { de: 'Hallo', en: 'Hello', fr: 'Bonjour' };
    this.state = {
      email: '',
      password: '',
      nationality: 'de',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      email: '',
      password: '',
      nationality: 'de',
    });
  }

  render() {
    const baseFormClass = 'form-control ';
    const greeting = this.greetings[this.state.nationality];
    const emailRegexTest =
      this.state.email && /^[^@]+@\w+(\.\w+)+\w$/.test(this.state.email);

    const emailready = emailRegexTest ? 'Your email address is correct' : '';
    const emailClass = emailRegexTest
      ? 'is-valid'
      : this.state.email && 'is-invalid';
    const passClass =
      this.state.password.length > 8
        ? 'is-valid'
        : this.state.password && 'is-invalid';
    return (
      <div>
        <form>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className={baseFormClass + emailClass}
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              name="email"
              onChange={this.handleChange}
              value={this.state.email}
            />
            <div class="valid-feedback">You typed a valid email</div>
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className={baseFormClass + passClass}
              id="exampleInputPassword1"
              placeholder="Password"
              name="password"
              onChange={this.handleChange}
              value={this.state.password}
            />
            <div class="invalid-feedback">Your password is too weak</div>
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlSelect1">Example select</label>
            <select
              className="form-control"
              id="exampleFormControlSelect1"
              name="nationality"
              onChange={this.handleChange}
              value={this.state.nationality}
            >
              <option value="en">English</option>
              <option value="de">German</option>
              <option value="fr">French</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">
            Sign up
          </button>
        </form>
        <div>
          <p>
            {greeting} {this.state.email}
          </p>
          <p>{emailready}</p>
        </div>
        <hr />
      </div>
    );
  }
}

export default App;
