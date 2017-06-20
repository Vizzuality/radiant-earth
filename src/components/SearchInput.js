import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchInput extends Component {
  render() {
    return (
      <div className="c-search-input">
        <input type="text" placeholder={this.props.placeholder} />
        <svg className="icon icon-search"><use xlinkHref="#icon-search"></use></svg>
      </div>
    )
  };
}

SearchInput.propTypes = {
  placeholder: PropTypes.string
};

export default SearchInput;
