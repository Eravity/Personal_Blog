"use client";

import { JSX } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavigationType = {
  href: string;
  label: string;
};

const navItems: NavigationType[] = [
  {
    href: "/",
    label: "_hello",
  },
  {
    href: "/skills",
    label: "_skills",
  },
  {
    href: "/expertise",
    label: "_expertise",
  },
  {
    href: "/projects",
    label: "_projects",
  },
  {
    href: "/contacts",
    label: "_contacts",
  },
];

const Navigation: React.FC = (): JSX.Element => {
  const pathname = usePathname();

  return (
    <nav className="hidden">
      <ul>
        {navItems.map((item) => (
          <li key={item.label}>
            <Link href={item.href} legacyBehavior>
              <a
                className={`${
                  pathname === item.href
                    ? "underline"
                    : "text-[#B8B8B8] hover:text-[#dddddd] transition duration-200"
                }`}
              >
                {item.label}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
