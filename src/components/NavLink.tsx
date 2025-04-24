"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ customClassName,href, children }: { customClassName:string;href: string; children: React.ReactNode }) => {
  const pathname = usePathname();

  const isActive = pathname === href;
  console.log(pathname,href);
  

  return (
    <Link href={href} className={isActive ? `text-rose-600 font-IRANSansBold ${customClassName} ` : `${customClassName}`}>
      {children}
    </Link>
  );
};

export default NavLink;
