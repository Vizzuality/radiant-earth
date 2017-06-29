import React, { Component } from 'react';


class AddBlog extends Component {
  render() {
    return (
      <div className="row l-add-blog align-center">
        <div className="l-add-blog__form small-10 medium-10 large-10">
          <h1 className="text -ff2-xl">Add new blog.</h1>
          <form>
            <label className="text -ff2-xm -uppercase">Title</label>
            <input className="text -ff2-s" type="text" placeholder="eg: We love tiles"/>
            <label className="text -ff2-xm -uppercase">Description</label>
            <textarea className="text -ff2-s"></textarea>

            <div className="l-add-blog__two-inputs">
              <div>
                <label className="text -ff2-xm -uppercase">Tags</label>
                <input className="text -ff2-s" type="text" placeholder="eg: #News"/>
              </div>
              <div>
                <label className="text -ff2-xm -uppercase">Image</label>
                <input className="text -ff2-s" type="file" />
              </div>
            </div>

            <label className="text -ff2-xm -uppercase">Original post (url)</label>
            <input className="text -ff2-s" type="text" placeholder="Paste your url"/>
            <input className="text -ff2-s -white -uppercase" type="button" value="Submit" />
          </form>
        </div>
      </div>
    )
  };
}

export default AddBlog;
