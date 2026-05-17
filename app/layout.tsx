import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jonatan Rodriguez | Film Critic",
  description: "Film Critic and Cinematic Analyst Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400&family=Nunito:wght@300;400;600&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body 
        suppressHydrationWarning
        className="antialiased selection:bg-[#cfa262] selection:text-[#292230]"
      >
        {children}
      </body>
    </html>
  );
}