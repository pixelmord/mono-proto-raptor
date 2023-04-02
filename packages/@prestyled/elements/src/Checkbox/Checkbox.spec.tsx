import { render, screen } from '@testing-library/react';
import { Checkbox } from './Checkbox';

describe('Checkbox A11y', () => {
  it('should have role="checkbox" by default', () => {
    render(<Checkbox />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeInTheDocument();
  });
});
