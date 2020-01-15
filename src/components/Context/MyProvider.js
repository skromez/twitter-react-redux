import ShownContext from './MyContext';
import React, { Component } from 'react';

class MyProvider extends Component {
  state = {
    shownLogin: false,
    shownSignup: false,
  };

  render() {
    return (
      <ShownContext.Provider
        value={{
          state: this.state,
          onToggleSignup: (evt) => {
            if (evt.target.tagName === 'BUTTON' ||
                evt.target.tagName === 'I' ||
                evt.target.classList.contains('signup')) {
              this.setState(({ shownSignup }) => {
                return {
                  shownSignup: !shownSignup
                };
              });
            }
          },
          onToggleLogin: (evt) => {
            if (evt.target.tagName === 'I' ||
                evt.target.tagName === 'BUTTON' ||
                evt.target.classList.contains('login')) {
              this.setState(({ shownLogin }) => {
                return {
                  shownLogin: !shownLogin
                };
              });
            }
          }
        }}
      >
        {this.props.children}
      </ShownContext.Provider>
    )
  }
}

export default MyProvider;
