import { ComponentProps, FC } from 'react';
import { ToggleIconButton } from '@prestyled/elements';
import { FiToggleLeft, FiToggleRight } from 'react-icons/fi';
export type AppLayoutProps = ComponentProps<'div'> & {
  headerNav?: FC;
  headerTools?: FC;
  sidebar?: FC;
  footer?: FC;
};

export const AppLayout: FC<AppLayoutProps> = ({
  children,
  footer: Footer,
  sidebar: Sidebar,
  headerNav: HeaderNav,
  headerTools: HeaderTools,
  ...props
}) => {
  return (
    <div
      className={`group relative grid h-full grid-rows-[4rem_1fr_auto] overflow-hidden ${
        Sidebar && 'transition-all lg:grid-cols-[4rem_1fr] lg:has-checkbox-checked:grid-cols-[300px_1fr]'
      }`}
      {...props}
    >
      <header
        className={`w-full border-b border-base-200 bg-white p-3 dark:border-base-700  dark:bg-base-800 lg:px-5 lg:pl-3 ${
          Sidebar && 'lg:col-span-2'
        }`}
      >
        <ToggleIconButton inactiveIcon={FiToggleLeft} activeIcon={FiToggleRight} />
        {HeaderNav && <HeaderNav />}
        {HeaderTools && <HeaderTools />}
      </header>
      {Sidebar && (
        <aside className="absolute bottom-0 left-0 top-16 z-20 w-[300px] translate-x-[-100%] border-e border-base-200 bg-white transition-transform group-[:has([data-toggle-checkbox]:checked)]:translate-x-0 dark:border-base-700  dark:bg-base-800 lg:static lg:row-span-2 lg:w-full lg:translate-x-0">
          <Sidebar />
        </aside>
      )}
      <main className="overflow-auto">{children}</main>
      {Footer && <Footer />}
    </div>
  );
};

export default AppLayout;
