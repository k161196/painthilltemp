import './globals.css';
import Navbar from './components/Navbar/index';
import Footer from './components/Footer/index';
import SessionProvider from './components/SessionProvider/index';

export const metadata = {
  title: 'painthill',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden">
        <SessionProvider>
          <Navbar />
          <main className="overflow-x-hidden relative">
            {children}
          </main>
          <Footer />
        </SessionProvider>
      </body>
    </html>
  )
}
