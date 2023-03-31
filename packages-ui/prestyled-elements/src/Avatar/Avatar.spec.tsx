import { render, screen } from '@testing-library/react';

import { Avatar } from './Avatar';

describe('Components / Avatar', () => {
  describe('Placeholder', () => {
    it('should display placeholder initials', () => {
      render(<Avatar placeholderInitials alt="Otis Redding" />);

      expect(initialsPlaceholderText()).toHaveTextContent('OR');
    });

    it('should support explicit sizes with placeholder initials', () => {
      render(<Avatar placeholderInitials alt="Otis Redding" size="xl" />);

      expect(initialsPlaceholder()).toHaveClass('h-36 w-36');
    });
    it('should support border color with placeholder initials', () => {
      render(<Avatar placeholderInitials alt="Otis Redding" bordered intent="success" />);

      expect(initialsPlaceholder()).toHaveClass('ring-success-500 dark:ring-success-500');
    });
  });
  describe('Image', () => {
    it('should support custom image elements', () => {
      // eslint-disable-next-line jsx-a11y/alt-text
      render(<Avatar alt="avatar" img={(props) => <img referrerPolicy="no-referrer" {...props} />} />);

      expect(img()).toHaveAttribute('referrerpolicy', 'no-referrer');
    });
  });
  describe('Status', () => {
    it('should have online status indicator', () => {
      render(<Avatar alt="avatar" statusDotState="online" />);

      expect(status()).toHaveClass('bg-green-400');
    });
  });
});

const status = () => screen.getByTestId('testmy-avatar-status');
const img = () => screen.getByTestId('testmy-avatar-img');
const initialsPlaceholder = () => screen.getByTestId('testmy-avatar-initials-placeholder');
const initialsPlaceholderText = () => screen.getByTestId('testmy-avatar-initials-placeholder-text');
