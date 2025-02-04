import type { Metadata } from "next";
import "./globals.css";
import { ContainerLayout } from "@/components/ContainerLayout";

export const metadata: Metadata = {
  title: "Github challenge",
  description: "Desafio de front-end para a vaga de desenvolvedor na Kria",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body className={`bg-secundary antialiased`}>
        <ContainerLayout>{children}</ContainerLayout>
      </body>
    </html>
  );
}
