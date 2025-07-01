import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/NavBar";
import LenisProvider from "@/components/LenisProvider";

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
    <html lang="es">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body suppressHydrationWarning={true}>
        <LenisProvider>
          <NavBar />
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
