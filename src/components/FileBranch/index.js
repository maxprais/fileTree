import React from "react";
import { File } from '../../components/File';
import PropTypes from 'prop-types';

export class FileBranch extends React.Component {

  constructor(props) {
    super(props);
    this.onFileSelect = this.onFileSelect.bind(this);
  }

  onFileSelect(id) {
    this.props.onFileSelect(id);
  }

  render() {
    return (
      <div>{this.props.files.map((file, index) =>
          <File key={index}
                id={file.id}
                title={file.title}
                onSelect={this.onFileSelect}/>)
      }
      </div>
    )
  }
}

FileBranch.propTypes = {
  files: PropTypes.array,
  onFileSelect: PropTypes.func
};
