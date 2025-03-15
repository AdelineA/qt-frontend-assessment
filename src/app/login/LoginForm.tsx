"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const LoginForm = () => {
  const [isClient, setIsClient] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  useEffect(() => {
    setIsClient(true);
  }, []);
  if (!isClient) {
    return null;
  }

  const url = "http://localhost:5000/api/auth/login";

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (!res.ok) {
      alert(data.message || "Login failed");
      return;
    }
    localStorage.setItem("token", data.token);
    router.push("/dashboard");
  };

  return (
    <div className="w-1/2">
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
      <div className="flex flex-col justify-center items-center ">
        <div className="w-full max-w-sm">
          <h2 className="text-2xl font-bold mt-6">Log in and start sharing</h2>
          <p className="text-gray-600 text-sm mt-1">
            Don’t have an account?
            <Link href="/register">Sign up</Link>
          </p>

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
          </div>

          <div className="relative mt-6 mb-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white px-2 text-gray-500">OR</span>
            </div>
          </div>
          <form className="space-y-4" onSubmit={handleLogin}>
            <h2 className="text-xl font-semibold mb-4">Login</h2>
            <input
              type="email"
              placeholder="Email"
              className="border p-2 w-full mb-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="border p-2 w-full mb-4"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" className="bg-blue-500 text-white p-2 w-full">
              Login
            </button>
          </form>
          <p className="text-gray-500 text-xs mt-4 text-center">
            By logging in with an account, you agree to Bitly’s Terms of Service
            <Link href="#">Terms of Service</Link>
            <Link href="#">Privacy Policy</Link>
            and
            <Link href="#">Acceptable Use Policy</Link>.
          </p>
        </div>
      </div>
    </div>
  );
};
export default LoginForm;
