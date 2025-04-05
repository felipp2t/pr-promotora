import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = { title: "PR - Promotora de Crédito" };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="dark font-body h-dvh" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
