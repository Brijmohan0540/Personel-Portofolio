import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://indimitr.com'),
  title: 'IndiMitr | Premium Spiritual Stays in India',
  description: 'Luxury spiritual travel and homestay booking platform for divine Indian destinations.',
  openGraph: {
    title: 'IndiMitr',
    description: 'Experience Divine India with Premium Spiritual Stays',
    type: 'website'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
