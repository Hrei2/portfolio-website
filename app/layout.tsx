import type { Metadata } from 'next';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';

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
                <CustomCursor />
                <Navigation />
                {children}
                <Footer />
            </body>
        </html>
    );
}