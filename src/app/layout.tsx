import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";

import { Navbar } from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";

import "./globals.css";

export const metadata: Metadata = {
  title: "A basic starter for Next.js with Shadcn UI & Dark Mode",
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
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>📦</text></svg>"
        />
      </head>
      <body
        className={cn("h-full w-full overflow-hidden", jakartaSans.className)}
      >
        <ThemeProvider>
          <Navbar />
          <main className="flex h-full w-full flex-col">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
