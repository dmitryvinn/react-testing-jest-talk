import React from 'react'
import { render, screen } from '@testing-library/react';
import FilterButton from "./FilterButton";

describe("Filter Button", () => {
  it("should display its label", () => {
    const expectedLabel = "All";
    const testId = "test-btn-" + expectedLabel;

    render(<FilterButton name={expectedLabel} />);
    const filterButton = screen.getByTestId(testId);
    expect(filterButton.textContent).toEqual(expectedLabel);
  });
});