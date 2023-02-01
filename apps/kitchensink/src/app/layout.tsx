import { Lato } from '@next/font/google';
import { cookies } from 'next/headers';
import Link from 'next/link';

import 'ui/styles.css';
import '@/styles/globals.css';

import { getRequestCookie } from '@/lib/getRequestCookie';

// include styles from the ui package

const lato = Lato({ weight: ['400', '700'], subsets: ['latin'], variable: '--font-lato' });
export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const session = await getRequestCookie(cookies());
  return (
    <html className={`${lato.variable} light`}>
      <body className="flex h-full flex-col bg-zinc-50 dark:bg-black dark:text-base-200">
        <header>
          <nav>
            <Link href="/">Home</Link>
          </nav>
          User: {session?.record?.username}
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
