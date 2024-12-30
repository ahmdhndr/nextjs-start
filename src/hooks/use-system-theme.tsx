import React from "react";

import { useTheme } from "next-themes";

type Theme = "dark" | "light";
type SetTheme = React.Dispatch<React.SetStateAction<Theme>>;

export default function useSystemTheme() {
  const { theme, setTheme, systemTheme } = useTheme();

  return React.useMemo(() => {
    return {
      theme: theme === "system" ? systemTheme : theme,
      setTheme,
    } as {
      theme: Theme;
      setTheme: SetTheme;
    };
  }, [theme, systemTheme, setTheme]);
}
