import React from "react";
import Form from "./Form";

const Header = props => {
  return (
    <div className="vsr-header">
      <h1>Vehicle Search Results</h1>
      <Form className="header-search" handleSearch={props.handleSearch} />
    </div>
  );
};

export default Header;
