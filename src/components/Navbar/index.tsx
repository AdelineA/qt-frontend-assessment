"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getCookie } from "cookies-next";
import { useEffect, useState } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = getCookie("token");
    setIsAuthenticated(!!token);
  }, []);

  return (
    <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
      <Link href="/" className="text-2xl font-bold text-blue-500">
        URL Shortener
      </Link>
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
                  ? "text-blue-600 font-semibold"
                  : "text-gray-600"
              }`}
            >
              Login
            </Link>
            <Link
              href="/register"
              className={`hover:underline ${
                pathname === "/register"
                  ? "text-blue-600 font-semibold"
                  : "text-gray-600"
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
