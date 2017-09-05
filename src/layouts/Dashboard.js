import React, { Component } from 'react';
import axios from 'axios';
import {
  Redirect,
  Link
} from 'react-router-dom';


class Dashboard extends Component {

  constructor (props) {
    super(props);

    this.state = {
      count: 1,
      showLoader: false,
      showAlertDelete: false,
      showBack: false,
      logout: false,
      showSuccess: false,
      showBlogs: true,
      showCategories: false,
      idBlog: '',
      idCategory: '',
      blogDelete: false,
      categoryDelete: true,
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


  showDeleteCategory(e) {
    this.setState({
       showBack: true,
       showAlertDelete: true,
       blogDelete: false,
       categoryDelete: true,
       idCategory: e.target.getAttribute('data-id')
     });
  }


  showDeleteBlog(e) {
    this.setState({
       showBack: true,
       showAlertDelete: true,
       blogDelete: true,
       categoryDelete: false,
       idBlog: e.target.getAttribute('data-id')
     });
  }

  deleteElement() {
    this.setState({
      showLoader: true,
      showAlertDelete: false,
    });

    if (this.state.categoryDelete) {
      var id = this.state.idCategory;
      axios.delete(process.env.REACT_APP_API_CATEGORY_URL, {
        params: { category_id: id }
      })
      .then(function (response) {
        setTimeout(function(){
          this.loadCategories();
          this.setState({
            showLoader: false,
            showSuccess: true,
            showBack: false,
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

    if (this.state.blogDelete) {
      var idPost = this.state.idBlog;
      axios.delete(process.env.REACT_APP_API_POSTS_URL, {
        params: { post_id: idPost }
      })
      .then(function (response) {
        setTimeout(function(){
          this.loadBlog();
          this.setState({
            showLoader: false,
            showSuccess: true,
            showBack: false,
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
  }


  componentDidMount() {
    this.loadBlog();
    this.loadCategories();
  }

  render() {

    if (localStorage.getItem('loginSuccess') === null || localStorage.getItem('loginSuccess') === 'false' || this.setState.logout) {
      return (
        <Redirect to='/admin/login'/>
      )
    }

    return (
      <div className="l-dashboard align-center">
        <div className={`l-dashboard__alert-box ${this.state.showAlertDelete ? '-show' : ''}`}>
          <h3 className="text -ff2-xm">Do you want to delete it?</h3>
          <div className="l-dashboard__alert-box-options">
            <span className="option -yes text -ff2-xs -white -uppercase" onClick={this.deleteElement.bind(this)}>yes</span>
            <span className="option -no text -ff2-xs -white -uppercase">no</span>
          </div>
        </div>
        <div className={`l-add-dashboard__message -success ${this.state.showSuccess ? '-show' : ''}`}>
          <span className="text -white">success!</span>
        </div>
        <div className={`l-add-dashboard__back-loader ${this.state.showBack ? '-show' : ''}`} ref={(loader) => { this.loader = loader; }}>
          <div className={`c-loader ${this.state.showLoader ? '' : '-hidden'}`}>
            <div className="c-loader__ball-scale-multiple">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
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

            <div className={`row l-dashboard__blog-container ${this.state.showBlogs ? '-show' : '-hidden'}`}>
              {this.state.posts.map((item, i) =>
                <div key={i} className="l-dashboard__item large-4 medium-4 small-4">
                  <div>
                    <span className="text -ff2-s -uppercase">({i + 1}) {item.title}</span>
                    <p className="tags text -ff2-s -color-2 l-dashboard__item-tag">{item.category}</p>
                  </div>
                  <div className="l-dashboard__item-actions">
                    <Link className="l-dashboard__item-actions-edit" data-id={item._id} to={{ pathname: '/admin/edit-blog', query: item._id  }}>
                      <svg data-id={item._id} className="icon icon-logo"><use data-id={item._id} xlinkHref="#icon-edit"></use></svg>
                    </Link>
                    <div className="l-dashboard__item-actions-delete" data-id={item._id} onClick={this.showDeleteBlog.bind(this)}>
                      <svg data-id={item._id} className="icon icon-logo"><use data-id={item._id} xlinkHref="#icon-trash-2"></use></svg>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className={`row l-dashboard__category-container ${this.state.showCategories ? '-show' : '-hidden'}`}>
              {this.state.categories.map((item, i) =>
                <div key={i} className="l-dashboard__item large-4 medium-4 small-4">
                  <div>
                    <span className="text -ff2-s -uppercase">{item.name}</span>
                  </div>
                  <div className="l-dashboard__item-actions">
                    <Link className="l-dashboard__item-actions-edit" data-id={item._id} to={{ pathname: '/admin/edit-category', query: item._id  }}>
                      <svg data-id={item._id} className="icon icon-logo"><use data-id={item._id} xlinkHref="#icon-edit"></use></svg>
                    </Link>
                    <div className="l-dashboard__item-actions-delete" data-id={item._id} onClick={this.showDeleteCategory.bind(this)}>
                      <svg data-id={item._id} className="icon icon-logo"><use data-id={item._id} xlinkHref="#icon-trash-2"></use></svg>
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
