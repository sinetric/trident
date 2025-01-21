import type { Metadata } from "next";
import "./globals.css";
import styles from "./page.module.css"

export const metadata: Metadata = {
  title: "Trident",
  description: "Server Manager",
};

function Navbar() {
  return (
    <div className={styles.navbar}>
      
    </div>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
