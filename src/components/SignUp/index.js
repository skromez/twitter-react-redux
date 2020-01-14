import React, { Component } from 'react';
import Input from '../Input';
import Button from '../Button';
import SignUpBody from './style';

class SignUpContent extends Component {
  state = {
    firstName: null,
    lastName: null,
    nickname: null,
    location: null,
  };
  handleFirstNameChange = (e) => {
    e.persist();
    this.setState(() => {
      return {
        firstName: e.target.value
      }
    })
  };
  handleLastNameChange = (e) => {
    e.persist();
    this.setState(() => {
      return {
        lastName: e.target.value
      }
    })
  };
  handleNicknameChange = (e) => {
    e.persist();
    this.setState(() => {
      return {
        nickname: e.target.value
      }
    })
  };
  handleLocationChange = (e) => {
    e.persist();
    this.setState(() => {
      return {
        location: e.target.value
      }
    })
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state)
  };

  render() {
    const { onToggleSignup } = this.props;
    const { firstName, lastName, nickname, location } = this.state;
    return (
      <SignUpBody>
        <div className="signup__container">
          <button
            onClick={onToggleSignup}
            type="button"
            className="signup__button signup__button--icon"
          >
            <i className="far fa-times-circle" />
          </button>
          <h1 className="signup__heading">Sign Up</h1>
          <form onSubmit={this.handleSubmit} className="signup__form form">
            <Input
              type="text"
              className="signup__input"
              value={firstName}
              onChange={this.handleFirstNameChange}
              placeholder="First Name" />
            <Input
              type="text"
              className="signup__input"
              value={lastName}
              onChange={this.handleLastNameChange}
              placeholder="Last Name" />
            <Input
              type="text"
              className="signup__input"
              value={nickname}
              onChange={this.handleNicknameChange}
              placeholder="Nickname" />
            <Input
              type="text"
              className="signup__input"
              value={location}
              onChange={this.handleLocationChange}
              placeholder="Location" />
            <Button
              className="signup__button"
              type="submit"
              size="100%"
              filled="true"
            >
              Sign Up
            </Button>
          </form>
        </div>
      </SignUpBody>
    )
  }
}


const SignUp = ({ shown, onToggleSignup }) => {
  const content = shown ? <SignUpContent onToggleSignup={onToggleSignup} /> : null;
  return (
    <>
      {content}
    </>
  );
};

export default SignUp;
