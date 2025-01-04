"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import * as VisuallyHidden from "@radix-ui/react-visually-hidden";

import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { menus } from "@/data/menus";
import { cn } from "@/lib/utils";

interface NavbarMobileProps {
  open: boolean;
  onOpenChangeAction: () => void;
}

export default function NavbarMobile({
  open,
  onOpenChangeAction,
}: NavbarMobileProps) {
  const pathname = usePathname();

  return (
    <Drawer open={open} onOpenChange={onOpenChangeAction}>
      <DrawerContent>
        <VisuallyHidden.Root>
          <DrawerHeader className="text-left">
            <DrawerTitle>Menus</DrawerTitle>
            <DrawerDescription></DrawerDescription>
          </DrawerHeader>
        </VisuallyHidden.Root>
        {menus.map((item) => (
          <div className="container flex flex-col p-2" key={item.name}>
            <Link href={item.href} passHref legacyBehavior>
              <a
                onClick={() => onOpenChangeAction()}
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
          </div>
        ))}
      </DrawerContent>
    </Drawer>
  );
}
