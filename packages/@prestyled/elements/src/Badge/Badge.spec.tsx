import { render, screen } from '@testing-library/react';
import { HiCheck } from 'react-icons/hi';

import { Badge } from './Badge';

describe('Components / Badge', () => {
  describe('Theme', () => {
    it('should use custom intents', () => {
      render(
        <Badge intent="info" href="/" icon={HiCheck}>
          A badge
        </Badge>
      );

      expect(badge()).toHaveClass(
        'bg-blue-100 text-blue-800 dark:bg-blue-200 dark:text-blue-800 group-hover:bg-blue-200 dark:group-hover:bg-blue-300'
      );
    });

    it('should use custom sizes', () => {
      render(
        <>
          <Badge size="xs">A badge</Badge>
          <Badge icon={HiCheck} size="xs" />
        </>
      );

      const badges = screen.getAllByTestId('testmy-badge');
      const regularBadge = badges[0];
      const emptyBadge = badges[1];

      expect(regularBadge).toHaveClass('text-2xl');
      expect(regularBadge).toHaveClass('rounded-lg p-1');
      expect(emptyBadge).toHaveClass('rounded-full p-5');
      expect(icon()).toHaveClass('w-6 h-6');
    });
  });
});

const badge = () => screen.getByTestId('testmy-badge');

const icon = () => screen.getByTestId('testmy-badge-icon');
