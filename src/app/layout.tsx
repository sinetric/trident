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
      <div className={styles.user}>
        <h4>Welcome, </h4>
        <h3>Hunter Biden 👋</h3>
        <br />
        <p className={styles.tooltip}>- Aquaman (Trident AI assistant)</p>
      </div>      
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
