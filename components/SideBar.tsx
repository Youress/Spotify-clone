"use client";

import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { HiHome, HiSearch } from "react-icons/hi";
import Box from "@/components/Box";
import SideBarItem from "@/components/SideBarItem";
import Library from "./Library";
import { Song } from "@/types";
import usePlayer from "@/hooks/usePlayer";
import { twMerge } from "tailwind-merge";

interface sidebarProps {
  children: React.ReactNode;
  songs: Song[];
}
const SideBar: React.FC<sidebarProps> = ({ children, songs }) => {
  const pathname = usePathname();
  const player = usePlayer();
  const routes = useMemo(
    () => [
      {
        label: "Home",
        active: pathname !== "/search",
        href: "/",
        icon: HiHome,
      },
      {
        label: "Search",
        active: pathname === "search",
        href: "search",
        icon: HiSearch,
      },
    ],
    [pathname]
  );

  return (
    <div className={twMerge(`flex h-full`,player.activated && "h-calc(100%-80px")}>
      <div className="hidden md:flex flex-col gap-y-2 bg-black h-full w-[300px] p-2">
        <Box className="">
          <div className="flex flex-col gap-y-4 px-5 py-4">
            {routes.map((item) => (
              <SideBarItem key={item.label} {...item} />
            ))}
          </div>
        </Box>
        <Box className="overflow-y-auto h-full">
          <Library songs={songs} />
        </Box>
      </div>
      <main className="h-full flex-1 overflow-y-auto py-2">{children}</main>
    </div>
  );
};

export default SideBar;
