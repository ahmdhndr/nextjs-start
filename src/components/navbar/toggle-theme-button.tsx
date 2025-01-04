"use client";

import { useEffect, useState } from "react";

import { Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";
import useSystemTheme from "@/hooks/use-system-theme";

export default function ToggleThemeButton() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useSystemTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Button
      variant={"ghost"}
      onClick={() => (theme === "dark" ? setTheme("light") : setTheme("dark"))}
      className="p-0 hover:bg-transparent focus:bg-transparent focus-visible:bg-transparent"
    >
      {theme === "dark" ? (
        <Sun className="size-10" />
      ) : (
        <Moon className="size-10" />
      )}
      <span className="sr-only">Toggle Theme</span>
    </Button>
  );
}
