import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <section className="mx-auto my-4 flex flex-col items-center justify-center">
        <h1 className="mb-0 text-xl font-bold md:text-3xl">
          Nextjs Starter App
        </h1>
        <p className="w-full max-w-md text-balance text-center text-muted-foreground">
          Basic Nextjs starter with Shadcn UI components, Auth (Next Auth) and
          Dark Mode
        </p>
      </section>
      <section>
        <div className="rounded-t-lg border p-2">
          <h3 className="text-xl font-semibold md:text-2xl">Components</h3>
          {/* <p className="text-sm text-muted-foreground">
            Preview of the current available components
          </p> */}
        </div>
        <div className="grid grid-cols-1 gap-2 border border-t-0 p-2 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-wrap gap-1">
            <Button>Primary Button</Button>
            <Button variant={"secondary"}>Secondary Button</Button>
            <Button variant={"ghost"}>Ghost Button</Button>
            <Button variant={"destructive"}>Destructive Button</Button>
            <Button variant={"outline"}>Outline Button</Button>
          </div>
          <div>Second Component</div>
          <div>Third Component</div>
          <div>Fourth Component</div>
        </div>
      </section>
    </>
  );
}
