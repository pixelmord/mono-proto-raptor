import { render, screen } from '@testing-library/react';
import { ToggleSwitch } from './ToggleSwitch';

describe('ToggleSwitch A11y', () => {
  it('should have role="checkbox" by default', () => {
    render(<ToggleSwitch />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeInTheDocument();
  });
});
