import React from "react";
import { FileViewer } from '../FileViewer';

export class MasterPage extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <FileViewer />
    )
  }
}
