import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback } from "./ui/avatar";
import Image from "next/image";

function UserAvatar({
  name,
  image,
  className,
}: {
  name?: string | null;
  image?: string | null;
  className?: string;
}) {
  return (
    <Avatar className={cn("bg-white text-black", className)}>
      {image && (
        <Image
          src={image || ""}
          alt={name || ""}
          width={40}
          height={40}
          className="rounded-full"
        />
      )}
      {/* <AvatarImage src="https://i.fbcd.co/products/original/s221128-cat-head-e05-mainpreview-739cdff1e43d362f66989d28e978dcdf400fd71172d53447cb4e0a250debac6b.jpg" />  */}
      <AvatarFallback
        delayMs={1000}
        className="dark:bg-white dark:text-black text-lg"
      >
        {name
          ?.split(" ")
          .map((n) => n[0])
          .join("")}
      </AvatarFallback>
    </Avatar>
  );
}

export default UserAvatar;
