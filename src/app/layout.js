import { Space_Grotesk } from 'next/font/google';
import StyledComponentsRegistry from './registry';

const spacegrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: 'developer portfolio',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={spacegrotesk.className}>
      <body>
        <StyledComponentsRegistry>
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
