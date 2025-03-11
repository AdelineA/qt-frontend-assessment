"use client";
import { useState } from "react";
import { Button } from "../ui/Button";
import RightArrow from "./../../icons/RightArrow";

const LinkCard = () => {
  const [url, setUrl] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!url) {
      setError(true);
    } else {
      setError(false);
      alert("URL submitted: " + url);
    }
  };

  return (
    <div className="flex justify-center items-center p-10">
      <div className="bg-[#F8F7F4] p-6 md:p-10 rounded-3xl shadow-md max-w-3xl w-full">
        <h2 className="text-2xl md:text-3xl font-bold text-[#1C1C1C]">
          Shorten a long link
        </h2>
        <p className="text-gray-600">No credit card required.</p>

        <form onSubmit={handleSubmit} className="mt-6">
          <label className="block font-semibold text-[#1C1C1C]">
            Paste your long link here
          </label>
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className={`w-full mt-2 p-3 border-2 rounded-md text-lg ${
              error ? "border-red-500 text-red-600" : "border-gray-300"
            }`}
            placeholder="https://example.com/my-long-url"
          />
          {error && (
            <p className="text-red-500 text-sm mt-1">
              We’ll need a valid URL, like super-long-link.com/shorten it
            </p>
          )}

          <Button
            type="submit"
            className={`mt-4 w-1/3 px-4 py-6 text-lg font-semibold rounded-lg ${
              error || !url
                ? "bg-gray-300 text-white hover:bg-gray-700 "
                : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
            disabled={error || !url}
          >
            Get your link for free
            <RightArrow />
          </Button>
        </form>
      </div>
    </div>
  );
};

export default LinkCard;
