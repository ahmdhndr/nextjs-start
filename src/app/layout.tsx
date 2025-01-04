import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";

import { Navbar } from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";

import "./globals.css";

export const metadata: Metadata = {
  title: "Basic Starter Next.js, Shadcn UI",
};

const jakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/svg+xml" href="/logo.svg" />
      </head>
      <body className={cn("h-full w-full", jakartaSans.className)}>
        <ThemeProvider>
          <div className="flex h-screen w-screen flex-col justify-between">
            <Navbar />
            <main className="container flex-1 flex-grow">{children}</main>
            <footer className="border-grid flex h-14 items-center justify-center border-t">
              Next.js Starter @ 2025
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
