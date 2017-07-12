import React, { Component } from 'react';
import Select from 'react-select';
import {
  Redirect
} from 'react-router-dom';
import _ from 'underscore';
import axios from 'axios';
import Formsy from 'formsy-react';
import MyInput from '../components/MyOwnInput';
import 'react-select/dist/react-select.css';


class AddBlog extends Component {

  constructor (props) {
    super(props);

    this.state = {
      value: '',
      valueString: [],
      showLoader: false,
      logout: false,
      showSuccess: false,
      options: [],
    };
  }

  loadCategories() {
    axios.get(process.env.REACT_APP_API_CATEGORY_URL)
      .then(res => {
        _.each(res.data, function(data){
          this.state.options.push({
            label: data.name.toLowerCase(),
            value: data.name.toLowerCase(),
          })
        }.bind(this));
      })
  }

  componentDidMount() {
    this.loadCategories();
  }


  handleSelectChange (value) {
    this.setState({
      value: value,
      valueString: JSON.stringify(value),
    });
  }

  logout() {
    localStorage.setItem('loginSuccess', false);
    this.setState({ logout: true });
  }

  submit(data) {
    this.setState({
      showLoader: true,
    });
    var title = data.title;
    var description = this.textArea.value;
    var category = [];
    category = this.state.value.split(',');
    var picture = data.picture;
    var url = data.url;

    axios.post(process.env.REACT_APP_API_POSTS_URL, {
      title: title,
      summary: description,
      category: category,
      link: url,
      picture: picture
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

    if (localStorage.getItem('loginSuccess') === null || localStorage.getItem('loginSuccess') === 'false' || this.setState.logout) {
      return (
        <Redirect to='/admin/login'/>
      )
    }

    return (
      <div className="row l-add-blog align-center">
        <div className={`l-add-blog__message -success ${this.state.showSuccess ? '-show' : ''}`}>
          <span className="text -white">success!</span>
        </div>
        <div className={`l-add-blog__back-loader ${this.state.showLoader ? '-show' : ''}`} ref={(loader) => { this.loader = loader; }}>
          <div className="c-loader">
            <div className="c-loader__ball-scale-multiple">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
        <div className="l-add-blog__form small-10 medium-10 large-10">
          <div className="l-add-blog__menu-container">
            <div className="l-add-blog__menu">
              <a className="text -ff2-s" href="/admin/dashboard">Go to dashboard</a>
            </div>
            <div className="l-add-blog__menu">
              <a className="text -ff2-s" href="/admin/add-category">Add new category</a>
            </div>
            <div className="l-add-blog__menu">
              <span className="text -ff2-s" onClick={this.logout.bind(this)}>Logout</span>
            </div>
          </div>
          <h1 className="text -ff2-xl">Add new blog.</h1>
          <Formsy.Form onSubmit={this.submit.bind(this)} onValid={this.enableButton.bind(this)} onInvalid={this.disableButton.bind(this)} ref={(el) => this.myFormRef = el} className="addBlog">
            <MyInput
              class="text -ff2-s c-input -text-field"
              value=""
              name="title"
              title="Title"
              type="text"
              placeholder="eg: We love tiles"
              required
            />
            <label className="text -ff2-xm -uppercase">Description</label>
            <textarea className="text -ff2-s c-input -textarea" ref={(input) => { this.textArea = input; }}></textarea>
            <div className="l-add-blog__two-inputs">
              <div className="container">
                <label className="text -ff2-xm -uppercase">Tags</label>
                <Select
                  className="text -ff2-s"
                  multi
                  simpleValue
                  disabled= {false}
                  value={this.state.value}
                  placeholder="Select your favourite(s)"
                  options={this.state.options}
                  onChange={this.handleSelectChange.bind(this)}
                  ref={(input) => { this.selectCategory = input; }}
                />
              </div>
              <div className="container">
                <MyInput
                  class="text -ff2-s c-input -text-field"
                  value={this.state.imageValue}
                  name="picture"
                  title="Image"
                  type="text"
                  placeholder="Paste image url"
                  required
                />
              </div>
            </div>
            <MyInput
              class="text -ff2-s c-input -text-field"
              value=""
              name="url"
              title="Original post (url)"
              type="text"
              placeholder="Paste your url"
              required
            />
            <button className="text -ff2-s -uppercase c-button -primary" type="submit" disabled={!this.state.canSubmit}>Submit</button>
          </Formsy.Form>
        </div>
      </div>
    )
  };
}

export default AddBlog;
