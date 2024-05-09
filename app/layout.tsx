import type { Metadata } from 'next';
import { Fira_Code } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const fira = Fira_Code({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'MNV',
  description: 'Portfolio website',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={fira.className}>
        <Header></Header>
        <main className='main'>{children}</main>
        <Footer></Footer>
      </body>
    </html>
  );
}
