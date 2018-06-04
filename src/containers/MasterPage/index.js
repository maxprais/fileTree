import React from "react";
import { connect } from "react-redux";
import { getAllFiles } from '../../actions/filesData/filesData';
import _ from 'lodash';

const mapDispatchToProps = () => ({
  getAllFiles: () => getAllFiles(),
});

const mapStateToProps = state => ({
  files: state.FilesReducer.files
});

class MasterPageElm extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.getAllFiles();
  }

  componentDidMount() {
    console.log(this.props.files);
  }

  render() {
    return (
      <div>{this.props.files.map((file, index) =>
        <div key={index}>{file.title}</div>)}</div>
    )
  }
}


export const MasterPage = connect(mapStateToProps, mapDispatchToProps)(MasterPageElm);