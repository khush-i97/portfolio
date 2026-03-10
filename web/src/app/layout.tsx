import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DS Portfolio",
  description: "Data Engineer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 antialiased">{children}</body>
    </html>
  );
}