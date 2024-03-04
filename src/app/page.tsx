"use client";

import { Button } from "@/components/ui/button";
import { createFile, getFiles } from "../../convex/files";
import {
  SignedOut,
  SignInButton,
  SignOutButton,
  SignedIn,
  useOrganization,
} from "@clerk/nextjs";
import { useMutation, useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";

export default function Home() {
  const organization = useOrganization()
  const createFile = useMutation(api.files.createFile);
  const files = useQuery(api.files.getFiles);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <SignedIn>
        <SignOutButton>
          <Button>Salir del sistema</Button>
        </SignOutButton>
      </SignedIn>
      <SignedOut>
        <SignInButton mode="modal">
          <Button>Registrarse</Button>
        </SignInButton>
      </SignedOut>

      {files?.map((file) => {
        return <div key={file._id}>{file.name}</div>;
      })}

      <Button
        onClick={() => {
          createFile({
            name: "hellen word",
          });
        }}
      >
        Click Me
      </Button>
    </main>
  );
}
