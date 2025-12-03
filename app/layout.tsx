import type { Metadata } from 'next';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress'

export const metadata: Metadata = {
    title: "My Portfolio",
    description: "Welcome to my personal portfolio website.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <ScrollProgress />
                <Navigation />
                {children}
                <Footer />
            </body>
        </html>
    );
}