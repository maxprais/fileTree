import React from "react";
import { FileBranch } from '../../components/FileBranch';
import { FilterTools } from '../FilterTools';
import { connect } from "react-redux";
import { getFilesById, searchFilesByTitle, sortFiles } from '../../actions/filesData/filesData';
import { size } from 'lodash';
import './style.css';

const mapDispatchToProps = () => ({
  getFilesById: (id) => getFilesById(id),
  searchFilesByTitle: (text) => searchFilesByTitle(text),
  sortFiles: (sortValue) => sortFiles(sortValue)
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

  onElementChange(key, value) {
    let conditions = {
      search: () => this.props.searchFilesByTitle(value),
      sort: () => this.props.sortFiles(value)
    };
    conditions[key].apply();
  }

  render() {
    const branchStyle = {
      gridTemplateColumns: `repeat(${size(this.props.files)}, 300px)`
    };
    console.log('this.props.files', this.props.files);

    return (
      <div className="file-viewer"
           style={branchStyle}>
        <FilterTools onElementChange={this.onElementChange} />
        {size(this.props.files) > 0
          ? this.props.files.map((files, index) =>
              <FileBranch key={index}
                          files={files}
                          onFileSelect={this.onFileSelect} />)
          : <span>No files found!</span>
        }
      </div>
    )
  }
}

export const FileViewer = connect(mapStateToProps, mapDispatchToProps)(FileViewerElm);