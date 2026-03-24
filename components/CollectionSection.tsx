"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const vibes = [
  {
    id: "ce-leste",
    name: "Ce-leste",
    category: "For Her",
    image: "/impactkit/assets/celeste.png",
    desc: "Floral, airy, and ethereal.",
  },
  {
    id: "crush",
    name: "cRush",
    category: "For Her",
    image: "/impactkit/assets/crush.png",
    desc: "Spicy, bold, and magnetic.",
  },
  {
    id: "mirage",
    name: "mirAge",
    category: "For Him",
    image: "/impactkit/assets/mirage.png",
    desc: "Warm, golden, and mysterious.",
  },
  {
    id: "el3ment",
    name: "El3ment",
    category: "Unisex",
    image: "/impactkit/assets/el3ment.png",
    desc: "Fresh, aquatic, and mineral.",
  },
  {
    id: "shadow",
    name: "shadow",
    category: "Unisex",
    image: "/impactkit/assets/shadow.png",
    desc: "Smoky resin, deep oud, enigmatic power.",
  },
];

export default function CollectionSection() {
  const [filter, setFilter] = useState("All");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const filtered =
    filter === "All"
      ? vibes
      : vibes.filter((v) => v.category === filter);

  // 🔥 Keyboard support
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;

      if (e.key === "Escape") setSelectedIndex(null);
      if (e.key === "ArrowRight")
        setSelectedIndex((prev) =>
          prev !== null ? (prev + 1) % filtered.length : 0
        );
      if (e.key === "ArrowLeft")
        setSelectedIndex((prev) =>
          prev !== null ? (prev - 1 + filtered.length) % filtered.length : 0
        );
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [selectedIndex, filtered.length]);

  return (
    <section className="py-32 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 text-center">

        {/* Heading */}
        <h2 className="text-5xl lg:text-6xl font-serif mb-6">
          Five Vibes. One Experience.
        </h2>

        <p className="text-gray-500 mb-16">
          Each fragrance tells a different story. Which one speaks to you?
        </p>

        {/* FILTER */}
        <div className="flex justify-center gap-4 mb-20 flex-wrap">
          {["All", "For Her", "For Him", "Unisex"].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-6 py-2 rounded-full text-xs font-semibold transition ${
                filter === f
                  ? "bg-black text-white"
                  : "bg-gray-100 text-gray-500 hover:bg-gray-200"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10">
          {filtered.map((vibe, i) => (
            <div
              key={vibe.id}
              onClick={() => setSelectedIndex(i)}
              className="relative aspect-[3/4] rounded-3xl overflow-hidden cursor-pointer group"
            >
              {/* IMAGE */}
              <img
                src={vibe.image}
                alt={vibe.name}
                className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition" />

              {/* TEXT */}
              <div className="absolute bottom-6 w-full text-white text-center">
                <h4 className="font-serif text-lg">{vibe.name}</h4>
                <p className="text-xs opacity-70">{vibe.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 🔥 FULLSCREEN MODAL */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            className="fixed inset-0 bg-black/90 z-[9999] flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* CLOSE */}
            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute top-6 right-6 text-white text-3xl"
            >
              ✕
            </button>

            {/* LEFT */}
            <button
              onClick={() =>
                setSelectedIndex(
                  (selectedIndex - 1 + filtered.length) % filtered.length
                )
              }
              className="absolute left-6 text-white text-3xl"
            >
              ←
            </button>

            {/* RIGHT */}
            <button
              onClick={() =>
                setSelectedIndex((selectedIndex + 1) % filtered.length)
              }
              className="absolute right-6 text-white text-3xl"
            >
              →
            </button>

            {/* IMAGE */}
            <motion.img
              key={filtered[selectedIndex].id}
              src={filtered[selectedIndex].image}
              alt={filtered[selectedIndex].name}
              className="max-h-[80vh] rounded-xl shadow-2xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            />

            {/* TEXT */}
            <div className="absolute bottom-10 text-white text-center px-4">
              <h3 className="text-2xl font-serif">
                {filtered[selectedIndex].name}
              </h3>
              <p className="text-sm opacity-70">
                {filtered[selectedIndex].desc}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}