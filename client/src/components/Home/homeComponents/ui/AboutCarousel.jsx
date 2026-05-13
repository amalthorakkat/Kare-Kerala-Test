import React, { useEffect, useState, useRef, useLayoutEffect } from "react";
import gsap from "gsap";

const slides = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 3,
    image:
      "https://plus.unsplash.com/premium_photo-1661777196224-bfda51e61cfd?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800",
  },
  { 
    id: 5,
    image:
      "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800",
  },
];

const AboutCarouselGSAP = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideRefs = useRef([]); // Store references to image elements
  const containerRef = useRef(null); // Scope for GSAP cleanup

  // --- AUTOPLAY LOGIC ---
  useEffect(() => {
    const t = setInterval(
      () => setCurrentIndex((p) => (p + 1) % slides.length),
      3000,
    );
    return () => clearInterval(t);
  }, []);

  // --- GSAP CONTEXT (Cleanup on Unmount) ---
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {}, containerRef);
    return () => ctx.revert();
  }, []);

  // --- ANIMATION TRIGGER ---
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      slideRefs.current.forEach((slide, index) => {
        if (!slide) return;

        if (index === currentIndex) {
          // ACTIVE IMAGE: Fade in & Scale down slightly
          gsap.fromTo(
            slide,
            {
              autoAlpha: 0,
              scale: 1.1,
              zIndex: 10,
            },
            {
              autoAlpha: 1,
              scale: 1,
              zIndex: 10,
              duration: 1.2,
              ease: "power2.out",
              overwrite: true,
            },
          );
        } else {
          // INACTIVE IMAGES: Just ensure they are hidden after the new one is ready
          // We delay the fade out until the new image (duration 1.2) is nearly done
          gsap.to(slide, {
            zIndex: 1,
            scale: 1,
            autoAlpha: 0,
            duration: 0.5,
            delay: 1.1, // Wait until active image is almost fully opaque
            overwrite: true,
          });
        }
      });
    }, containerRef);

    // Note: We intentionally DO NOT revert this specific effect on dependency change
    // to allow the "previous" slide (which is becoming inactive) to retain its opacity:1
    // state long enough for the new slide to fade in over it.
  }, [currentIndex]);

  // --- DIMENSIONS & CONFIGURATION ---
  const containerHeight = 420;
  const containerWidth = 320;
  const imageWidth = 230;
  const imageHeight = 330;
  const borderGap = 12;
  const textOffsetFromBorder = 14;

  // --- GEOMETRY CALCULATIONS ---
  const borderWidth = imageWidth + borderGap * 2;
  const borderHeight = imageHeight + borderGap * 2;
  const borderRadius = borderWidth / 2;
  const borderTopPosition = (containerHeight - borderHeight) / 2;
  const arcCenterY = borderTopPosition + borderRadius;
  const textRadius = borderRadius + textOffsetFromBorder;
  const center = containerWidth / 2;
  const startX = center - textRadius;
  const endX = center + textRadius;
  const pathString = `M ${startX} ${arcCenterY} A ${textRadius} ${textRadius} 0 0 1 ${endX} ${arcCenterY}`;

  return (
    <div className="flex justify-center items-center">
      <div
        ref={containerRef}
        className="relative flex items-center justify-center"
        style={{ width: `${containerWidth}px`, height: `${containerHeight}px` }}
      >
        {/* --- CURVED TEXT --- */}
        <svg
          viewBox={`0 0 ${containerWidth} ${containerHeight}`}
          className="absolute inset-0 z-40 pointer-events-none"
          style={{ overflow: "visible" }}
        >
          <path id="textArc" d={pathString} fill="none" />
          <text
            fill="#296496"
            fontSize="12.5"
            fontWeight=""
            className="tracking-widest inter"
          >
            <textPath
              href="#textArc"
              startOffset="50%"
              textAnchor="middle"
              dominantBaseline="auto"
            >
              Kerala’s Ancient Wisdom, World-Class Care...
            </textPath>
          </text>
        </svg>

        {/* --- DECORATIVE BORDER LINE --- */}
        <div
          className="absolute z-10 rounded-full border border-[rgb(33,64,48)]/30 pointer-events-none"
          style={{
            width: `${borderWidth}px`,
            height: `${borderHeight}px`,
          }}
        ></div>

        {/* --- IMAGE PILL --- */}
        <div
          className="relative rounded-full overflow-hidden z-20 bg-gray-100 shadow-xl"
          style={{ width: `${imageWidth}px`, height: `${imageHeight}px` }}
        >
          {slides.map((s, i) => (
            <img
              key={s.id}
              ref={(el) => (slideRefs.current[i] = el)} // Assign DOM element to ref array
              src={s.image}
              alt=""
              // Set initial opacity to 0 (invisible)
              // GSAP will handle the visibility from here on
              className="absolute inset-0 w-full h-full object-cover opacity-0"
            />
          ))}

          {/* Dots */}
          <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-1 z-30">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                  idx === currentIndex
                    ? "bg-[#4DBD89] scale-125"
                    : "bg-white/50"
                }`}
                aria-label={`slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCarouselGSAP;
