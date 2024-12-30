import { Card, CardBody } from "@nextui-org/react";

export default function Home() {
  return (
    <Card className="mx-auto mt-4 max-w-md">
      <CardBody className="text-center">
        <h1 className="text-3xl">Next.js starter</h1>
        <p className="text-xl">A simple starter for next.js</p>
      </CardBody>
    </Card>
  );
}
