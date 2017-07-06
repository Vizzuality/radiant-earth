import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BlogGalleryItem extends Component {
  render() {
    const itemStyle = this.props.picture ? {backgroundImage: `url('${this.props.picture}')`} : null;
    return (
      <div className="l-blog__gallery-item">
        <a href={this.props.link}>
          <div className="l-blog__gallery-item-picture" style={itemStyle}>
            {this.props.source === 'Medium' &&
            <svg className="icon icon-logo l-blog__gallery-item-logo"><use xlinkHref="#icon-medium"></use></svg>
            }
          </div>
          <span className="text -ff2-xs -color-2 -uppercase">{this.props.category}</span>
          <h2 className="l-blog__gallery-item-title text -ff2-l -white">{this.props.title}</h2>
          <p className="l-blog__gallery-item-summary text -ff1-m -white">{this.props.summary}</p>
        </a>
      </div>
    )
  };
}

BlogGalleryItem.propTypes = {
  picture: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  source: PropTypes.string,
};

export default BlogGalleryItem;
