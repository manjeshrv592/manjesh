import '@/styles/globals.css';
import { Poppins as FontSans } from 'next/font/google';
import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/context/ThemeProvider';
import { Analytics } from '@vercel/analytics/react';

const fontSans = FontSans({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-sans',
});

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased dark:bg-slate-900 dark:text-slate-100',
          fontSans.variable
        )}>
        <ThemeProvider>{children}</ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
