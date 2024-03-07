import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import './globals.css';
import classNames from 'classnames';

const openSans = Open_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Orchard Frontend Test',
    description: 'Created by Angelo Pavilando'
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={classNames(openSans.className, 'bg-dark-slate-gray')}
            >
                {children}
            </body>
        </html>
    );
}
