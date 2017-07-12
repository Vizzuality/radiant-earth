import React, { Component } from 'react';
import Select from 'react-select';
import {
  BrowserRouter as Router,
  Route,
  Redirect
} from 'react-router-dom';
import _ from 'underscore';
import axios from 'axios';
import Formsy from 'formsy-react';
import MyInput from '../components/MyOwnInput';
import 'react-select/dist/react-select.css';


class EditBlog extends Component {

  constructor (props) {
    super(props);

    this.state = {
      value: '',
      valueString: [],
      showLoader: false,
      logout: false,
      showSuccess: false,
      options: [],
      postId: null,
      titleValue: '',
      descriptionValue: '',
      categoryValue: '',
      imageValue: '',
      urlPost: ''
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

  loadBlogData() {
    axios.get(process.env.REACT_APP_API_POSTS_URL, {
      params: { post_id: this.props.location.query }
    }).then(res => {
      this.setState({
        titleValue: res.data[0].title,
        descriptionValue: res.data[0].summary,
        urlPost: res.data[0].link,
        imageValue: res.data[0].picture,
        categoryValue: res.data[0].category
      });
    })
  }

  componentDidMount() {
    this.loadBlogData();
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

    var title = data.title === '' ? this.state.titleValue : data.title;
    var description = this.textArea.value === '' ? this.state.descriptionValue : this.textArea;
    var category = [];
    category = this.state.value.split(',');
    var picture = data.picture === '' ? this.state.imageValue : data.picture;
    var url = data.url === '' ? this.state.urlPost : data.url;
    var id = this.props.location.query;

    axios.put(process.env.REACT_APP_API_POSTS_URL, {
      title: title,
      summary: description,
      category: category,
      link: url,
      picture: picture,
      post_id: id
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
      }.bind(this), 2000);
    }.bind(this))
    .catch(function (error) {});
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
              <span className="text -ff2-s" onClick={this.logout.bind(this)}>Logout</span>
            </div>
          </div>
          <h1 className="text -ff2-xl">Edit blog.</h1>
          <Formsy.Form onSubmit={this.submit.bind(this)} onValid={this.enableButton.bind(this)} onInvalid={this.disableButton.bind(this)} ref={(el) => this.myFormRef = el} className="addBlog">
            <MyInput
              class="text -ff2-s c-input -text-field"
              value={this.state.titleValue}
              name="title"
              title="Title"
              type="text"
              placeholder="eg: We love tiles"
              required
            />
            <label className="text -ff2-xm -uppercase">Description</label>
            <textarea
              className="text -ff2-s c-input -textarea"
              placeholder={this.state.descriptionValue}
              ref={(input) => { this.textArea = input; }}>
              </textarea>
            <div className="l-add-blog__two-inputs">
              <div className="container">
                <label className="text -ff2-xm -uppercase">Tags</label>
                <Select
                  className="text -ff2-s"
                  multi
                  simpleValue
                  disabled= {false}
                  placeholder={this.state.categoryValue}
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
              value={this.state.urlPost}
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

export default EditBlog;
