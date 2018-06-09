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
        { this.props.createdAt || this.props.modifiedAt
          ? <div className="file-info">
              { this.props.createdAt &&
                <div>Created at: <span>{new Date(this.props.createdAt).toDateString()}</span></div> }
              { this.props.modifiedAt &&
                <div>Modified at: <span>{new Date(this.props.modifiedAt).toDateString()}</span></div> }
            </div>
          : ''}
      </div>
    )
  }
}

File.propTypes = {
  id: PropTypes.string,
  selectedFileId: PropTypes.string,
  title: PropTypes.string,
  createdAt: PropTypes.number,
  modifiedAt: PropTypes.number,
  onSelect: PropTypes.func
};
