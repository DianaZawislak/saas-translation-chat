import Link from "next/link";
import UserButton from "./UserButton";
import { getServerSession } from "next-auth";
import { authOptions } from "@/auth";
import { MessagesSquareIcon } from "lucide-react";
import Logo from "./Logo";
import DarkModeToggle from "./DarkModeToggle";
import UpgradeBanner from "./UpgradeBanner";
import LanguageSelect from "./LanguageSelect";
import CreateChatButton from "./CreateChatButton";
import React from 'react';


async function Header() {
  const session = await getServerSession(authOptions);

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-black">
      <nav className="flex flex-col sm:flex-row items-center p-5 pl-2 bg-white dark:bg-black  max-w-7xl mx-auto">
        <Logo />

        <div className="flex-1 flex items-center justify-end  space-x-4">
          <LanguageSelect />

          {session ? (
            <>
              <Link href="/chat" prefetch={false}>
                <MessagesSquareIcon className="text-gray-800 dark:text-white" />
              </Link>
              <CreateChatButton />
            </>
          ) : (
            <Link href={"/pricing"} prefetch={false}>
              Pricing
            </Link>
          )}
          <DarkModeToggle />
          <UserButton session={session} />
        </div>
      </nav>

      <UpgradeBanner />
    </header>
  );
}

export default Header;
