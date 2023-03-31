import { Lato } from 'next/font/google';
import Link from 'next/link';

import '@/styles/globals.css';

import { Metadata } from 'next';

// include styles from the ui package

const lato = Lato({ weight: ['400', '700'], subsets: ['latin'], variable: '--font-lato' });
export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className={`${lato.variable} light h-full overflow-hidden`} lang="en">
      <body className="h-full overflow-hidden bg-zinc-50 dark:bg-black dark:text-base-200">
        <div className="grid h-full grid-rows-[auto_1fr_auto] overflow-hidden">
          <header>
            <nav>
              <Link href="/">Home</Link>
              <Link href="/demo">Demo</Link>
            </nav>
          </header>
          <main className="overflow-auto">{children}</main>
          <footer>Footer</footer>
        </div>
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: {
    default: 'Kitchensink',
    template: '%s | Kitchensink',
  },
  description: 'Rapid Prototyping Kitchensink',
  icons: [
    { rel: 'shortcut icon', url: '/favicon.ico' },
    { rel: 'icon', url: '/static/icons/favicon-32x32.png', sizes: '32x32' },
    { rel: 'icon', url: '/static/icons/favicon-16x16.png', sizes: '16x16' },
    { rel: 'apple-touch-icon', url: '/static/icons/apple-touch-icon.png', sizes: '180x180' },
  ],
  manifest: '/site.webmanifest',
};
