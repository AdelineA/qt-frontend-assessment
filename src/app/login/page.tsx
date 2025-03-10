"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const Login = () => {
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
    <div className="flex justify-center items-center min-h-screen">
      <form
        className="bg-white p-6 rounded-lg shadow-md"
        onSubmit={handleLogin}
      >
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
    </div>
  );
};
export default Login;
