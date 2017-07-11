import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect
} from 'react-router-dom';
import axios from 'axios';
import Formsy from 'formsy-react';
import MyInput from '../components/MyOwnInput';

class AddCategory extends Component {

  constructor (props) {
    super(props);

    this.state = {
      canSubmit: false,
      showLoader: false,
      showSuccess: false,
    };
  }

  submit(data) {
    this.setState({
      showLoader: true,
    });
    var name = data.name;
    var success = false;
    axios.post(process.env.REACT_APP_API_CATEGORY_URL, {
      name: name
    })
    .then(function (response) {
      setTimeout(function(){
        this.setState({
          showLoader: false,
          showSuccess: true,
        });
      }.bind(this), 1000);
      setTimeout(function(){
        this.setState({
          showSuccess: false,
        });
        this.myFormRef.reset();
      }.bind(this), 2000);
    }.bind(this))
    .catch(function (error) {
      //error
    });
  }

  enableButton() {
    this.setState({ canSubmit: true });
  }

  disableButton() {
    this.setState({ canSubmit: false });
  }

  render() {
    if (localStorage.getItem('loginSuccess') === 'false') {
      return (
        <Redirect to='/admin/login'/>
      )
    }

    return (
      <div className="row l-add-category align-center">
        <div className={`l-add-category__message -success ${this.state.showSuccess ? '-show' : ''}`}>
          <span className="text -white">success!</span>
        </div>
        <div className={`l-add-category__back-loader ${this.state.showLoader ? '-show' : ''}`} ref={(loader) => { this.loader = loader; }}>
          <div className="c-loader">
            <div className="c-loader__ball-scale-multiple">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
        <div className="l-add-category__form small-10 medium-10 large-10">
          <div className="l-add-category__menu">
            <a className="text -ff2-s" href="/admin/dashboard">Go dashboard</a>
          </div>
          <h1 className="text -ff2-xl">Add new category.</h1>
          <Formsy.Form onSubmit={this.submit.bind(this)} onValid={this.enableButton.bind(this)} onInvalid={this.disableButton.bind(this)} ref={(el) => this.myFormRef = el} className="addCategory">
            <MyInput
              class="text -ff2-s c-input -text-field"
              value=""
              name="name"
              title="Name"
              type="text"
              placeholder="eg: News"
              required
            />
            <button className="text -ff2-s -uppercase c-button -primary" type="submit" disabled={!this.state.canSubmit}>Submit</button>
          </Formsy.Form>
        </div>
      </div>
    )
  };
}

export default AddCategory;
