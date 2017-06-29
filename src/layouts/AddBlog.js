import React, { Component } from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';


class AddBlog extends Component {

  constructor (props) {
    super(props);

    this.state = {
      value: 'Example',
      options: [
        { label: 'News', value: 'news' },
        { label: 'Blog', value: 'blog' },
        { label: 'Maps', value: 'map' },
      ]
    };
  }

  handleSelectChange (value) {
    this.setState({
      value: value
    });
  }

  render() {

    return (
      <div className="row l-add-blog align-center">
        <div className="l-add-blog__form small-10 medium-10 large-10">
          <div className="l-add-blog__menu">
            <a className="text -ff2-s" href="/admin/dashboard">Go dashboard</a>
          </div>
          <h1 className="text -ff2-xl">Add new blog.</h1>
          <form>
            <label className="text -ff2-xm -uppercase">Title</label>
            <input className="text -ff2-s c-input -text-field" type="text" placeholder="eg: We love tiles"/>
            <label className="text -ff2-xm -uppercase">Description</label>
            <textarea className="text -ff2-s c-input -textarea"></textarea>
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
                />
              </div>
              <div className="container">
                <label className="text -ff2-xm -uppercase">Image</label>
                <input className="text -ff2-s" type="file" />
              </div>
            </div>
            <label className="text -ff2-xm -uppercase">Original post (url)</label>
            <input className="text -ff2-s c-input -text-field" type="text" placeholder="Paste your url"/>
            <input className="text -ff2-s -uppercase c-button -primary" type="button" value="Submit" />
          </form>
        </div>
      </div>
    )
  };
}

export default AddBlog;
