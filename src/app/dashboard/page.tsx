"use client";

import { useEffect, useState } from "react";

interface ShortUrl {
  shortCode: string;
  longUrl: string;
  clicks: number;
}

const Dashboard = () => {
  const [urls, setUrls] = useState<ShortUrl[]>([]);

  useEffect(() => {
    fetch("/api/urls")
      .then((res) => res.json())
      .then((data) => setUrls(data));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Your Shortened URLs</h1>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border p-2">Short URL</th>
            <th className="border p-2">Original URL</th>
            <th className="border p-2">Clicks</th>
          </tr>
        </thead>
        <tbody>
          {urls.map((url) => (
            <tr key={url.shortCode}>
              <td className="border p-2">
                <a href={`/s/${url.shortCode}`} className="text-blue-500">
                  {url.shortCode}
                </a>
              </td>
              <td className="border p-2">{url.longUrl}</td>
              <td className="border p-2">{url.clicks}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Dashboard;
