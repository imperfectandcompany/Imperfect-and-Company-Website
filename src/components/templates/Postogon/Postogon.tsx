
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import "./Postogon.css"; // Import your Contact-specific CSS file
import Header from "components/organisms/Header/Header";
import Footer from "components/organisms/Footer/Footer";
import Splash from "./Splash";



const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } },
};

const raisingTextVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 0.3, // Adjust as needed
    },
  },
};


function Postogon() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Reference to the hero element
  const heroRef = useRef<HTMLDivElement>(null);

  const firstSpanRef = useRef<HTMLSpanElement>(null);
  const secondSpanRef = useRef<HTMLSpanElement>(null);
  const pTagRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {

    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Update hero element style
      if (heroRef.current) {
        const heroScale = (100 - scrollY / 100) / 100;
        heroRef.current.style.transform = `translate3d(0, ${scrollY / 100}%, 0) scale(${heroScale})`;
      }


      if (firstSpanRef.current) {
        const firstSpanOpacity = Math.max(0, 1 - scrollY / 100);
        firstSpanRef.current.style.opacity = firstSpanOpacity.toString();
      }


      // Update "Postogon" span style with the perfect scaling
      if (secondSpanRef.current) {
        const secondSpanScale = Math.min(2, 1 + scrollY / 500); // Perfect scaling
        secondSpanRef.current.style.transform = `scale(${secondSpanScale})`;

        // Start fading out later like in the second block, but spread it out more
        const fadeStart = 50; // Start fading out just after this scrollY value
        const fadeDistance = 200; // Spread the fading effect over this scroll distance
        const secondSpanOpacity = scrollY < fadeStart ? '1' : Math.max(0, 1 - (scrollY - fadeStart) / fadeDistance).toString();
        secondSpanRef.current.style.opacity = secondSpanOpacity;
      }

      if (pTagRef.current) {
        const pTagOpacity = scrollY > 100 ? Math.min(1, (scrollY - 100) / 100) : 0; // Starts appearing after scrolling 100px
        pTagRef.current.style.opacity = pTagOpacity.toString();
        pTagRef.current.style.display = pTagOpacity > 0 ? 'block' : 'none';
      }

    };

    // Attach the event listener
    window.addEventListener('scroll', handleScroll);



    // Clean up the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array means this effect runs once on mount


  return (
    <>
      <motion.div
        variants={containerVariants} initial="hidden" animate="visible" exit="hidden"
      >
        <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <motion.section
          className="postogon-hero bg-white "
          ref={heroRef}
          initial={{ opacity: 1, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="hero container text-center mx-auto justify-center items-center">
            <motion.div
              className="raising-text hidden"
              variants={raisingTextVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.span layout>Open for raising</motion.span>
            </motion.div>
            <h1>
              <span ref={firstSpanRef}>Coming Soon</span>
              <span ref={secondSpanRef}>Postogon</span>
            </h1>
          </div>
          <div className="down">
            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><polyline points="7 13 12 18 17 13"></polyline><polyline points="7 6 12 11 17 6"></polyline></svg>
          </div>
        </motion.section>
        <motion.div className="content"
          initial={{ opacity: 1, y: 0 }}
        >
          <motion.section
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className=""
          >
            <Splash />
          </motion.section>           
          <motion.section
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p>
              Welcome to Postogon, where your online persona is no longer lost in a tangled web of context collapse. We understand the importance of privacy, authentic interactions and user-driven experiences. Say goodbye to unwanted scrutiny and embrace ethical connectivity.
              .<br />Pretty cool.
            </p>
          </motion.section>                 
          <div className="footer">
            <Footer />
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}

export default Postogon;