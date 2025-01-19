import type { Metadata } from "next";
import "./globals.css";
import Cursor from '../components/Cursor'

export const metadata: Metadata = {
  title: "Coyuyo",
  description: "Fundacion Coyuyo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="es">
        <head><meta name="viewport" content="width=device-width, initial-scale=1.0"/></head>
        <body>
        
          {children}
          <Cursor/>
        </body>
      </html>
    </>
  );
}
