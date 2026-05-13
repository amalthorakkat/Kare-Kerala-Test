// import React from "react";
// import { motion } from "framer-motion";

// const HeroSection = () => {
//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.8 }}
//       className="relative h-[75vh] bg-gradient-to-br from-[rgb(33,64,48)] via-[rgb(45,80,60)] to-[rgb(25,50,38)] overflow-hidden"
//     >
//       {/* Decorative background elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute top-20 left-10 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
//         <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-[#FFD700]/10 rounded-full blur-3xl" />
//         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-white/5 to-transparent rounded-full blur-3xl" />
        
//         {/* Animated floating circles */}
//         <motion.div
//           animate={{
//             y: [0, -20, 0],
//             x: [0, 10, 0],
//           }}
//           transition={{
//             duration: 6,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//           className="absolute top-1/4 right-1/4 w-32 h-32 bg-[#FFD700]/20 rounded-full blur-xl"
//         />
//         <motion.div
//           animate={{
//             y: [0, 20, 0],
//             x: [0, -10, 0],
//           }}
//           transition={{
//             duration: 8,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//           className="absolute bottom-1/3 left-1/4 w-24 h-24 bg-white/10 rounded-full blur-xl"
//         />
//       </div>

//       <div className="relative h-full flex items-center justify-center text-center px-5">
//         <div className="max-w-5xl">
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.6, delay: 0.1 }}
//             className="inline-block mb-6"
//           >
//             <span className="px-5 py-2 bg-white/10 backdrop-blur-md text-white text-sm font-semibold tracking-wider rounded-full border border-white/20">
//               WELCOME TO GOD'S OWN COUNTRY
//             </span>
//           </motion.div>

//           <motion.h1
//             initial={{ y: 40, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight tracking-tight"
//           >
//             Discover Kerala's
//             <span className="block bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FFD700] bg-clip-text text-transparent mt-2">
//               Tourist Paradise
//             </span>
//           </motion.h1>

//           <motion.p
//             initial={{ y: 40, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//             className="text-lg md:text-xl lg:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed"
//           >
//             From misty hill stations to pristine beaches, experience the breathtaking beauty of God's Own Country
//           </motion.p>

//           <motion.div
//             initial={{ y: 40, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.8, delay: 0.6 }}
//             className="flex flex-col sm:flex-row gap-4 justify-center"
//           >
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.98 }}
//               className="px-10 py-4 bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-[rgb(33,64,48)] font-bold rounded-2xl hover:shadow-2xl hover:shadow-[#FFD700]/30 transition-all duration-300"
//             >
//               Explore Destinations
//             </motion.button>
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.98 }}
//               className="px-10 py-4 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white font-bold rounded-2xl hover:bg-white hover:text-[rgb(33,64,48)] transition-all duration-300"
//             >
//               Plan Your Trip
//             </motion.button>
//           </motion.div>

//           {/* Scroll indicator */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.8, delay: 1 }}
//             className="absolute bottom-10 left-1/2 -translate-x-1/2"
//           >
//             <motion.div
//               animate={{ y: [0, 10, 0] }}
//               transition={{
//                 duration: 2,
//                 repeat: Infinity,
//                 ease: "easeInOut",
//               }}
//               className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2"
//             >
//               <div className="w-1.5 h-3 bg-white/70 rounded-full" />
//             </motion.div>
//           </motion.div>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default HeroSection;

import { useState, useEffect, useRef } from "react";

/* ─────────────────────────── design tokens ─────────────────────────── */
const tokens = {
  primary: "#061b0e",
  primaryContainer: "#1b3022",
  onPrimary: "#ffffff",
  secondary: "#36693e",
  secondaryFixed: "#b7f1ba",
  background: "#f8f9fa",
  surface: "#f8f9fa",
  onSurface: "#191c1d",
  onSurfaceVariant: "#434843",
  outlineVariant: "#c3c8c1",
  outline: "#737973",
};

