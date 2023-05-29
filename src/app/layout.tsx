import BlogHeader from '@/components/Header'
import './globals.css'
import {Inter} from 'next/font/google'

const inter = Inter({subsets: ['latin']})

export const metadata = {
    title: `Wordsmith's Odyssey`,
    description: 'A blog about writing, reading, and the journey to authordom.',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <BlogHeader/>
        {children}
        </body>
        </html>
    )
}
