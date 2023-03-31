import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';
import range from '../utils/range';

export type PaginationProps = PropsWithChildren<
  ComponentProps<'nav'> & {
    currentPage: number;
    nextLabel?: string;
    onPageChange: (page: number) => void;
    previousLabel?: string;
    totalPages: number;
  }
>;

export const Pagination: FC<PaginationProps> = ({
  className,
  previousLabel = 'Previous',
  nextLabel = 'Next',
  onPageChange = () => {
    return;
  },
  currentPage,
  totalPages,
  ...props
}) => {
  const classString = twMerge('my-3 text-center', className);
  const firstPage = Math.max(1, currentPage - 3);
  const lastPage = Math.min(currentPage + 3, totalPages);

  const goToNextPage = (): void => {
    onPageChange(Math.min(currentPage + 1, totalPages));
  };

  const goToPreviousPage = (): void => {
    onPageChange(Math.max(currentPage - 1, 1));
  };

  return (
    <nav className={classString} {...props}>
      <ul className="xs:mt-0 mt-2 inline-flex items-center -space-x-px">
        <li>
          <button
            type="button"
            className="hover:bg-base-100 dark:bg-base-800 dark:hover:bg-base-700 text-base-500 hover:text-base-700 dark:text-base-400 border-base-300 dark:border-base-700 ml-0 rounded-l-lg border bg-white px-3 py-2 leading-tight dark:hover:text-white"
            onClick={goToPreviousPage}
          >
            {previousLabel}
          </button>
        </li>
        {range(firstPage, lastPage).map((page: number) => (
          <li aria-current={page === currentPage ? 'page' : undefined} key={page}>
            <button
              type="button"
              className={twMerge(
                'hover:bg-base-100 dark:bg-base-800 dark:hover:bg-base-700 text-base-500 hover:text-base-700 dark:text-base-400 border-base-300 dark:border-base-700 w-12 border bg-white py-2 leading-tight dark:hover:text-white',
                currentPage === page &&
                  'dark:bg-base-700 dark:border-base-700 bg-accent-50 text-accent-600 hover:bg-accent-100 hover:text-accent-700 dark:text-white'
              )}
              onClick={() => onPageChange(page)}
            >
              {page}
            </button>
          </li>
        ))}
        <li>
          <button
            type="button"
            className="hover:bg-base-100 dark:bg-base-800 dark:hover:bg-base-700 text-base-500 hover:text-base-700 dark:text-base-400 border-base-300 dark:border-base-700 rounded-r-lg border bg-white px-3 py-2 leading-tight dark:hover:text-white"
            onClick={goToNextPage}
          >
            {nextLabel}
          </button>
        </li>
      </ul>
    </nav>
  );
};