/* ─────────────────────────── data ─────────────────────────── */
const DESTINATIONS = [
  {
    id: "munnar",
    name: "Munnar",
    panelSide: "right",
    panelTitle: "Don't Miss",
    panelItems: [
      "Spot the endangered Nilgiri Tahr at Eravikulam National Park",
      "Walk through the historic Tata Tea Museum",
      "Experience the panoramic views from Anamudi Peak",
    ],
    body: [
      "Nestled in the lap of the Western Ghats, Munnar is a haven of peace and tranquility. The rolling hills are draped in an emerald green carpet of tea plantations, interspersed with winding lanes and misty mountain peaks. It was once the summer resort of the erstwhile British Government in South India, and its colonial charm still lingers in the architecture and well-manicured gardens.",
      "Breathe in the crisp, cool air scented with tea leaves and spices. Whether you are trekking through the verdant landscapes, photographing the mesmerizing waterfalls, or simply enjoying a warm cup of local brew while watching the clouds roll over the valleys, Munnar offers a deeply healing connection with nature. It is a sanctuary where the mind quiets and the spirit rejuvenates.",
    ],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC3ddkhTkHwPIzuIPyYmyEXWSyhRsQ2hRf8WITlr4Xtb7_Hg6nhnLOA1ymkk-MW8P3-SsQPOM3skunn1yz0PHgLa5BxViOYiN1mlIRgQxcNA6TgtVVBmV-tdEcluRLmmoX33Ogn4VDIip1qrDdTzyuIJoawUn6ObTxu0n_co8rTxNDnhSQbVqtiq9oxwme9qpFA2W5jLwTZGYv_HuRJ0GEXyDp94V_XSdujiirE-jUsNeerUI51c-LH48QE7QLWNRYXoi8wpyFiNoI",
    imageAlt: "Misty rolling tea plantation hills in Munnar, Kerala",
  },
  {
    id: "alappuzha",
    name: "Alappuzha",
    panelSide: "left",
    panelTitle: "Key Experiences",
    panelItems: [
      "Overnight stay in a luxury traditional Kettuvallam",
      "Sunset strolls along the serene Marari Beach",
      "Bird watching at Pathiramanal Island",
    ],
    body: [
      "Often referred to as the 'Venice of the East', Alappuzha is famous for its intricate network of serene backwaters, tranquil canals, and expansive lagoons. A journey here is a step into a slower, more deliberate pace of life, where the rhythmic splash of oars and the distant call of tropical birds are the only sounds that interrupt the profound silence.",
      "Gliding through the emerald waters on a traditional wooden houseboat, you'll witness a unique aquatic ecosystem and rural Kerala village life unfolding along the banks. The gentle swaying of the boat, the lush palm-fringed shores, and the exquisite local cuisine served on board create a meditative and deeply restorative experience that epitomizes luxury wellness travel.",
    ],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCdBtXWoRmJzWxzNq5420ULV5tCsYnOYMOrKMbY0LuxGUruvaVYtIbnfZRrhCFtXNw1NPc_Wp_aW8fYv34MQiZNOO7ed_HybyMpiRboYMOmhHcxdGdo4x47w26_JJzcZfpfyq82yD4V8ZQVf0Ybf4EqLY9uIPpxwn4LSZkHGF_Bjn1EbGlD3fN9jC_vYfRlmlKsBhJW7HVqII2FhM7JVXFjNkyCTqjGdQ9yYhmrPsgRaOOXNjc-VBKlOYqEDpRIdfOafD7lualPRSA",
    imageAlt: "Traditional Kerala houseboat on palm-fringed backwater canal",
  },
  {
    id: "wayanad",
    name: "Wayanad",
    panelSide: "right",
    panelTitle: "Highlights",
    panelItems: [
      "Explore the ancient Neolithic petroglyphs at Edakkal Caves",
      "Wildlife safaris at the Wayanad Wildlife Sanctuary",
      "Trek to the heart-shaped lake at Chembra Peak",
    ],
    body: [
      "Wayanad is a lush, mountainous district in northern Kerala, characterized by its untamed wilderness, rich tribal heritage, and sprawling spice plantations. Set high in the Western Ghats, it is a region where history, ancient culture, and raw nature seamlessly intertwine, offering a retreat far removed from the clamor of modern life.",
      "From trekking to cascading waterfalls hidden deep within the forest to exploring ancient caves adorned with prehistoric rock art, Wayanad invites you to discover its secrets at your own pace. The region's pristine environment, abundant biodiversity, and cool, misty climate make it an ideal sanctuary for those seeking both gentle adventure and peaceful, restorative isolation.",
    ],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuACMV7iXn_gzouDHCPVT7jT0RtVrAcxKKRZi4OfBRTHlDpDkGRPUITVt1bWKOzyZbpEZXiQ9GooTE2woLGIMwFyX0_Dr2ExzwfA2cV2bTqd-3pFj15XuX6LXMw7n24DiGZKxTqnoA9gbHKa8RgWtxC8J_n5GxQzMIe5KlzBMV_3bPr11UsihxiGF24FGzQSZVO1FWK5rthMX8vvfpF7j5wyzJ6pXP6Fxn5m4igNEEXfnl5IbKW5QGG4ve9mo1JxPwU9gX11SW236JI",
    imageAlt: "Dense tropical forest with cascading waterfall in Wayanad",
  },
];

