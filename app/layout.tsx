import './globals.css'
import { Inter } from 'next/font/google'
import { Poppins } from 'next/font/google'
import Header from './components/Header'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

const poppins = Poppins({
  weight: ['400', '700'],
  subsets: ['latin']
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
       <Header />
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
