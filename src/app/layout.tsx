import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "Frotend Quiz",
  description: "Este aplicativo testará suas habilidades em Frotend",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
       
      
        {children}
      </body>
    </html>
  );
}
