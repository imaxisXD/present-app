import localFont from "next/font/local";
import { Inter } from "next/font/google";

export const fixel = localFont({
    src: [
        {
            path: '../styles/FixelDisplay-ExtraBold.woff2',
            weight: '800',
            style: 'normal'
        },
        {
            path: '../styles/FixelDisplay-Medium.woff2',
            weight: '500',
            style: 'normal'
        },
        {
            path: '../styles/FixelDisplay-Regular.woff2',
            weight: '400',
            style: 'normal'
        },
        {
            path: '../styles/FixelDisplay-SemiBold.woff2',
            weight: '600',
            style: 'normal'
        }
    ],
    variable: "--font-fixel",
    display: "swap",
});

export const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
});

