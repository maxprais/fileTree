import React from "react";
import PropTypes from 'prop-types';
import './style.css';

export class SearchElement extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      searchValue: ''
    };
    this.onElementChange = this.onElementChange.bind(this);
  }

  onElementChange(event) {
    const searchValue = event.target.value;
    this.setState({ searchValue });
    this.props.onElementChange(this.props.sectionKey, searchValue);
  }

  render() {
    return (
      <input className="search-field"
             placeholder="Search..."
             onKeyUp={this.onElementChange}  />
    )
  }
}

SearchElement.propTypes = {
  sectionKey: PropTypes.string,
  onElementChange: PropTypes.func
};
