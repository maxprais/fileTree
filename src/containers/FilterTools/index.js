import React from "react";
import { SearchElement } from '../../components/SearchElement';
import './style.css';

export class FilterTools extends React.Component {

  constructor(props) {
    super(props);
    this.onElementChange = this.onElementChange.bind(this);
  }

  onElementChange(key, value) {
    this.props.onElementChange(key, value);
  }

  render() {
    return (
      <div className="filter-tools-header">
        <div className="logo"></div>
        <SearchElement sectionKey="search"
                       onElementChange={this.onElementChange} />
      </div>
    )
  }
}
