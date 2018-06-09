import React from "react";
import { FileBranch } from '../../components/FileBranch';
import { FilterTools } from '../FilterTools';
import { connect } from "react-redux";
import { getFilesById, searchFilesByTitle } from '../../actions/filesData/filesData';
import { size } from 'lodash';
import './style.css';

const mapDispatchToProps = () => ({
  getFilesById: (id) => getFilesById(id),
  searchFilesByTitle: (text) => searchFilesByTitle(text)
});

const mapStateToProps = state => ({
  files: state.FilesReducer.files
});

class FileViewerElm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.onFileSelect = this.onFileSelect.bind(this);
    this.onElementChange = this.onElementChange.bind(this);
  }

  componentWillMount() {
    const firstRowId = null;
    this.props.getFilesById(firstRowId);
  }

  onFileSelect(id) {
    this.props.getFilesById(id);
  }

  onElementChange(key, text) {
    let conditions = {
      search: () => this.props.searchFilesByTitle(text)
    };
    conditions[key].apply();
  }

  render() {
    const branchStyle = {
      gridTemplateColumns: `repeat(${size(this.props.files)}, 300px)`
    };

    return (
      <div className="file-viewer"
           style={branchStyle}>
        <FilterTools onElementChange={this.onElementChange} />
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