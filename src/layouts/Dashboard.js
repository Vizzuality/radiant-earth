import React, { Component } from 'react';
import axios from 'axios';
import ReactSortable from 'react-sortablejs';
import {
  BrowserRouter as Router,
  Route,
  Redirect
} from 'react-router-dom';


class Dashboard extends Component {

  constructor (props) {
    super(props);

    this.state = {
      count: 1,
      logout: false,
      posts: [],
    };
  }

  loadCommentsFromServer() {
    axios.get(process.env.REACT_APP_API_POSTS_URL)
      .then(res => {
        this.setState({ posts: res.data });
      })
  }

  componentDidMount() {
    this.loadCommentsFromServer();
  }

  logout() {
    localStorage.setItem('loginSuccess', false);
    this.setState({ logout: true });
  }

  render() {

    if (localStorage.getItem('loginSuccess') === null || localStorage.getItem('loginSuccess') === 'false' || this.setState.logout) {
      return (
        <Redirect to='/admin/login'/>
      )
    }

    return (
      <div className="l-dashboard align-center">
        <div className="l-dashboard__panel">
          <div className="l-add-dashboard__menu-container">
            <div className="l-add-dashboard__menu">
              <a className="text -ff2-s" href="/admin/add-blog">Add new blog</a>
            </div>
            <div className="l-add-dashboard__menu">
              <a className="text -ff2-s" href="/admin/add-category">Add new category</a>
            </div>
            <div className="l-add-dashboard__menu">
              <span className="text -ff2-s" onClick={this.logout.bind(this)}>Logout</span>
            </div>
          </div>
          <h1 className="text -ff2-xl">Dashboard.</h1>
            <ReactSortable
                tag="div"
                className="l-dashboard__container-drag-drop row"
            >
              <div className="small-4 medium-4 large-4 column">
                <div className="l-dashboard__item-drag-drop l-dashboard__item-add">
                  <div className="icon-plus">
                    <svg className="icon icon-logo"><use xlinkHref="#icon-plus"></use></svg>
                  </div>
                  <span className="text -ff2-s -uppercase">Add new blog</span>
                </div>
              </div>
              {this.state.posts.map((item, i) =>
                <div key={i} className="small-4 medium-4 large-4 column">
                  <div key={i} className="l-dashboard__item-drag-drop">
                    <span className="l-dashboard__order text -ff2-xs">{i + 1}</span>
                    <h2 className="text -ff2-xm">{item.title}</h2>
                    <p className="tags text -ff2-xs -color-2 -uppercase">{item.category}</p>
                  </div>
                </div>
              )}
            </ReactSortable>
        </div>
      </div>
    )
  };
}

export default Dashboard;
