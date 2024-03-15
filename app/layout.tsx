import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Consultoría inmobiliaria - MBA Juan Carlos Guzman",
  description:
    "Desbloquea el potencial de tu inmobiliaria con nuestra consultoría experta",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "relative antialiased overflow-x-hidden",
          inter.className
        )}
      >
        <main className="relative flex flex-col w-full min-h-screen">
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