const NAV_LINKS = ["Home", "About Us", "Services", "Why Kerala", "Doctors", "Tourism"];

const HERO_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuASkpDzGVHkzMnxvP3BiyWklibBA9HH1aC2CmqHLFLw7PCEMBHpTbvBbpOnL9TxK3OWjwXX30PYx7gtxSGpPIlJmLyeyI1Yj4QpKU6bHjbmnut3LZEPqZXCQzbXz4Zejm2GD6b0bmds-6Yt6A8zVyxMLqIMqy7rzLtYeapEjCePGkP-e_T5gYAFGuMiF9Wc3xzPvF2tmNQs3n7r-laSV5wsAOW0g9YCT5PN1GGKvnkdegQ--U4GMeH7Xk1NQVYzKF_n8bZLqbNgHN0";

/* ─────────────────────────── helpers ─────────────────────────── */

function CheckIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"
      style={{ flexShrink: 0, marginTop: 2 }}>
      <circle cx="12" cy="12" r="11" stroke="#b7f1ba" strokeWidth="1.5" />
      <path d="M7.5 12.5l3 3 5.5-6" stroke="#b7f1ba" strokeWidth="1.8"
        strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function GlassPanel({ title, items, side }) {
  const pos = side === "left"
    ? { bottom: 0, left: 0, transform: "translate(1.5rem, -1.5rem)" }
    : { bottom: 0, right: 0, transform: "translate(-1.5rem, -1.5rem)" };
  return (
    <div style={{
      position: "absolute", ...pos,
      maxWidth: 320, borderRadius: "1.5rem",
      padding: "2rem",
      background: "rgba(6,27,14,0.42)",
      backdropFilter: "blur(20px)",
      WebkitBackdropFilter: "blur(20px)",
      border: "1px solid rgba(255,255,255,0.15)",
      boxShadow: "0 8px 32px rgba(6,27,14,0.3)",
      color: "#fff",
    }}>
      <h4 style={{
        fontFamily: "'Playfair Display', serif", fontSize: "1.2rem",
        fontWeight: 600, color: tokens.secondaryFixed,
        borderBottom: "1px solid rgba(255,255,255,0.2)",
        paddingBottom: "1rem", marginBottom: "1.25rem", margin: 0,
        paddingBottom: "1rem", marginBottom: "1.25rem",
      }}>{title}</h4>
      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "1rem" }}>
        {items.map((item, i) => (
          <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
            <CheckIcon />
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, lineHeight: 1.55, color: "rgba(255,255,255,0.88)" }}>
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function useInView() {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold: 0.08 }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

function DestinationSection({ dest }) {
  const [ref, inView] = useInView();
  return (
    <section ref={ref} style={{
      padding: "6rem 0",
      background: tokens.background,
      opacity: inView ? 1 : 0,
      transform: inView ? "translateY(0)" : "translateY(36px)",
      transition: "opacity 0.7s ease, transform 0.7s ease",
    }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 clamp(20px, 5vw, 64px)" }}>
        {/* Image card */}
        <div style={{
          position: "relative",
          height: "clamp(300px, 60vh, 640px)",
          borderRadius: "1.5rem",
          overflow: "hidden",
          boxShadow: "0 20px 40px rgba(6,27,14,0.15)",
          marginBottom: "4rem",
        }}>
          <img src={dest.image} alt={dest.imageAlt}
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            loading="lazy" />
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(to top, rgba(6,27,14,0.2) 0%, transparent 55%)",
            pointerEvents: "none",
          }} />
          <GlassPanel title={dest.panelTitle} items={dest.panelItems} side={dest.panelSide} />
        </div>

        {/* Text */}
        <div style={{ maxWidth: 896 }}>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(36px, 5vw, 64px)",
            fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.1,
            color: tokens.primary, marginBottom: "2rem",
          }}>{dest.name}</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {dest.body.map((p, i) => (
              <p key={i} style={{
                fontFamily: "'Inter', sans-serif", fontSize: 18,
                lineHeight: 1.65, color: tokens.onSurfaceVariant, margin: 0,
              }}>{p}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{
      background: tokens.primary, color: tokens.onPrimary,
      padding: "7.5rem 0", borderTop: "1px solid rgba(255,255,255,0.05)",
    }}>
      <div style={{
        maxWidth: 1280, margin: "0 auto",
        padding: "0 clamp(20px, 5vw, 64px)",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: "2rem",
      }}>
        {/* Brand */}
        <div>
          <div style={{
            fontFamily: "'Playfair Display', serif", fontSize: 32,
            fontWeight: 700, color: tokens.secondaryFixed, marginBottom: "1.5rem",
          }}>Kare Kerala</div>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, color: tokens.outlineVariant, lineHeight: 1.6, marginBottom: "1.5rem" }}>
            © 2024 Kare Kerala. All rights reserved. Journey into the heart of healing.
          </p>
          <div style={{ display: "flex", gap: "1rem" }}>
            {["share", "mail"].map((icon) => (
              <a key={icon} href="#" style={{
                width: 40, height: 40, borderRadius: "50%",
                background: "rgba(255,255,255,0.05)",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: tokens.outlineVariant, textDecoration: "none",
              }}>
                <span className="material-symbols-outlined" style={{ fontSize: 20 }}>{icon}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase", color: tokens.secondaryFixed, marginBottom: "1.5rem" }}>
            Quick Links
          </h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "1rem" }}>
            {["Healing Journeys", "Kerala Gallery", "Contact Support"].map((l) => (
              <li key={l}>
                <a href="#" style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, color: tokens.outlineVariant, textDecoration: "none" }}>{l}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase", color: tokens.secondaryFixed, marginBottom: "1.5rem" }}>
            Legal
          </h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "1rem" }}>
            {["Privacy Policy", "Terms of Service"].map((l) => (
              <li key={l}>
                <a href="#" style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, color: tokens.outlineVariant, textDecoration: "none" }}>{l}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase", color: tokens.secondaryFixed, marginBottom: "1.5rem" }}>
            Newsletter Signup
          </h4>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, color: tokens.outlineVariant, marginBottom: "1rem", lineHeight: 1.6 }}>
            Subscribe for exclusive wellness packages and travel updates.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            <input type="email" placeholder="Email Address" style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "0.75rem", padding: "0.75rem 1rem",
              color: "#fff", fontFamily: "'Inter', sans-serif", fontSize: 16, outline: "none",
            }} />
            <button style={{
              background: tokens.secondaryFixed, color: tokens.primary,
              border: "none", borderRadius: "0.75rem", padding: "0.75rem",
              fontFamily: "'Inter', sans-serif", fontSize: 14,
              fontWeight: 600, letterSpacing: "0.05em", cursor: "pointer",
            }}>Subscribe</button>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ─────────────────────────── ROOT ─────────────────────────── */
