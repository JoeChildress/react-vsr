import React from "react";

const Form = props => {
  return (
    <form>
      <label htmlFor="text">Search </label>
      <input
        onChange={e => {
          props.handleSearch(e.target.value.trim());
        }}
        type="text"
        name="text"
        id="text"
      />
    </form>
  );
};

export default Form;
