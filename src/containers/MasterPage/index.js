import React from "react";
import { connect } from "react-redux";
import { getAllFiles, getFilesById } from '../../actions/filesData/filesData';
import File from '../../components/File';

const mapDispatchToProps = () => ({
  getAllFiles: () => getAllFiles(),
  getFilesById: (id) => getFilesById(id)
});

const mapStateToProps = state => ({
  files: state.FilesReducer.files
});

class MasterPageElm extends React.Component {

  constructor(props) {
    super(props);
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
    return (
      <div>{this.props.files.map(files =>
        files.map((file, index) =>
          <File key={index}
                id={file.id}
                title={file.title}
                onSelect={this.onFileSelect}/>))
      }
      </div>
    )
  }
}


export const MasterPage = connect(mapStateToProps, mapDispatchToProps)(MasterPageElm);