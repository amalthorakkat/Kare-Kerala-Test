import React from "react";
import Star from "../../../assets/images/heroSection/star.svg";
import BottomShape from "../../../assets/images/heroSection/BottomShape.svg";
import HeroVideo from "../../../assets/video/HeroVIdeo.mp4";
import HeroImg from "../../../assets/images/heroSection/heroImg.png";
import { motion } from "framer-motion";
import { useState } from "react";

const Hero = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative overflow-hidden inter text-white flex flex-col items-center justify-center text-center py-24 md:py-32 lg:py-57 px-4 lg:px-0 bg-gray-900">
      {/* Fallback Image (Priority Load) */}
      <img
        src={HeroImg}
        alt="Hero Background"
        fetchPriority="high"
        decoding="async"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />

      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        onLoadedData={() => setIsVideoLoaded(true)}
        className={`absolute top-0 left-0 w-full h-full object-cover z-0 transition-opacity duration-1000 ${
          isVideoLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <source src={HeroVideo} type="video/mp4" />
      </video>

      {/* Lighter gradient overlay */}
      <div className="absolute bottom-0 left-0 w-full h-[165%] z-1 bg-[linear-gradient(to_top,rgba(41,86,64,0.70)_0%,rgba(41,86,64,0.55)_35%,rgba(20,30,24,0.45)_65%,rgba(10,15,12,0.65)_100%)]" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center justify-center gap-5 max-w-4xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/10 backdrop-blur-md text-sm font-medium"
        >
          <img src={Star} alt="Star" className="w-4 h-4" />
          <p>Medical Tourism & Authentic Ayurveda</p>
        </motion.div>

        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="playfair text-[40px] md:text-[60px] lg:text-[72px] leading-[110%] lg:leading-[120%] font-bold"
          >
            Global Gateway to <span className="text-[rgb(33,64,48)]">Healing</span>
            <br /> in Kerala
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-gray-200 text-base md:text-lg pt-4 md:pt-5 max-w-[90%] md:max-w-3xl mx-auto leading-relaxed"
          >
            Connecting global patients with trusted hospitals, expert doctors,
            and authentic Ayurvedic treatment centres across Kerala.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 mt-6 sm:mt-4 w-full sm:w-auto px-4 sm:px-0"
        >
          {/* Primary */}
          <button
            onClick={() => scrollToSection("contact")}
            className="
      px-7 py-3 rounded-[10px] font-medium w-full sm:w-auto
      bg-[rgb(33,64,48)] text-white border border-[rgb(33,64,48)]
      transition-all duration-300 ease-out
      hover:bg-black/30 hover:backdrop-blur hover:text-white
      hover:border-[rgb(33,64,48)] hover:shadow-lg hover:scale-[1.03] cursor-pointer
    "
          >
            Start Your Journey
          </button>

          {/* Secondary */}
          <button
            onClick={() => scrollToSection("services")}
            className="
      px-7 py-3 rounded-[10px] font-medium w-full sm:w-auto
      border border-[rgb(33,64,48)] bg-black/30 backdrop-blur text-white
      transition-all duration-300 ease-out
      hover:bg-[rgb(33,64,48)] hover:text-white
      hover:border-[rgb(33,64,48)] hover:shadow-lg hover:scale-[1.03] cursor-pointer
    "
          >
            Explore Services
          </button>
        </motion.div>
      </motion.div>

      {/* Bottom Shape Image */}
      <img
        src={BottomShape}
        alt=""
        className="absolute -bottom-px left-0 w-full z-20 pointer-events-none"
      />
    </div>
  );
};

export default Hero;
