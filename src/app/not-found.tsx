import { Card, CardBody } from "@nextui-org/react";
import { IconFileUnknown } from "@tabler/icons-react";

export default function NotFound() {
  return (
    <Card className="mx-auto mt-4 max-w-md">
      <CardBody className="text-2xl">
        <p className="flex items-center justify-center gap-2">
          <IconFileUnknown />
          This page cannot be found.
        </p>
      </CardBody>
    </Card>
  );
}
