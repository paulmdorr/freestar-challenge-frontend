import { MuseoModerno } from 'next/font/google';
import './globals.css';
import StyledComponentsRegistry from './lib/registry';

const museo = MuseoModerno({
  subsets: ['latin'],
  display: 'swap',
  adjustFontFallback: false,
});

export const metadata = {
  title: 'Blackjack',
  description: 'A simple blackjack game built with Next.js and Express.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={museo.className}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
