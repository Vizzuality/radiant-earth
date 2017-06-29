import React, { Component } from 'react';


class Login extends Component {
  render() {
    return (
      <div className="row l-login align-center">
        <div className="l-login__form small-6 medium-6 large-6">
          <form>
            <label className="text -ff2-xs -uppercase">User</label>
            <input className="text -ff2-s c-input -text-field" type="email" placeholder="eg: Sayid"/>
            <label className="text -ff2-xs -uppercase">Password</label>
            <input className="text -ff2-s c-input -text-field" type="password" placeholder="******" />
            <input className="text -ff2-s -uppercase c-button -primary" type="button" value="Submit" />
          </form>
        </div>
      </div>
    )
  };
}

export default Login;
