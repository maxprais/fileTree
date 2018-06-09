import React from "react";
import { File } from '../../components/File';
import PropTypes from 'prop-types';
import './style.css';

export class FileBranch extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedFileId: null
    };
    this.onFileSelect = this.onFileSelect.bind(this);
  }

  onFileSelect(id) {
    this.setState({ selectedFileId: id });
    this.props.onFileSelect(id);
  }

  render() {
    return (
      <div className="file-branch">{this.props.files.map((file, index) =>
          <File key={index}
                id={file.id}
                title={file.title}
                createdAt={file.createdAt}
                modifiedAt={file.modifiedAt}
                selectedFileId={this.state.selectedFileId}
                onSelect={this.onFileSelect}/>
          )
      }
      </div>
    )
  }
}

FileBranch.propTypes = {
  files: PropTypes.array,
  onFileSelect: PropTypes.func
};
