import React, { Component } from 'react';
import Input from '../Input';
import Button from '../Button';
import SignUpBody from './style';

class SignUp extends Component {
  state = {
    firstName: null,
    lastName: null,
    nickname: null,
    location: null,
    password: null,
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => {
      return {
        ...prevState,
        [name]: value
      }
    })
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state)
  };

  render() {
    const { firstName, lastName, nickname, location, password } = this.state;
    return (
        <SignUpBody>
          <h1 className="signup__heading">Sign Up</h1>
          <form onSubmit={this.handleSubmit} className="signup__form form">
            <Input
              type="text"
              name="firstName"
              className="signup__input"
              value={firstName}
              onChange={this.handleInputChange}
              placeholder="First Name"
            />
            <Input
              type="text"
              name="lastName"
              className="signup__input"
              value={lastName}
              onChange={this.handleInputChange}
              placeholder="Last Name"
            />
            <Input
              type="text"
              name="nickname"
              className="signup__input"
              value={nickname}
              onChange={this.handleInputChange}
              placeholder="Nickname"
            />
            <Input
              type="text"
              name="location"
              className="signup__input"
              value={location}
              onChange={this.handleInputChange}
              placeholder="Location"
            />

            <Input
              type="password"
              name="password"
              className="signup__input"
              value={password}
              onChange={this.handleInputChange}
              placeholder="Password"
            />
            <Button
              className="signup__button"
              type="submit"
              size="100%"
              filled="true"
            >
              Sign Up
            </Button>
          </form>
        </SignUpBody>
    )
  }

};

export default SignUp;
