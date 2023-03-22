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
  children,
  className,
  previousLabel = 'Previous',
  nextLabel = 'Next',
  onPageChange = () => {},
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
            className="ml-0 rounded-l-lg border border-gray-300 bg-white py-2 px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
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
                'w-12 border border-gray-300 bg-white py-2 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white',
                currentPage === page &&
                  'bg-blue-50 text-blue-600 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white'
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
            className="rounded-r-lg border border-gray-300 bg-white py-2 px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            onClick={goToNextPage}
          >
            {nextLabel}
          </button>
        </li>
      </ul>
    </nav>
  );
};
