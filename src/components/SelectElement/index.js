import React from "react";
import PropTypes from 'prop-types';
import './style.css';

export class SelectElement extends React.Component {

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
      <select name={this.props.sectionKey}
              className="select-element"
              value={this.state.searchValue}
              onChange={this.onElementChange}>
        { this.props.options.map((option, index) =>
          <option key={index}
                  value={option.id}>{option.value}</option>) }
      </select>
    )
  }
}

SelectElement.propTypes = {
  sectionKey: PropTypes.string,
  options: PropTypes.array,
  onElementChange: PropTypes.func
};
