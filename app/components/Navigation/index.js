"use client";
import Link from "next/link";
import "./navigation.css";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  if (pathname !== "/")
    return (
      <nav className="nav">
        <Link
          className={`nav__link ${pathname === "/cafe" && "active"}`}
          href={"/cafe"}
        >
          Café
        </Link>
        <Link
          className={`nav__link ${pathname === "/bar" && "active"}`}
          href={"/bar"}
        >
          Bar
        </Link>
        <Link
          className={`nav__link ${pathname === "/tattoo" && "active"}`}
          href={"/tattoo"}
        >
          Tattoo
        </Link>
      </nav>
    );
}
