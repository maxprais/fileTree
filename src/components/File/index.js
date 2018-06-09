import React from "react";
import './style.css';
import PropTypes from 'prop-types';

export class File extends React.Component {

  constructor(props) {
    super(props);
    this.onSelect = this.onSelect.bind(this);
  }

  onSelect() {
    this.props.onSelect(this.props.id);
  }

  isFileSelected() {
    return this.props.selectedFileId === this.props.id;
  }

  render() {
    return (
      <div className={`file-container
                      ${this.isFileSelected() ? 'selected' : ''}`}
           onClick={this.onSelect}>
        <span>{this.props.title}</span>
      </div>
    )
  }
}

File.propTypes = {
  id: PropTypes.string,
  selectedFileId: PropTypes.string,
  title: PropTypes.string,
  onSelect: PropTypes.func
};
