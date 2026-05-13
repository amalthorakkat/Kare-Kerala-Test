import React from "react";
import {
  ScrollVelocityContainer,
  ScrollVelocityRow,
} from "../../../../animations/ScrollBasedVelocity";
import { motion } from "framer-motion";

const AboutTextCarousel = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, margin: "-50px" }}
      className="w-full border-y border-[#4DBD89]/60 
      py-2 sm:py-2.5 md:py-3 lg:py-3 
      backdrop-blur-sm bg-white/5"
    >
      <ScrollVelocityContainer
        className="w-full"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
      >
        <ScrollVelocityRow
          baseVelocity={1}
          className="text-[rgb(33,64,48)] font-medium tracking-wide sm:tracking-wider"
        >
          <span
            className="
              uppercase text-[#4DBD89]
              text-xs sm:text-xs md:text-sm lg:text-base xl:text-lg 
              whitespace-nowrap
            "
          >
            Legacy of Trust & Expertise &nbsp;|&nbsp; Integrated Healthcare
            Excellence &nbsp;|&nbsp; Authentic Ayurvedic Healing &nbsp;|&nbsp;
            Transparent &nbsp;|&nbsp; Verified Network of Excellence
            &nbsp;|&nbsp; Ethical & Patient-Centric Approach &nbsp;|&nbsp;
          </span>
        </ScrollVelocityRow>
      </ScrollVelocityContainer>
    </motion.div>
  );
};

export default AboutTextCarousel;
