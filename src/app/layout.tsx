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
      <body
        className={cn("h-full w-full overflow-hidden", jakartaSans.className)}
      >
        <ThemeProvider>
          <Navbar />
          <main className="flex h-full w-full flex-col p-4">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
