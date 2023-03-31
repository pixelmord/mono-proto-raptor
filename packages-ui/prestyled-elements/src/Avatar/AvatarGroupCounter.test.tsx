import { render, screen } from '@testing-library/react';
import { AvatarGroupCounter } from './AvatarGroupCounter';

describe('AvatarGroupCounter', () => {
  it('renders the counter element with the correct classname', () => {
    render(<AvatarGroupCounter total={3} href="test" className="test-class" />);
    const counterElement = screen.getByText('+3');
    expect(counterElement).toBeInTheDocument();
    expect(counterElement).toHaveClass('test-class');
    expect(counterElement).toHaveAttribute('href', 'test');
  });
});
