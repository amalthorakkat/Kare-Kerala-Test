import React from "react";
import { FaPlay, FaArrowRight } from "react-icons/fa";
import { LuMapPin, LuWallet, LuBriefcase, LuStethoscope } from "react-icons/lu";
import { motion } from "framer-motion";

const OurDoctors = () => {
  // Using a placeholder service to generate a generic image
  const placeholderImg =
    "https://placehold.co/400x500/cbd5e1/244C38?text=Doctor+Image";

  const doctors = [
    {
      name: "Dr. Sarah Smith",
      specialty: "Cardiologist",
      place: "Kerala, India",
      fees: "$150",
      status: "Available",
    },
    {
      name: "Dr. John Doe",
      specialty: "Neurologist",
      place: "Kochi, Kerala",
      fees: "$180",
      status: "Available",
    },
    {
      name: "Dr. Emily Davis",
      specialty: "Pediatrician",
      place: "Trivandrum",
      fees: "$120",
      status: "Available",
    },
    {
      name: "Dr. Michael Brown",
      specialty: "Dermatologist",
      place: "Calicut",
      fees: "$140",
      status: "Available",
    },
  ];

  return (
    <div className="w-full pt-5 pb-15 px-4 md:px-10 font-sans bg-[#fcfaf8]">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex flex-col items-center justify-center mb-16 space-y-4"
      >
        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8F3EF] text-[#244C38] text-xs font-semibold tracking-wide uppercase">
          <LuStethoscope className="text-lg" />
          <span>Expert Care</span>
        </div>
        <h1 className="playfair text-[#244C38] text-3xl md:text-5xl text-center font-bold leading-tight">
          Our Doctors & Hospitals
        </h1>
        <p className="text-gray-500 text-center max-w-2xl text-sm md:text-base">
          Meet our team of dedicated professionals committed to providing the
          best medical care with state-of-the-art facilities.
        </p>
      </motion.div>

      {/* Cards Grid */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.15 },
          },
        }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto justify-items-center"
      >
        {doctors.map((item, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
            className="group w-full max-w-[320px] sm:max-w-none bg-white rounded-t-[80px] md:rounded-t-[100px] lg:rounded-t-[120px] rounded-b-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            {/* Image Section */}
            <div className="relative w-full h-64 bg-gray-50">
              <img
                src={placeholderImg}
                alt={item.name}
                className="w-full h-full object-cover"
              />

              {/* Play Button - Simple & Centered */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-sm transition-transform hover:scale-105 active:scale-95">
                  <FaPlay className="text-[#244C38] ml-1 text-sm" />
                </button>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-5">
              <div className="mb-4">
                <h3 className="playfair text-[#244C38] text-xl font-bold mb-1">
                  {item.name}
                </h3>
                <p className="text-[#4ADE80] text-xs font-semibold uppercase tracking-wide">
                  {item.specialty}
                </p>
              </div>

              <div className="space-y-2.5">
                <div className="h-px w-full bg-gray-50 mb-3"></div>

                {/* Info Items */}
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <LuMapPin className="text-gray-400 text-base shrink-0" />
                  <span className="truncate">{item.place}</span>
                </div>

                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <LuWallet className="text-gray-400 text-base shrink-0" />
                  <span className="truncate">{item.fees}</span>
                </div>

                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <LuBriefcase className="text-gray-400 text-base shrink-0" />
                  <span
                    className={`${
                      item.status === "Available"
                        ? "text-green-600"
                        : "text-red-500"
                    } font-medium truncate`}
                  >
                    {item.status}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* View All Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
        className="flex justify-center mt-12 px-4"
      >
        <button className="px-6 cursor-pointer py-2.5 flex items-center justify-center gap-2 bg-[rgb(33,64,48)] text-white rounded-[10px] hover:bg-[rgb(25,50,38)] transition font-medium shadow-sm hover:shadow-md w-full sm:w-auto">
          View all doctors <FaArrowRight />
        </button>
      </motion.div>
    </div>
  );
};

export default OurDoctors;
