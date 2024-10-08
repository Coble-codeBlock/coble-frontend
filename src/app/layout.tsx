import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import ReactQueryProviders from '@/providers/ReactQueryProviders';
import JotaiProviders from '@/providers/JotaiProviders';
import { styled } from '@linaria/react';
import { flex } from '@/styles';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GoogleAnalytics from '@/lib/GoogleAnalytics';

const inter = Inter({ subsets: ['latin'] });

interface PageProps {
  pathname?: string;
}

export const metadata: Metadata = {
  title: 'Coble',
  description: '블록 코딩으로 교육을! Coble',
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS ? (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
        ) : null}
        <ReactQueryProviders>
          <JotaiProviders>
            <MainLayout>
              <ToastContainer autoClose={1500} limit={3} />
              {children}
            </MainLayout>
          </JotaiProviders>
        </ReactQueryProviders>
      </body>
    </html>
  );
}

const MainLayout = styled.div`
  ${flex.COLUMN_FLEX}
`;
