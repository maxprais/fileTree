import React from "react";
import { SearchElement } from '../../components/SearchElement';
import { SelectElement } from '../../components/SelectElement';
import { SORT_OPTIONS } from './consts/consts';
import { cloneDeep } from 'lodash';
import './style.css';

export class FilterTools extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showFilters: false,
    };
    this.onElementChange = this.onElementChange.bind(this);
    this.toggleFilters = this.toggleFilters.bind(this);
  }

  onElementChange(key, value) {
    key === 'sort' && this.toggleFilters();
    this.props.onElementChange(key, value);
  }

  toggleFilters() {
    this.setState({ showFilters: !this.state.showFilters });
  }

  render() {
    return (
      <div className="filter-tools-container">
        <div className="filter-tools-header">
          <div className="logo"></div>
          <SearchElement sectionKey="search"
                         onElementChange={this.onElementChange} />
          <div className="arrow-down"
               onClick={this.toggleFilters} />
        </div>
        <div className={`filters ${this.state.showFilters ? 'visible' : 'hidden'}`}>
          <span>Sort by:</span>
          <SelectElement sectionKey="sort"
                         options={cloneDeep(SORT_OPTIONS)}
                         onElementChange={this.onElementChange}/>
        </div>
      </div>
    )
  }
}
