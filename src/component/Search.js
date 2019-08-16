import React, { Component } from 'react';
// import './App.css';

class Search extends Component {

  render() {
    return (
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        {/* search  */}
        <div className="input-group">
          <input
            name="keyword"
            type="text"
            className="form-control"
            placeholder="Search" />
          <span className="input-group-btn">
            <button type="button" className="btn btn-primary">
              <span><i className="fas fa-search mr-10"></i></span>
              Tìm
            </button>
          </span>
        </div>
      </div>
    );
  }

}

export default Search;
