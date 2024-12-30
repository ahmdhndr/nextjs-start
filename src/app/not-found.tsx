import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function NotFound() {
  return (
    <div className="h-screen w-screen">
      <div className="flex h-full w-full items-center justify-center">
        <div className="prose dark:prose-invert space-y-4 text-center text-slate-900 dark:text-slate-300">
          <h1 className="my-0 text-4xl font-extrabold tracking-tight md:text-5xl">
            404
          </h1>
          <h2 className="my-0 text-xl font-semibold uppercase md:text-3xl">
            Page not found
          </h2>
          <Separator className="mx-auto w-20" />
          <p className="w-full max-w-80 text-balance text-sm tracking-normal md:text-base">
            The page you are looking for is not found, maybe you entered the
            wrong page or the page you are looking for has changed.
          </p>
          <Link href={"/"}>
            <Button className="my-4 text-slate-300">Take me home</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}