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
      showBlogs: true,
      showCategories: false,
      posts: [],
      categories: [],
    };
  }

  loadBlog() {
    axios.get(process.env.REACT_APP_API_POSTS_URL)
      .then(res => {
        this.setState({ posts: res.data });
      })
  }

  loadCategories() {
    axios.get(process.env.REACT_APP_API_CATEGORY_URL)
      .then(res => {
        this.setState({ categories: res.data });
      })
  }

  componentDidMount() {
    this.loadBlog();
    this.loadCategories();
  }

  logout() {
    localStorage.setItem('loginSuccess', false);
    this.setState({ logout: true });
  }

  changeTab(e) {
    this.setState({
      showBlogs: e.target.getAttribute('data-value') === 'blog' ? true : false,
      showCategories: e.target.getAttribute('data-value') === 'category' ? true : false,
     });
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
          <div className="l-dashboard__tabs">
            <span data-value="blog" className={`text -ff2-s -uppercase ${this.state.showBlogs ? '-selected' : ''}`} onClick={this.changeTab.bind(this)}>Blogs</span>
            <span data-value="category" className={`text -ff2-s -uppercase ${this.state.showCategories ? '-selected' : ''}`} onClick={this.changeTab.bind(this)}>Categories</span>
          </div>
          <div className="">

            <div className={`l-dashboard__blog-container ${this.state.showBlogs ? '-show' : '-hidden'}`}>
              {this.state.posts.map((item, i) =>
                <div key={i} className="l-dashboard__item">
                  <div>
                    <span className="text -ff2-s -uppercase">({i + 1}) {item.title}</span>
                    <p className="tags text -ff2-s -color-2 l-dashboard__item-tag">{item.category}</p>
                  </div>
                  <div className="l-dashboard__item-actions">
                    <div className="l-dashboard__item-actions-edit" data-id={item._id}>
                      <svg className="icon icon-logo"><use xlinkHref="#icon-edit"></use></svg>
                    </div>
                    <div className="l-dashboard__item-actions-delete" data-id={item._id}>
                      <svg className="icon icon-logo"><use xlinkHref="#icon-trash-2"></use></svg>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className={`l-dashboard__category-container ${this.state.showCategories ? '-show' : '-hidden'}`}>
              {this.state.categories.map((item, i) =>
                <div key={i} className="l-dashboard__item">
                  <div>
                    <span className="text -ff2-s -uppercase">{item.name}</span>
                  </div>
                  <div className="l-dashboard__item-actions">
                    <div className="l-dashboard__item-actions-edit" data-id={item._id}>
                      <svg className="icon icon-logo"><use xlinkHref="#icon-edit"></use></svg>
                    </div>
                    <div className="l-dashboard__item-actions-delete" data-id={item._id}>
                      <svg className="icon icon-logo"><use xlinkHref="#icon-trash-2"></use></svg>
                    </div>
                  </div>
                </div>
              )}
            </div>

          </div>
        </div>
      </div>
    )
  };
}

export default Dashboard;
