import React from "react";
import { connect } from "react-redux";
import { getAllFiles } from '../../actions/filesData/filesData';

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

  render() {
    return (
      <div />
    )
  }
}


export const MasterPage = connect(mapStateToProps, mapDispatchToProps)(MasterPageElm);