export default function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 60);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Playfair+Display:wght@600;700&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />

      <style>{`
        *, *::before, *::after { box-sizing: border-box; }
        body { margin: 0; }
        input::placeholder { color: #737973; }
        @media (max-width: 768px) {
          .kk-nav { display: none !important; }
          .kk-cta { display: none !important; }
          .kk-burger { display: flex !important; }
        }
        @media (min-width: 769px) {
          .kk-nav { display: flex !important; }
          .kk-cta { display: flex !important; }
          .kk-burger { display: none !important; }
          .kk-mobile-menu { display: none !important; }
        }
      `}</style>

      <div style={{ fontFamily: "'Inter', sans-serif", background: tokens.background, color: tokens.onSurface }}>

        {/* ── NAVBAR ── */}
        <header style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
          background: "rgba(248,249,250,0.84)",
          backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
        }}>
          <div style={{
            maxWidth: 1280, margin: "0 auto",
            padding: "1rem clamp(20px, 5vw, 64px)",
            display: "flex", alignItems: "center", justifyContent: "space-between",
          }}>
            <div style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 700,
              color: tokens.primary, letterSpacing: "-0.01em",
            }}>Kare Kerala</div>

            {/* Desktop nav */}
            <nav className="kk-nav" style={{ gap: "0.25rem", alignItems: "center" }}>
              {NAV_LINKS.map((link) => {
                const active = link === "Tourism";
                return (
                  <a key={link} href="#" style={{
                    fontFamily: "'Inter', sans-serif", fontSize: 15, fontWeight: 500,
                    color: active ? tokens.primary : tokens.onSurfaceVariant,
                    textDecoration: "none",
                    padding: "0.5rem 0.75rem",
                    borderRadius: "0.375rem",
                    borderBottom: active ? `2px solid ${tokens.primary}` : "2px solid transparent",
                    transition: "color 0.15s",
                    display: "block",
                  }}>{link}</a>
                );
              })}
            </nav>

            <button className="kk-cta" style={{
              fontFamily: "'Inter', sans-serif", fontSize: 14, fontWeight: 600,
              letterSpacing: "0.05em", padding: "0.5rem 1.5rem",
              borderRadius: 9999, border: `1px solid ${tokens.primary}`,
              background: "transparent", color: tokens.primary, cursor: "pointer",
            }}
              onMouseEnter={(e) => { e.currentTarget.style.background = tokens.primary; e.currentTarget.style.color = "#fff"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = tokens.primary; }}
            >CONTACT US</button>

            <button className="kk-burger" onClick={() => setMenuOpen(!menuOpen)}
              style={{ background: "none", border: "none", cursor: "pointer", color: tokens.primary, alignItems: "center" }}>
              <span className="material-symbols-outlined" style={{ fontSize: 30 }}>menu</span>
            </button>
          </div>

          {/* Mobile menu */}
          {menuOpen && (
            <div className="kk-mobile-menu" style={{
              background: tokens.surface, padding: "0.5rem clamp(20px, 5vw, 64px) 1rem",
              borderTop: "1px solid rgba(0,0,0,0.06)",
            }}>
              {NAV_LINKS.map((link) => (
                <a key={link} href="#" style={{
                  display: "block", padding: "0.75rem 0",
                  fontFamily: "'Inter', sans-serif", fontSize: 16, fontWeight: 500,
                  color: link === "Tourism" ? tokens.primary : tokens.onSurfaceVariant,
                  textDecoration: "none", borderBottom: "1px solid rgba(0,0,0,0.04)",
                }}>{link}</a>
              ))}
            </div>
          )}
        </header>

        {/* ── HERO ── */}
        <section style={{
          position: "relative", height: "70vh", minHeight: 600,
          display: "flex", alignItems: "center", justifyContent: "center",
          paddingTop: 96, overflow: "hidden",
        }}>
          <div style={{ position: "absolute", inset: 0 }}>
            <img src={HERO_IMAGE} alt="Serene Kerala backwaters at sunrise"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            <div style={{ position: "absolute", inset: 0, background: "rgba(6,27,14,0.40)", mixBlendMode: "multiply" }} />
            <div style={{ position: "absolute", inset: 0, background: `linear-gradient(to top, ${tokens.background} 0%, transparent 35%)` }} />
          </div>

          <div style={{
            position: "relative", zIndex: 10,
            maxWidth: 1280, margin: "0 auto",
            padding: "0 clamp(20px, 5vw, 64px)",
            textAlign: "center", color: "#fff",
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 1s ease, transform 1s ease",
          }}>
            <h1 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(38px, 7vw, 64px)",
              fontWeight: 700, lineHeight: 1.1,
              letterSpacing: "-0.02em",
              marginBottom: "1.5rem", marginTop: 0,
              textShadow: "0 2px 20px rgba(6,27,14,0.5)",
            }}>Explore God's Own Country</h1>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "clamp(16px, 2.2vw, 22px)",
              fontWeight: 400, lineHeight: 1.6,
              maxWidth: 680, margin: "0 auto",
              color: "rgba(255,255,255,0.88)",
              textShadow: "0 1px 8px rgba(6,27,14,0.4)",
            }}>
              Discover the soul of India through tranquil backwaters, lush tea
              gardens, and pristine beaches. A curated guide to your healing journey.
            </p>
          </div>
        </section>

        {/* ── DESTINATIONS ── */}
        {DESTINATIONS.map((dest) => (
          <DestinationSection key={dest.id} dest={dest} />
        ))}

        {/* ── FOOTER ── */}
        <Footer />
      </div>
    </>
  );
}