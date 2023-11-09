import { Inter } from 'next/font/google';
import StyledComponentsRegistry from './registry';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'developer portfolio',
};

export default function RootLayout({ children }) {
  return (
    <StyledComponentsRegistry>
      <html lang="en">
        <body>{children}</body>
      </html>
    </StyledComponentsRegistry>
  );
}
