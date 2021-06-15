import React from 'react'
import { render } from '@testing-library/react';
import FilterButton from "./FilterButton";

describe("Filter Button", () => 
{
  it('should render', () => {
    const { container } = render(<FilterButton name="Completed" />);
    expect(container).toMatchSnapshot();
  });
})
