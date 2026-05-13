import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import KareKeralaLogo from "../../assets/images/websiteLogo/KareKeralaLogo.svg";
import { FiPhone, FiMenu, FiX } from "react-icons/fi";
import { animateMenuToggle } from "../../animations/menuAnimations";
import { motion } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Refs
  const menuRef = useRef(null);
  const buttonRef = useRef(null);
  const hamburgerRef = useRef(null);
  const closeRef = useRef(null);

  const navLinks = ["Home", "About Us", "Services", "Why Kerala", "Doctors", "Tourism"];

  const { pathname } = useLocation();

  const handleNavClick = (linkName) => {
    // Handle Tourism navigation separately
    if (linkName === "Tourism") {
      navigate("/tourism");
      setIsMenuOpen(false);
      return;
    }

    const idMap = {
      Home: "home",
      "About Us": "about-us",
      Services: "services",
      "Why Kerala": "why-kerala",
      Doctors: "doctors",
      Contact: "contact",
    };

    const id = idMap[linkName];
    if (id) {
      if (pathname !== "/") {
        navigate("/");
        // Use a slight delay to allow the Home component to render before scrolling
        setTimeout(() => {
          const element = document.getElementById(id);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      } else {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  // --- ANIMATION LOGIC ---
  useEffect(() => {
    animateMenuToggle(isMenuOpen, hamburgerRef, closeRef);
  }, [isMenuOpen]);

  // --- CLICK OUTSIDE LOGIC ---
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  return (
    <header className="fixed top-0 left-0 w-full z-50 inter">
      {/* Backdrop Blur Overlay */}
      <div
        className={`fixed inset-0 z-[-1] bg-black/30 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMenuOpen(false)}
      />
      <div
        className={`flex items-center justify-between h-[72px] px-5 lg:px-10 bg-[#FCFAF8] ${
          isMenuOpen ? "" : "shadow-sm"
        }`}
      >
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-[120px] lg:w-auto cursor-pointer"
          onClick={() => handleNavClick("Home")}
        >
          <img
            src={KareKeralaLogo}
            alt="Logo"
            className="w-full h-full object-contain"
          />
        </motion.div>

        {/* Desktop Nav */}
        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="hidden lg:flex gap-8 font-medium"
        >
          {navLinks.map((link) => (
            <p
              key={link}
              onClick={() => handleNavClick(link)}
              className="cursor-pointer hover:text-[rgb(33,64,48)] transition-colors"
            >
              {link}
            </p>
          ))}
        </motion.nav>

        {/* Desktop CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hidden lg:block"
        >
          <button
            onClick={() => handleNavClick("Contact")}
            className="uppercase cursor-pointer flex items-center gap-2 py-2.5 px-5 rounded-xl border-2 border-[rgb(33,64,48)] text-[rgb(33,64,48)] font-medium transition hover:bg-[rgb(33,64,48)] hover:text-white"
          >
            <FiPhone /> Contact Us
          </button>
        </motion.div>

        {/* --- MOBILE TOGGLE BUTTON --- */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          ref={buttonRef}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden text-[rgb(33,64,48)] relative w-[30px] h-[30px] flex items-center justify-center outline-none"
        >
          {/* HAMBURGER: Starts visible (opacity 1), Rotation 0 */}
          <div
            ref={hamburgerRef}
            className="absolute inset-0 flex items-center justify-center"
          >
            <FiMenu size={30} />
          </div>

          {/* CLOSE (X): Starts invisible (opacity 0), Rotated -90deg */}
          <div
            ref={closeRef}
            className="absolute inset-0 flex items-center justify-center opacity-0 -rotate-90"
          >
            <FiX size={30} />
          </div>
        </motion.button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        ref={menuRef}
        className={`lg:hidden grid transition-all duration-500 ease-in-out bg-[#FCFAF8] shadow-md rounded-b-[30px] ${
          isMenuOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="flex flex-col items-center gap-8 py-10 text-[16px] font-medium ">
            {navLinks.map((link) => (
              <p
                key={link}
                className="cursor-pointer transition hover:text-[rgb(33,64,48)]"
                onClick={() => {
                  handleNavClick(link);
                  setIsMenuOpen(false);
                }}
              >
                {link}
              </p>
            ))}
            <button
              onClick={() => {
                handleNavClick("Contact");
                setIsMenuOpen(false);
              }}
              className="mt-4 uppercase flex items-center gap-2 py-3 px-7 rounded-xl border-2 border-[rgb(33,64,48)] text-[rgb(33,64,48)] font-medium transition hover:bg-[rgb(33,64,48)] hover:text-white"
            >
              <FiPhone /> Contact Us
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
