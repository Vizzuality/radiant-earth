import React, { Component } from 'react';
import {
  Redirect
} from 'react-router-dom';
import axios from 'axios';
import _ from 'underscore';
import Formsy from 'formsy-react';
//import MyInput from '../components/MyOwnInput';


class Login extends Component {

  constructor (props) {
    super(props);

    this.state = {
      canSubmit: false,
      loginError: false,
      loginSuccess: false,
    };
  }

  submit(data) {
    var email = data.email;
    var password = data.password;

    axios.get(process.env.REACT_APP_API_USERS_URL)
    .then(res => {
      _.each(res.data, function(data){
        if (email === data.email) {
          if (password === data.password) {
            localStorage.setItem('loginSuccess', true);
            this.setState({ loginSuccess: true });
          } else {
            localStorage.setItem('loginSuccess', false);
            this.setState({ loginError: true });
          }
        } else {
          localStorage.setItem('loginSuccess', false);
          this.setState({ loginError: true });
        }
      }.bind(this));
    })
  }

  enableButton() {
    this.setState({ canSubmit: true });
  }

  disableButton() {
    this.setState({ canSubmit: false });
  }

  render() {
    if (!localStorage.getItem('loginSuccess') === null || localStorage.getItem('loginSuccess') === 'true') {
      return (
        <Redirect to='/admin/dashboard'/>
      )
    }

    return (
      <div className="row l-login align-center">
        <div className="l-login__form small-6 medium-6 large-6">
          <Formsy.Form onSubmit={this.submit.bind(this)} onValid={this.enableButton.bind(this)} onInvalid={this.disableButton.bind(this)} className="login">
            <button className="text -ff2-s -uppercase c-button -primary" type="submit" disabled={!this.state.canSubmit}>Submit</button>
          </Formsy.Form>
          <span className={`text -ff2-xs -uppercase -error validation-error l-login__error-login ${this.state.loginError ? '-show' : ''}`}>Login fail</span>
        </div>
      </div>
    )
  };
}

export default Login;
