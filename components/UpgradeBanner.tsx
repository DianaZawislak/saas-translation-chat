"use client";

import { useSubscriptionStore } from "@/store/store";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

function UpgradeBanner() {
  const subscription = useSubscriptionStore((state) => state.subscription);
  const isPro = subscription?.role === "pro";
  const router = useRouter();

  if (subscription === undefined || isPro) return null;

  return (
    <Button
      onClick={() => router.push("/register")}
      className="w-full rounded-none bg-gradient-to-r from-[#115BF1] to-[#5f7179] text-center text-white px-5 py-2
        hover:from-[#4167ae] hover:to-[#5f7179]] hover:shadow-md hover:opacity-75 transition-all
      "
    >
      Upgrade to Pro to unlock all features!
    </Button>
  );
}

export default UpgradeBanner;
