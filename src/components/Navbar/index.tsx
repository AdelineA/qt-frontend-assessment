"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getCookie } from "cookies-next";
import { useEffect, useState } from "react";
import { Button } from "../ui/Button";

const navLinks = [
  { name: "Platofrm", href: "/" },
  { name: "Solutions", href: "/solutions" },
  { name: "Pricing", href: "/pricing" },
  { name: "Resources", href: "/resources" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = getCookie("token");
    setIsAuthenticated(!!token);
  }, []);

  return (
    <nav className="bg-[#0B1830] shadow-md py-4 px-6 flex justify-between items-center">
      <Link href="/" className="text-[22px] font-bold text-[#ee6123]">
        bitly
      </Link>
      <div className="space-x-5 text-2xl font-medium">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className={`text-white  ${
              pathname === link.href ? "text-[#ee6123]" : ""
            }`}
          >
            {link.name}
          </Link>
        ))}
      </div>
      <div>
        <Button
          className="border-2 border-white font-bold"
          variant="primary"
          size={"default"}
        >
          Get a Quote
        </Button>
      </div>
      <div className="space-x-4">
        {isAuthenticated ? (
          <>
            <Link href="/dashboard" className="text-blue-500 hover:underline">
              Dashboard
            </Link>
          </>
        ) : (
          <>
            <Link
              href="/login"
              className={`hover:underline ${
                pathname === "/login"
                  ? "text-white font-semibold"
                  : "text-white"
              }`}
            >
              Login
            </Link>
            <Link
              href="/register"
              className={`hover:underline ${
                pathname === "/register"
                  ? "text-white font-semibold"
                  : "text-white"
              }`}
            >
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};
export default Navbar;
