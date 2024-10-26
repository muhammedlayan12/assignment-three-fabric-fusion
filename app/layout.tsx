import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fabric Fusion",
  description: "Your go-to source for fabric and textiles.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link 
          href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;600;700&display=swap" 
          rel="stylesheet"
        />
        <link 
          href="https://fonts.googleapis.com/css2?family=Forum&display=swap" 
          rel="stylesheet"
        />
 

      </head>
      <body className="antialiased" style={{ fontFamily: 'Poppins, sans-serif' }}>
        {children}
      </body>
    </html>
  );
}
