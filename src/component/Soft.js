import React, { Component } from 'react';
// import './App.css';

class Soft extends Component {

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
            <li><a
              href="f"
              role="button"
              className="soft-selected">
              <span>
                <i className="fas fa-sort-alpha-down"></i>
                Từ A - Z
              </span>
            </a></li>
            <li><a
              href="v"
              role="button"
              className="soft-selected">
              <span>
                <i className="fas fa-sort-alpha-up"></i>
                Từ Z - A
              </span>
            </a></li>
            <li><a
              href="b"
              role="button"
              className="soft-selected">
              Trạng thái Kích Hoạt
            </a></li>
            <li><a
              href="c"
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
