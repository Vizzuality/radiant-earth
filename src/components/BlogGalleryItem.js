import React from 'react';
import PropTypes from 'prop-types';

function BlogGalleryItem(props) {
  const { picture, category, title, summary, link, source } = props;
  const itemStyle = picture ? { backgroundImage: `url('${picture}')` } : null;
  return (
    <div className="l-blog__gallery-item">
      <a href={link}>
        <div className="l-blog__gallery-item-picture" style={itemStyle}>
          {source === 'Medium' &&
          <svg
            className="icon icon-logo l-blog__gallery-item-logo"
          >
            <use xlinkHref="#icon-medium">{}</use>
          </svg>
          }
        </div>
        <span className="text -ff2-xs -color-2 -uppercase">{category}</span>
        <h2 className="l-blog__gallery-item-title text -ff2-l -white">{title}</h2>
        <p className="l-blog__gallery-item-summary text -ff1-m -white">{summary}</p>
      </a>
    </div>
  );
}

BlogGalleryItem.propTypes = {
  picture: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired
};

export default BlogGalleryItem;
