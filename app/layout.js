import './globals.css';
import { Toaster } from 'react-hot-toast';

export const metadata = {
  title: 'Aditya Verma | Software Engineer',
  description: 'Portfolio of Aditya Verma — Full-Stack Developer & Software Engineering Intern at Pratt & Whitney',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        {/* Noise texture overlay */}
        <div className="noise-overlay" aria-hidden="true" />
        {children}
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              background: 'var(--bg-card)',
              color: 'var(--cream)',
              border: '1px solid var(--border)',
              fontFamily: 'DM Sans, sans-serif',
            },
          }}
        />
      </body>
    </html>
  );
}
