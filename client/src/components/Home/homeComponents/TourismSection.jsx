import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";
import { FiMapPin } from "react-icons/fi";

const TourismSection = () => {
  const navigate = useNavigate();

  const featuredPlaces = [
    {
      id: 1,
      name: "Munnar",
      description: "A breathtaking hill station known for its tea plantations, misty mountains, and serene valleys.",
      image: "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      highlights: ["Tea Gardens", "Eravikulam National Park"]
    },
    {
      id: 2,
      name: "Ooty",
      description: "The Queen of Hill Stations, famous for its botanical gardens, lakes, and pleasant climate.",
      image: "https://images.unsplash.com/photo-1593696140826-c58b021acf8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      highlights: ["Botanical Garden", "Ooty Lake"]
    },
    {
      id: 3,
      name: "Alleppey",
      description: "Known as the Venice of the East, famous for its backwaters, houseboats, and beaches.",
      image: "https://images.unsplash.com/photo-1593696140826-c58b021acf8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      highlights: ["Backwaters", "Houseboat Cruises"]
    }
  ];

  const handleViewMore = () => {
    navigate("/tourism");
  };

  return (
    <div className="py-20 px-5 bg-linear-to-br from-[#FCFAF8] via-white to-[#F5F0E8] relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[rgb(33,64,48)]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[rgb(33,64,48)]/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 mb-4 text-sm font-semibold tracking-wider text-[rgb(33,64,48)] bg-[rgb(33,64,48)]/10 rounded-full"
          >
            DISCOVER KERALA
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[rgb(33,64,48)] mb-6 tracking-tight">
            Explore Kerala's Tourism
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the most beautiful destinations that Kerala has to offer, from misty hill stations to pristine beaches
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featuredPlaces.map((place, index) => (
            <motion.div
              key={place.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500"
            >
              {/* Image container with gradient overlay */}
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent z-10" />
                <img
                  src={place.image}
                  alt={place.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 z-20">
                  <span className="px-3 py-1.5 bg-white/90 backdrop-blur-sm text-[rgb(33,64,48)] text-xs font-semibold rounded-full shadow-md">
                    Featured
                  </span>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6 relative">
                <div className="flex items-center gap-2 mb-3">
                  <FiMapPin className="w-4 h-4 text-[rgb(33,64,48)]" />
                  <span className="text-sm text-gray-500">Kerala, India</span>
                </div>
                <h3 className="text-2xl font-bold text-[rgb(33,64,48)] mb-3 group-hover:text-[rgb(45,80,60)] transition-colors">
                  {place.name}
                </h3>
                <p className="text-gray-600 mb-5 line-clamp-2 leading-relaxed">
                  {place.description}
                </p>
                <div className="space-y-3">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Top Attractions</p>
                  <div className="flex flex-wrap gap-2">
                    {place.highlights.map((highlight, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 bg-linear-to-r from-[rgb(33,64,48)]/10 to-[rgb(33,64,48)]/5 text-[rgb(33,64,48)] text-sm font-medium rounded-xl border border-[rgb(33,64,48)]/10 hover:border-[rgb(33,64,48)]/30 transition-colors"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-[rgb(33,64,48)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <motion.button
            onClick={handleViewMore}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="group px-8 py-4 flex items-center justify-center gap-3 bg-linear-to-r from-[rgb(33,64,48)] to-[rgb(45,80,60)] text-white rounded-2xl hover:from-[rgb(45,80,60)] hover:to-[rgb(33,64,48)] transition-all duration-300 font-semibold shadow-lg hover:shadow-xl w-full sm:w-auto"
          >
            View More Destinations 
            <AiOutlineArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default TourismSection;
