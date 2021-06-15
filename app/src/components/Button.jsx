import React from "react";

export default function Button({ label }) {
  return (
    <button className="rounded-full px-10 py-2.5 bg-yellow-400 hover:bg-yellow-300 transition">
      <p className="text-white font-sans">{label}</p>
    </button>
  );
}