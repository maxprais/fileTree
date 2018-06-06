import React from "react";
import { FileBranch } from '../../components/FileBranch';
import { connect } from "react-redux";
import { getFilesById } from '../../actions/filesData/filesData';
import { size } from 'lodash';
import './style.css';

const mapDispatchToProps = () => ({
  getFilesById: (id) => getFilesById(id)
});

const mapStateToProps = state => ({
  files: state.FilesReducer.files
});

class FileViewerElm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.onFileSelect = this.onFileSelect.bind(this);
  }

  componentWillMount() {
    const firstRowId = null;
    this.props.getFilesById(firstRowId);
  }

  onFileSelect(id) {
    console.log('parentId', id);
    this.props.getFilesById(id);
  }

  render() {
    const branchStyle = {
      gridTemplateColumns: `repeat(${size(this.props.files)}, auto)`
    };

    return (
      <div className="file-viewer"
           style={branchStyle}>
        {this.props.files.map((files, index) =>
          <FileBranch key={index}
                      files={files}
                      onFileSelect={this.onFileSelect} />
        )}
      </div>
    )
  }
}

export const FileViewer = connect(mapStateToProps, mapDispatchToProps)(FileViewerElm);