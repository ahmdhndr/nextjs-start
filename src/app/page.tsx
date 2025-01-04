import { features } from "@/data/features";
import { env } from "@/env/server";

export default function Home() {
  console.log(env.NEXTAUTH_SECRET);
  return (
    <div className="prose mx-auto dark:prose-invert">
      <section className="mx-auto my-4 flex flex-col items-center justify-center">
        <h1 className="mb-0 text-balance text-xl font-bold md:text-3xl">
          Next.js Starter
        </h1>
        <p className="my-0 w-full max-w-md text-balance text-center text-muted-foreground">
          A starter for Next.js, Shadcn UI and Typescript with `Dark Mode` &
          `Sort Imports` feature.
        </p>
      </section>
      <section>
        <h2 className="border-b py-2">Features</h2>
        <ul>
          {features.map((feature) => (
            <li key={feature.title}>{feature.title}</li>
          ))}
        </ul>
      </section>
      <section>
        <h2 className="border-b py-2">Getting Started</h2>
      </section>
    </div>
  );
}
