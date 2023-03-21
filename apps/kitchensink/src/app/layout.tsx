import { Lato } from '@next/font/google';
import Link from 'next/link';

import 'ui/styles.css';
import '@/styles/globals.css';

// include styles from the ui package

const lato = Lato({ weight: ['400', '700'], subsets: ['latin'], variable: '--font-lato' });
export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className={`${lato.variable} light`} lang="en">
      <body className="flex h-full flex-col bg-zinc-50 dark:bg-black dark:text-base-200">
        <header>
          <nav>
            <Link href="/">Home</Link>
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
