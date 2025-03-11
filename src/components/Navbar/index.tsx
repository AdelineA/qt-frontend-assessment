"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { getCookie } from "cookies-next";
import { FiChevronDown, FiGlobe } from "react-icons/fi";

const Navbar = () => {
  const pathname = usePathname();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = getCookie("token");
    setIsAuthenticated(!!token);
  }, []);

  return (
    <nav className="bg-[#0B1830] text-white py-6">
      <div className="content-wrapper max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image
            src="/assets/bitly.svg"
            alt="Bitly Logo"
            width={90}
            height={30}
          />
        </Link>

        <div className="flex items-center gap-6">
          {["Platform", "Solutions", "Resources"].map((item) => (
            <div key={item} className="relative group">
              <button className="flex items-center gap-1 hover:opacity-80">
                {item} <FiChevronDown className="text-sm" />
              </button>
              <div className="absolute left-0 mt-2 w-40 bg-white text-black shadow-md rounded-md opacity-0 group-hover:opacity-100 transition-all"></div>
            </div>
          ))}

          <Link href="/pricing" className="hover:opacity-80">
            Pricing
          </Link>

          <div className="flex items-center gap-1">
            <FiGlobe />
            <select className="bg-transparent text-white">
              <option>EN</option>
              <option>FR</option>
              <option>ES</option>
            </select>
          </div>

          <div className="space-x-4">
            {isAuthenticated ? (
              <Link href="/dashboard" className="text-blue-500 hover:underline">
                Dashboard
              </Link>
            ) : (
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
            )}
          </div>

          <button className="border border-white py-2 px-4 rounded-md hover:bg-white hover:text-[#001F3F]">
            Get a Quote
          </button>
          <Link href="/register">
            <button className="bg-white text-[#001F3F] py-2 px-4 rounded-md font-semibold">
              Sign up Free
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
