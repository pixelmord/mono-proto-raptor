import { render, screen } from '@testing-library/react';
import { ToggleIconButton } from './ToggleIconButton';
import { ToggleLeftIcon } from '../icons/ToggleLeftIcon';
import { ToggleRightIcon } from '../icons/ToggleRightIcon';

describe('ToggleIconButton A11y', () => {
  it('should have role="checkbox" by default', () => {
    render(<ToggleIconButton inactiveIcon={ToggleLeftIcon} activeIcon={ToggleRightIcon} />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeInTheDocument();
  });
});
