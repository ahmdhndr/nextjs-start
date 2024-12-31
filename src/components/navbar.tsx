"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Menu } from "lucide-react";

import { cn } from "@/lib/utils";

import BrandLogo from "./brand-logo";
import ToggleThemeButton from "./toggle-theme-button";
import { Button } from "./ui/button";

const navItems: { name: string; href: string }[] = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Components",
    href: "/components",
  },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="border-grid sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container-wrapper">
        <div className="container flex h-14 items-center">
          <div className="mr-4 hidden md:flex">
            <BrandLogo />

            <nav className="flex items-center gap-4 text-sm xl:gap-6">
              {navItems.map((item) => (
                <Link href={item.href} key={item.name} passHref legacyBehavior>
                  <a
                    href={item.href}
                    className={cn(
                      "font-medium transition-colors hover:text-foreground",
                      item.href === pathname
                        ? "text-foreground"
                        : "text-muted-foreground"
                    )}
                  >
                    {item.name}
                  </a>
                </Link>
              ))}
            </nav>
          </div>
          <Button
            variant={"ghost"}
            className="mr-2 px-0 py-2 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
          >
            <Menu />
            <span className="sr-only">Toggle Menu</span>
          </Button>
          {/* <BrandLogo className="md:hidden" /> */}
          <div className="flex flex-1 items-center justify-end gap-2">
            <nav className="flex items-center gap-0.5">
              <Button variant={"ghost"} className="text-muted-foreground">
                Login
              </Button>
              <ToggleThemeButton />
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
