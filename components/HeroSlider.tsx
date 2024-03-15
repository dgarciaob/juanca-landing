"use client";

import { images } from "@/constants/images";
import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

const HeroSlider = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const slider = sliderRef.current;

    if (!slider) {
      return;
    }

    const scrollAmount = slider.scrollWidth / images.length;
    let scrollPos = 0;

    const interval = setInterval(() => {
      scrollPos += scrollAmount;

      if (scrollPos > slider.scrollWidth) {
        scrollPos = 0;
      }

      slider.scrollTo({
        left: scrollPos,
        behavior: "smooth",
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={sliderRef}
      className="h-screen overflow-hidden flex whitespace-nowrap"
    >
      {images.map((img, id) => {
        return (
          <div key={id} className="h-full w-full flex-shrink-0">
            <Image
              src={img.src}
              alt={img.alt}
              width="1000"
              height="1000"
              className="object-cover w-full h-full relative opacity-45"
            />
          </div>
        );
      })}

      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-40 flex flex-col justify-center items-center absolute lg:top-80 lg:left-72 top-40 left-10"
      >
        <motion.p
          className={cn(
            "font-bold text-xl md:text-6xl text-center py-4 text-black"
          )}
        >
          Domina el mercado inmobiliario <br />
          con nuestra guía experta
        </motion.p>
        <button className="px-8 py-2 rounded-full bg-gradient-to-b from-blue-500 to-blue-600 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200 lg:mt-16 mt-10 font-semibold">
          Comienza Ahora
        </button>
      </motion.div>
    </section>
  );
};

export default HeroSlider;
