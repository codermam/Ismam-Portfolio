import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Palette,
  Sparkles,
} from "lucide-react";

import ronaldoGoat from "../assets/2.jpg";
import porsche911 from "../assets/911.PNG";
import bangladesh from "../assets/BANGLADESH.png";
import coffeeBistro from "../assets/Coffee.PNG";
import messiGoat1 from "../assets/Leonel.png";
import messiGoat2 from "../assets/MESSI.png";
import rumLabel from "../assets/RUM.png";

const designs = [
  {
    title: "Ronaldo — GOAT Tribute Poster",
    image: ronaldoGoat,
    category: "Poster Design",
  },
  {
    title: "Porsche 911 GT2 RS — Spec Poster",
    image: porsche911,
    category: "Automotive",
  },
  {
    title: "Bangladesh — Travel Poster",
    image: bangladesh,
    category: "Travel",
  },
  {
    title: "Morning Brew Bistro — Iced Coffee Ad",
    image: coffeeBistro,
    category: "Advertisement",
  },
  {
    title: "Messi — GOAT Poster I",
    image: messiGoat1,
    category: "Poster Design",
  },
  {
    title: "Messi — GOAT Poster II",
    image: messiGoat2,
    category: "Poster Design",
  },
  {
    title: "Jim Rum — Amber Rum Label",
    image: rumLabel,
    category: "Branding",
  },
];

const Designs = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const selected = selectedIndex !== null ? designs[selectedIndex] : null;

  const closeModal = () => {
    setSelectedIndex(null);
  };

  const showPrevious = (e) => {
    e?.stopPropagation();

    setSelectedIndex((current) => {
      if (current === null) return null;

      return current === 0 ? designs.length - 1 : current - 1;
    });
  };

  const showNext = (e) => {
    e?.stopPropagation();

    setSelectedIndex((current) => {
      if (current === null) return null;

      return current === designs.length - 1 ? 0 : current + 1;
    });
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (selectedIndex === null) return;

      if (event.key === "Escape") {
        closeModal();
      }

      if (event.key === "ArrowLeft") {
        showPrevious();
      }

      if (event.key === "ArrowRight") {
        showNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedIndex]);

  // Prevent body scrolling while lightbox is open
  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedIndex]);

  return (
    <section
      id="designs"
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-gray-950 to-black px-6 py-24 text-white md:px-10"
    >
      {/* ================= BACKGROUND ================= */}

      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      <motion.div
        className="absolute -left-40 top-1/4 h-[450px] w-[450px] rounded-full bg-amber-500/10 blur-[140px]"
        animate={{
          x: [0, 40, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-orange-500/10 blur-[140px]"
        animate={{
          x: [0, -30, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* ================= CONTENT ================= */}

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14 text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-400/20 bg-amber-400/5 px-4 py-2 text-sm text-amber-300 backdrop-blur-md">
            <Palette className="h-4 w-4" />
            Creative work
          </div>

          <h2 className="text-4xl font-black tracking-tight sm:text-5xl md:text-6xl">
            Design{" "}
            <span className="bg-gradient-to-r from-amber-300 to-orange-500 bg-clip-text text-transparent">
              Showcase
            </span>
          </h2>

          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-gradient-to-r from-amber-400 to-orange-500" />

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-gray-400 md:text-lg">
            Alongside software development, I enjoy creating posters,
            advertisements, branding concepts, and visual designs.
          </p>
        </motion.div>

        {/* ================= GALLERY ================= */}

        <div className="grid auto-rows-[220px] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {designs.map((design, index) => (
            <motion.button
              type="button"
              key={design.title}
              onClick={() => setSelectedIndex(index)}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                delay: index * 0.07,
                duration: 0.6,
              }}
              whileHover={{
                y: -6,
              }}
              className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-gray-900 text-left shadow-xl ${
                index === 0 || index === 4 ? "sm:row-span-2 lg:row-span-2" : ""
              }`}
            >
              <img
                src={design.image}
                alt={design.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90" />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-amber-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Category */}
              <div className="absolute left-4 top-4">
                <span className="rounded-full border border-white/10 bg-black/50 px-3 py-1.5 text-xs font-medium text-amber-300 backdrop-blur-md">
                  {design.category}
                </span>
              </div>

              {/* Expand icon */}
              <div className="absolute right-4 top-4 flex h-10 w-10 translate-y-[-5px] items-center justify-center rounded-full border border-white/10 bg-black/50 text-white opacity-0 backdrop-blur-md transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <Maximize2 className="h-4 w-4" />
              </div>

              {/* Bottom content */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="translate-y-3 transition-transform duration-300 group-hover:translate-y-0">
                  <h3 className="text-lg font-bold text-white">
                    {design.title}
                  </h3>

                  <div className="mt-2 flex items-center gap-2 text-sm text-amber-300 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span>View design</span>
                    <Maximize2 className="h-3.5 w-3.5" />
                  </div>
                </div>
              </div>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-5 right-5 h-px origin-left scale-x-0 bg-gradient-to-r from-amber-400 to-orange-500 transition-transform duration-500 group-hover:scale-x-100" />
            </motion.button>
          ))}
        </div>

        {/* Footer text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 flex items-center justify-center gap-2 text-sm text-gray-500"
        >
          <Sparkles className="h-4 w-4 text-amber-400" />
          Click any design to explore
        </motion.div>
      </div>

      {/* ================= LIGHTBOX ================= */}

      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 backdrop-blur-md md:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            {/* Close */}
            <button
              type="button"
              onClick={closeModal}
              className="absolute right-5 top-5 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-all hover:border-amber-400/30 hover:bg-amber-400/10 hover:text-amber-400 md:right-8 md:top-8"
              aria-label="Close design preview"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Previous */}
            <button
              type="button"
              onClick={showPrevious}
              className="absolute left-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/50 text-white backdrop-blur-md transition-all hover:border-amber-400/30 hover:bg-amber-400/10 hover:text-amber-400 md:left-8"
              aria-label="Previous design"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            {/* Next */}
            <button
              type="button"
              onClick={showNext}
              className="absolute right-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/50 text-white backdrop-blur-md transition-all hover:border-amber-400/30 hover:bg-amber-400/10 hover:text-amber-400 md:right-8"
              aria-label="Next design"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Image */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.92,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                scale: 0.92,
              }}
              transition={{
                duration: 0.3,
              }}
              className="relative flex max-h-[90vh] w-full max-w-5xl flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selected.image}
                alt={selected.title}
                className="max-h-[78vh] w-auto max-w-full rounded-xl object-contain shadow-2xl"
              />

              <div className="mt-5 text-center">
                <h3 className="text-lg font-bold text-white md:text-xl">
                  {selected.title}
                </h3>

                <p className="mt-1 text-sm text-amber-400">
                  {selected.category}
                </p>

                <p className="mt-2 text-xs text-gray-500">
                  {selectedIndex + 1} / {designs.length}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Designs;
