import React, { Component } from 'react';
// import './App.css';

class Soft extends Component {
  constructor(props) {
    super(props);
    this.state  = {
      sort: { 
        by: 'name',
        value: 1,
      }
    }
  }

  onClick = (sortBy, sortValue) => {
    // console.log(sortBy, sortValue);
      this.setState ({
        soft: {
          by: sortBy,
          value: sortValue
    }
  });

//  this.props.onSort(this.state.onSort);
}
s
  render() {
    return (
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        {/* soft  */}
        <div className="dropdown">
          <button
            className="btn btn-primary dropdown-toggle"
            type="button"
            id="dropdownMenu1"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false">
            Sắp xếp
              <span><i className="fas fa-caret-square-down ml-10"></i></span>
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
            <li onClick = { () => this.onClick('name', 1)}><a
              href
              role="button"
              className="soft-selected">
              <span>
                <i className="fas fa-sort-alpha-down"></i>
                Từ A - Z
              </span>
            </a></li>
            <li onClick = { () => this.onClick('name', -1)}><a
              href
              role="button"
              className="soft-selected">
              <span>
                <i className="fas fa-sort-alpha-up"></i>
                Từ Z - A
              </span>
            </a></li>
            <li onClick = { () => this.onClick('status', 1)}><a
              href
              role="button"
              className="soft-selected">
              Trạng thái Kích Hoạt
            </a></li>
            <li onClick = { () => this.onClick('status', -1)}><a
              href
              role="button"
              className="soft-selected">
              Trạng thái Ẩn
            </a></li>
          </ul>
        </div>
      </div>
    );
  }

}

export default Soft;
