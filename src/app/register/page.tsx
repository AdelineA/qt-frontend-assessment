"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const Register = () => {
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
    <div className="flex justify-center items-center min-h-screen">
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

        <button type="submit" className="bg-blue-500 text-white p-2 w-full">
          Register
        </button>
      </form>
    </div>
  );
};
export default Register;
