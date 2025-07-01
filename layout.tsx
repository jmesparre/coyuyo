import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/NavBar";

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
        <head><meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <style>
      @import url('https://fonts.googleapis.com/css2?family=Corben&display=swap');
      </style>
        </head>
        <body>
          <NavBar />
          {children}
        </body>
      </html>
    </>
  );
}
