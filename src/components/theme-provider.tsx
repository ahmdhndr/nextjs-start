"use client";

import * as React from "react";

import { SessionProvider } from "next-auth/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return (
    <SessionProvider>
      <NextThemesProvider {...props} attribute={"class"}>
        {children}
      </NextThemesProvider>
    </SessionProvider>
  );
}
