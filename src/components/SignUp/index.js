import React, { Component } from 'react';
import Input from '../Input';
import Button from '../Button';
import SignUpBody from './style';
import ShownContext from '../Context/MyContext';

class SignUpContent extends Component {
  state = {
    firstName: null,
    lastName: null,
    nickname: null,
    location: null,
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
    const { firstName, lastName, nickname, location } = this.state;
    return (
      <ShownContext.Consumer>
        {(context) => (
          <SignUpBody className="signup" onClick={context.onToggleSignup}>
            <div className="signup__container">
              <button
                onClick={context.onToggleSignup}
                type="button"
                className="signup__button signup__button--icon"
              >
                <i onClick={context.onToggleSignup} className="far fa-times-circle" />
              </button>
              <h1 className="signup__heading">Sign Up</h1>
              <form onSubmit={this.handleSubmit} className="signup__form form">
                <Input
                  type="text"
                  name="firstName"
                  className="signup__input"
                  value={firstName}
                  onChange={this.handleInputChange}
                  placeholder="First Name" />
                <Input
                  type="text"
                  name="lastName"
                  className="signup__input"
                  value={lastName}
                  onChange={this.handleInputChange}
                  placeholder="Last Name" />
                <Input
                  type="text"
                  name="nickname"
                  className="signup__input"
                  value={nickname}
                  onChange={this.handleInputChange}
                  placeholder="Nickname" />
                <Input
                  type="text"
                  name="location"
                  className="signup__input"
                  value={location}
                  onChange={this.handleInputChange}
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
        )}
      </ShownContext.Consumer>
    )
  }
}

const SignUp = () => {
  return (
    <ShownContext.Consumer>
      {({state: { shownSignup }}) => {
        const content = shownSignup ? <SignUpContent /> : null;
        return (
        <>
        {content}
        </>
        )
      }}
    </ShownContext.Consumer>
  );
};

export default SignUp;
