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

const Navbar = () => {
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
    <aside className="lg:w-20 py-3 lg:py-0 lg:h-[calc(100vh-64px)] flex flex-row lg:flex-col justify-center items-center gap-9">
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

export default Navbar;
