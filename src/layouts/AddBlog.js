import React, { Component } from 'react';
import Select from 'react-select';
import axios from 'axios';
import 'react-select/dist/react-select.css';


class AddBlog extends Component {

  constructor (props) {
    super(props);

    this.state = {
      value: '',
      valueString: [],
      showLoader: false,
      showSuccess: false,
      options: [
        { label: 'News', value: 'news' },
        { label: 'Blog', value: 'blog' },
        { label: 'Maps', value: 'map' },
      ]
    };
  }

  handleSelectChange (value) {
    this.setState({
      value: value,
      valueString: JSON.stringify(value),
    });
  }

  postNewBlog() {
    this.setState({
      showLoader: true,
    });

    var title = this.textInput.value;
    var description = this.textArea.value;
    var category = [];
    category = this.state.value.split(',');
    var picture = this.picture.value;
    var url = this.url.value;

    axios.post(process.env.REACT_APP_API_POSTS_URL, {
      title: title,
      summary: description,
      category: category,
      link: url
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
    .catch(function (error) {
      //error
    });;
  }

  render() {

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
          <div className="l-add-blog__menu">
            <a className="text -ff2-s" href="/admin/dashboard">Go dashboard</a>
          </div>
          <h1 className="text -ff2-xl">Add new blog.</h1>
          <form>
            <label className="text -ff2-xm -uppercase">Title</label>
            <input
              className="text -ff2-s c-input -text-field"
              type="text"
              placeholder="eg: We love tiles"
              ref={(input) => { this.textInput = input; }}
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
                <label className="text -ff2-xm -uppercase">Image</label>
                <input className="text -ff2-s" type="file" ref={(input) => { this.picture = input; }} />
              </div>
            </div>
            <label className="text -ff2-xm -uppercase">Original post (url)</label>
            <input className="text -ff2-s c-input -text-field" type="text" placeholder="Paste your url" ref={(input) => { this.url= input; }}/>
            <input className="text -ff2-s -uppercase c-button -primary" type="button" value="Submit" onClick={this.postNewBlog.bind(this)} />
          </form>
        </div>
      </div>
    )
  };
}

export default AddBlog;
