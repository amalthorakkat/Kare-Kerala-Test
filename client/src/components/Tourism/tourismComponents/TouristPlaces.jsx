import React from "react";
import { motion } from "framer-motion";

const TouristPlaces = () => {
  const touristPlaces = [
    {
      id: 1,
      name: "Munnar",
      description: "A breathtaking hill station known for its tea plantations, misty mountains, and serene valleys.",
      image: "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      highlights: ["Tea Gardens", "Eravikulam National Park", "Mattupetty Dam"]
    },
    {
      id: 2,
      name: "Ooty",
      description: "The Queen of Hill Stations, famous for its botanical gardens, lakes, and pleasant climate.",
      image: "https://images.unsplash.com/photo-1593696140826-c58b021acf8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      highlights: ["Botanical Garden", "Ooty Lake", "Doddabetta Peak"]
    },
    {
      id: 3,
      name: "Idukki",
      description: "A land of dense forests, wildlife sanctuaries, and the famous Idukki arch dam.",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      highlights: ["Idukki Dam", "Periyar Wildlife Sanctuary", "Hill View Park"]
    },
    {
      id: 4,
      name: "Alleppey",
      description: "Known as the Venice of the East, famous for its backwaters, houseboats, and beaches.",
      image: "https://images.unsplash.com/photo-1593696140826-c58b021acf8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      highlights: ["Backwaters", "Houseboat Cruises", "Alleppey Beach"]
    },
    {
      id: 5,
      name: "Kochi",
      description: "A vibrant coastal city blending history, culture, and modernity with colonial architecture.",
      image: "https://images.unsplash.com/photo-1593696140826-c58b021acf8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      highlights: ["Fort Kochi", "Chinese Fishing Nets", "Mattancherry Palace"]
    },
    {
      id: 6,
      name: "Wayanad",
      description: "A lush green paradise with spice plantations, wildlife, and ancient caves.",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      highlights: ["Edakkal Caves", "Banasura Sagar Dam", "Wayanad Wildlife Sanctuary"]
    }
  ];

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
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore the most beautiful and sought-after destinations that Kerala has to offer
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {touristPlaces.map((place, index) => (
            <motion.div
              key={place.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={place.image}
                  alt={place.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[rgb(33,64,48)] mb-3">
                  {place.name}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {place.description}
                </p>
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-gray-700">Top Attractions:</p>
                  <div className="flex flex-wrap gap-2">
                    {place.highlights.map((highlight, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-[rgb(33,64,48)]/10 text-[rgb(33,64,48)] text-sm rounded-full"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
                <button className="mt-6 w-full py-2 bg-[rgb(33,64,48)] text-white font-medium rounded-lg hover:bg-[rgb(45,85,60)] transition-colors">
                  Explore {place.name}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TouristPlaces;
