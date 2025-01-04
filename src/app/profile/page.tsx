import { Suspense } from "react";

import { getServerSession } from "next-auth";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import options from "@/config/auth";

import LoadingUser from "./loading-user";

export default async function ProfilePage() {
  const session = await getServerSession(options);

  const avatarFallback = session?.user?.name!.charAt(0).toUpperCase();

  return (
    <Card className="mx-auto mt-4 flex max-w-md items-center px-4">
      {session === null ? (
        <p className="py-4">You must login to see the profile.</p>
      ) : (
        <Suspense fallback={<LoadingUser />}>
          <Avatar className="size-14">
            <AvatarImage
              src={session?.user?.image as string}
              alt={session?.user?.name as string}
            />
            <AvatarFallback className="text-lg font-semibold">
              {avatarFallback}
            </AvatarFallback>
          </Avatar>
          <CardHeader>
            <CardTitle>{session?.user?.name}</CardTitle>
            <CardDescription>{session?.user?.email}</CardDescription>
          </CardHeader>
        </Suspense>
      )}
    </Card>
  );
}
