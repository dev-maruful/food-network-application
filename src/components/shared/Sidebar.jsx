"use client";

import {
  HomeIcon,
  Squares2X2Icon,
  PaperAirplaneIcon,
  VideoCameraIcon,
  ListBulletIcon,
} from "@heroicons/react/24/solid";
import Icon from "./Icon";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();
  const [href, setHref] = useState(pathname);

  const navItems = [
    {
      href: "/",
      icon: <HomeIcon />,
    },
    {
      href: "/dashboard",
      icon: <Squares2X2Icon />,
    },
    {
      href: "/message",
      icon: <PaperAirplaneIcon />,
    },
    {
      href: "/video",
      icon: <VideoCameraIcon />,
    },
    {
      href: "/more",
      icon: <ListBulletIcon />,
    },
  ];

  return (
    <aside className="w-20 h-screen flex flex-col justify-center items-center gap-9">
      {navItems.map((item) => (
        <Link
          onClick={() => setHref(item.href)}
          key={item.href}
          href={item.href}
        >
          <Icon icon={item.icon} sidebarIcon activeClass={href === item.href} />
        </Link>
      ))}
    </aside>
  );
};

export default Sidebar;
