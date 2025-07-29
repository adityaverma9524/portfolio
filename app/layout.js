// app/layout.js

import './globals.css';
import { Toaster } from 'react-hot-toast';

export const metadata = {
  title: 'Aditya Verma | Portfolio',
  description: 'Portfolio website of Aditya Verma – Developer, Problem Solver, Tech Enthusiast',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-white text-gray-900 tracking-wide">
        {children}
        <Toaster position="top-right" />
      </body>
    </html>
  );
}