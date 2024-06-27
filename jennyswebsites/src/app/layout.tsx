import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import styles from './global.module.css'
import { ScrollProvider } from "./helper/scrollToContext";
import PageSelector from "./components/PageSelector";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sen Mee Noodle",
  description: "Sen Mee Noodle, Authentic Thai Food",
};

 export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <html lang="en">
      <head>
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"/>
      </head>
      <body className={styles.body}>
        <ScrollProvider>
          {children}
        </ScrollProvider>
        </body>
    </html>
    </>
  );
}
