import React from "react";
import { motion } from "framer-motion";

const TouristPlaces = () => {
  return (
    <div className="py-16 px-5 bg-[#FCFAF8]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[rgb(33,64,48)] mb-4">
            Popular Tourist Destinations
          </h2>
        </motion.div>
      </div>
    </div>
  );
};

export default TouristPlaces;
