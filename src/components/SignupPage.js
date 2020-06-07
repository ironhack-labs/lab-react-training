import React, { Component } from 'react';

import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class SignupPage extends Component {
  state = {
    title: '',
    director: '',
    hasOscar: false,
    imdbRating: '',
  };

  handleTitleInput = (event) => {
    this.setState({
      title: event.target.value,
    });
  };

  handleDirectorInput = (event) => {
    this.setState({
      director: event.target.value,
    });
  };

  handleHasOscarInput = (event) => {
    this.setState({
      hasOscar: event.target.checked,
    });
  };

  handleImdbRatingInput = (event) => {
    this.setState({
      imdbRating: event.target.value,
    });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    // const name = event.target.name

    if (event.target.type === 'checkbox') {
      this.setState({ [name]: event.target.checked });
    } else {
      this.setState({
        [name]: value,
      });
    }
  };

  handleFormSubmit = (event) => {
    event.preventDefault();

    const theMovie = this.state;

    // push state to App state
    this.props.addMovie(theMovie);

    //clean state
    this.setState({
      email: '',
      password: '',
      nationality: []
    });
  };

  render() {
    return (
      <Form
        action=""
        onSubmit={this.handleFormSubmit}
        style={{ width: '40%', display: 'inline-block' }}
      >
        <FormGroup>
          <Label htmlFor="">Email</Label>
          <Input
            type="email"
            name="email"
            value={this.state.email}
            onChange={(e) => this.handleChange(e)}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="">Password</Label>
          <Input
            type="password"
            name="password"
            value={this.state.password}
            onChange={(e) => this.handleChange(e)}
          />
        </FormGroup>
       
        <FormGroup>
          <Label htmlFor="">Nationality</Label>
          <Input
            type="text"
            name="nationality"
            value={this.state.nationality}
            onChange={(e) => this.handleChange(e)}
          />
          <Button className="btn-info" type="submit">Sign up</Button>
        </FormGroup>
      </Form>
    );
  }
}

export default SignupPage;
