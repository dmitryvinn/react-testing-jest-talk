import React from "react";

function FilterButton(props) {
  const dataTestId = "test-btn-" + props.name;
  return (
    <button
      type="button"
      className="btn toggle-btn"
      data-testid={dataTestId}
      aria-pressed={props.isPressed}
      onClick={() => props.setFilter(props.name)}
    >
      <span>{props.name}</span>
    </button>
  );
}

export default FilterButton;
