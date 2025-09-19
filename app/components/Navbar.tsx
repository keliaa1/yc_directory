import React from "react";
import Link from "next/link";
import Image from "next/image";
import { auth, signOut, signIn } from "@/auth";
import LoginButton from "./LoginButton";
import { redirect } from "next/dist/server/api-utils";
const Navbar = async () => {
  const session = await auth();
  return (
    <header className="px-5 py-[0px] bg-white shadow-sm font-work-sans">
      <nav className="flex justify-between items-center">
        <Link href="/">
          <Image
            src="/vercel.svg"
            alt="Vercel Logo"
            width={144}
            height={10}
          ></Image>
        </Link>

        <div className="flex items-center gap-5 text-black">
          {session && session?.user ? (
            <>
              <Link href="/startup/create">
                <span>Create</span>
              </Link>
              <form
                action={async () => {
                  "use server";
                  await signOut({ redirectTo: "/" });
                }}
              >
                <button type="submit">Logout</button>
              </form>
              <Link href={`/user.${session?.id}`}>
                <span>{session?.user?.name}</span>
              </Link>
            </>
          ) : (
            <LoginButton />
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
