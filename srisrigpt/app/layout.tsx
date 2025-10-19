import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SriSriGPT – Wisdom from the Heart of Gurudev",
  description: "AI-powered spiritual guidance inspired by Sri Sri Ravi Shankar's Weekly Knowledge Sheets",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
