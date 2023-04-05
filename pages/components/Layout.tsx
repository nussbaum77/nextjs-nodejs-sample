import React, { ReactNode } from 'react';
import Head from 'next/head';
import Link from 'next/link';

interface LayoutProps {
  title: string;
  description: string;
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ title, description, children }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>

      <header>
        <nav>
          <ul>
            <li>
              <Link href="/">
                Demo Header 1
              </Link>
            </li>
            <li>
              <Link href="/">
                Demo Header 2
              </Link>
            </li>
            <li>
              <Link href="/">
                Demo Header 3
              </Link>
            </li>
            <li>
              <Link href="/">
                Demo Header 4
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main>{children}</main>
    </div>
  );
};

export default Layout;
