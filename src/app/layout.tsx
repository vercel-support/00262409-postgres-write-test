import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "00262409 Postgres Write Test",
  description: "A simple app to test postgres write functionality",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="dark:bg-black dark:text-white p-4">{children}</body>
    </html>
  );
}
