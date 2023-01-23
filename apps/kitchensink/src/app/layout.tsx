import { Lato } from '@next/font/google';

import 'ui/styles.css';
import '@/styles/globals.css';

// include styles from the ui package

const lato = Lato({ weight: ['400', '700'], subsets: ['latin'], variable: '--font-lato' });
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className={`${lato.variable} light`}>
      <body className="flex h-full flex-col bg-zinc-50 dark:bg-black dark:text-base-200">
        <main>{children}</main>
      </body>
    </html>
  );
}
