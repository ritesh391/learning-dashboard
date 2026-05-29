import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Learning Dashboard',
  description: 'Next-gen student learning dashboard',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
