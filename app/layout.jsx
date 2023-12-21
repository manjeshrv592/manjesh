import '@/styles/globals.css';
import { Poppins as FontSans } from 'next/font/google';
import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/context/ThemeProvider';
import { Analytics } from '@vercel/analytics/react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const fontSans = FontSans({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-sans',
});

export const metadata = {
  title: 'Home',
  description:
    "Hello, I'm Manjesh, a Full Stack Web Developer. Explore my diverse portfolio showcasing a blend of creativity and technical expertise. From front-end aesthetics to back-end functionality, each project reflects my passion for web development. Open for collaboration and discussion about your projects – let's build something remarkable together!",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        className={cn(
          'min-h-screen font-sans antialiased bg-dark text-mj-grey-200',
          fontSans.variable
        )}>
        <ThemeProvider>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
