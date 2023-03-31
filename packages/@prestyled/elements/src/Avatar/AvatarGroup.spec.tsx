import { render, screen } from '@testing-library/react';
import { AvatarGroup } from './AvatarGroup';
import '@testing-library/jest-dom';
describe('AvatarGroup', () => {
  it('renders the avatar group element with the correct classname', () => {
    render(
      <AvatarGroup className="test-class">
        <div>Test child</div>
      </AvatarGroup>
    );
    const avatarGroupElement = screen.getByTestId('avatar-group-element');
    expect(avatarGroupElement).toBeInTheDocument();
    expect(avatarGroupElement).toHaveClass('test-class');
  });
});
