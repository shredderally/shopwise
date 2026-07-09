import './globals.css';

export const metadata = {
  title: 'ShopWise',
  description: 'Helping businesses manage their orders.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased text-gray-900 bg-white">
        {children}
      </body>
    </html>
  );
}

