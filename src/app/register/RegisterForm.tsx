"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const RegisterForm = () => {
  const [isClient, setIsClient] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  useEffect(() => {
    setIsClient(true);
  }, []);
  if (!isClient) {
    return null;
  }
  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password.length < 3) {
      setError("Password must be at least 3 characters");
      return;
    }

    const url = "http://localhost:5000/api/auth/register";

    try {
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        console.error("Registration error:", data);
        setError(data.message || "Registration failed. Please try again.");
        return;
      }
      router.push("/login");
    } catch (error) {
      console.error("Fetch error:", error);
      setError("Registration failed. Please try again.");
    }
  };

  return (
    <div className="w-1/2 ">
      <div className="pt-5 xl:pb-20 pb-10">
        <Link href="/">
          <Image
            src="/assets/bitly.svg"
            alt="Bitly Logo"
            width={80}
            height={30}
          />
        </Link>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="w-full max-w-sm">
          <h1 className="font-bold text-xl">
            Do not have an account? Create One!
          </h1>
          <h1 className="text-gray-600 text-sm mt-1">
            Have an a account?
            <Link href="/login">Login</Link>
          </h1>

          <div className="mt-6 space-y-2">
            <button className="w-full py-2 border border-gray-300 rounded-md flex items-center justify-center gap-2">
              <Image
                src="/assets/google.png"
                alt="Google"
                width={18}
                height={18}
              />
              Continue with Google
            </button>
            <div className="relative mt-6 mb-4">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-white px-2 text-gray-500">OR</span>
              </div>
            </div>
          </div>
          <div className="space-y-4 mt-6 mb-4">
            <form
              className="bg-white p-6 rounded-lg shadow-md"
              onSubmit={handleRegister}
            >
              <h2 className="text-xl font-semibold mb-4">Register</h2>

              {error && <p className="text-red-500 mb-2">{error}</p>}

              <input
                type="email"
                placeholder="Email"
                className="border p-2 w-full mb-2"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <input
                type="password"
                placeholder="Password"
                className="border p-2 w-full mb-2"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <button
                type="submit"
                className="bg-blue-500 text-white p-2 w-full"
              >
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RegisterForm;
