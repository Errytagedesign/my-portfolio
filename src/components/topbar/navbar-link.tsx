"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { ReactNode } from "react";

type NavbarLinkProps = {
  path: string;
  name: string;
  icon?: ReactNode;
  className?: string;
  action?: () => void;
  childRoutes?: NavbarLinkProps[];
};

export default function NavbarLink({
  path,
  name,
  className,
  action,
}: NavbarLinkProps) {
  const pathName = usePathname();

  return (
    <li
      className={` ${pathName === path ? "navbarActive" : "navbarNotActive"} ${className}`}
    >
      <Link href={path} onClick={action} className="hover:text-primary!">
        {name}
      </Link>
    </li>
  );
}
