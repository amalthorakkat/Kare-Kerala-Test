import React from "react";
import { LuMail, LuPhone, LuMapPin } from "react-icons/lu";
import { FaArrowRight } from "react-icons/fa";
import Aloevera from "../../../assets/images/contactSection/aloevera.png.svg";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="w-full pt-12 md:pt-16 pb-16 md:pb-24 lg:pb-[130px] px-4 md:px-10 lg:px-20 bg-[#fcfaf8] overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 lg:gap-20 xl:gap-24 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="z-10 flex flex-col justify-center"
        >
          <h1 className="playfair text-[#1E1E1E] text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-normal leading-tight mb-4 md:mb-6">
            Let's Connect
          </h1>
          <p className="inter text-[#5C5C5C] text-sm sm:text-base md:text-lg max-w-sm mb-8 md:mb-12 leading-relaxed font-medium">
            For all queries and questions and your valuable feedback please
            connect to us at
          </p>

          <div className="space-y-8">
            <div className="flex items-center gap-5">
              <div className="w-12 h-12 rounded-full bg-[#417F5F] flex items-center justify-center shrink-0">
                <LuMail className="text-white text-xl" />
              </div>
              <span className="text-[#1E1E1E] font-bold font-sans tracking-wide">
                xxxxxxx@xxxxxxx.com
              </span>
            </div>

            <div className="flex items-center gap-5">
              <div className="w-12 h-12 rounded-full bg-[#417F5F] flex items-center justify-center shrink-0">
                <LuPhone className="text-white text-xl" />
              </div>
              <span className="text-[#1E1E1E] font-bold font-sans tracking-wide">
                +91 xxxxxxxxxxxx
              </span>
            </div>

            <div className="flex items-start gap-5">
              <div className="w-12 h-12 rounded-full bg-[#417F5F] flex items-center justify-center shrink-0">
                <LuMapPin className="text-white text-xl" />
              </div>
              <div className="flex flex-col text-[#1E1E1E] font-bold font-sans tracking-wide">
                <span>xxxxxxxxxxxxxxxx</span>
                <span>Xxxxxxxxxxxxxxxxxxxxxxxxx</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Aloevera Image - Positioned behind the form */}
          <img
            src={Aloevera}
            alt="Nature Element"
            className="hidden md:block absolute md:-bottom-12 md:-left-24 lg:-left-36 md:w-56 lg:w-64 z-0 pointer-events-none opacity-90"
          />

          <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-12 relative z-10 shadow-2xl border border-gray-100">
            <form className="space-y-6">
              <div>
                <label className="block text-[#244C38] font-semibold mb-2 font-sans text-xs uppercase tracking-wider">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3.5 focus:outline-none focus:border-[#244C38] focus:ring-1 focus:ring-[#244C38] transition-all bg-gray-50 focus:bg-white text-gray-800 placeholder-gray-400"
                />
              </div>

              <div>
                <label className="block text-[#244C38] font-semibold mb-2 font-sans text-xs uppercase tracking-wider">
                  Mobile
                </label>
                <input
                  type="tel"
                  placeholder="+91 98765 43210"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3.5 focus:outline-none focus:border-[#244C38] focus:ring-1 focus:ring-[#244C38] transition-all bg-gray-50 focus:bg-white text-gray-800 placeholder-gray-400"
                />
              </div>

              <div>
                <label className="block text-[#244C38] font-semibold mb-2 font-sans text-xs uppercase tracking-wider">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3.5 focus:outline-none focus:border-[#244C38] focus:ring-1 focus:ring-[#244C38] transition-all bg-gray-50 focus:bg-white text-gray-800 placeholder-gray-400"
                />
              </div>

              <div>
                <label className="block text-[#244C38] font-semibold mb-2 font-sans text-xs uppercase tracking-wider">
                  Message
                </label>
                <textarea
                  rows="4"
                  placeholder="How can we help you?"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3.5 focus:outline-none focus:border-[#244C38] focus:ring-1 focus:ring-[#244C38] transition-all bg-gray-50 focus:bg-white text-gray-800 placeholder-gray-400 resize-none"
                ></textarea>
              </div>

              <div className="flex justify-end pt-4">
                <button
                  type="button"
                  className="bg-[rgb(33,64,48)] text-white px-8 py-3.5 rounded-xl font-medium flex items-center gap-2 hover:bg-[rgb(25,50,38)] active:scale-95 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Submit <FaArrowRight />
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
