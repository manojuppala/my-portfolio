import React from "react";

const Searchbar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark searchbar">
      <div className="input-group col-md-5 mx-auto">
        <input
          className="form-control text-light bg-dark input-query"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <span className="input-group-append">
          <button type="button" className="btn btn-primary">
            <i className="fa fa-search"></i>
          </button>
        </span>
      </div>
    </nav>
  );
};

export default Searchbar;
