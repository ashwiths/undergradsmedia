import React from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

function App() {
  const { scrollY } = useScroll();

  // Create a spring physics wrapper around scrollY to eliminate scroll ticks and make movement butter-smooth.
  const smoothScrollY = useSpring(scrollY, {
    stiffness: 85,    // Controls the speed of the snap
    damping: 25,      // Controls the cushioning/damping factor
    restDelta: 0.001
  });

  // Calculate the y translation for each layer.
  // Layer 1 moves down fastest (backmost), Layer 6 stays pinned (foremost).
  const y1 = useTransform(smoothScrollY, [0, 1000], [0, 650]);
  const y2 = useTransform(smoothScrollY, [0, 1000], [0, 500]);
  const y3 = useTransform(smoothScrollY, [0, 1000], [0, 350]);
  const y4 = useTransform(smoothScrollY, [0, 1000], [0, 200]);
  const y5 = useTransform(smoothScrollY, [0, 1000], [0, 80]);
  const y6 = useTransform(smoothScrollY, [0, 1000], [0, 0]);

  return (
    <div>
      {/* Parallax Container */}
      <ul className="parallax">
        <header>
          <ul className="menu">
            <li><a href="#">Home</a></li>
            <li><a href="#">Gallery</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
          <div className="hamburger">☰</div>
        </header>

        {/* 6 Parallax Background Layers, animated smoothly by motion */}
        <motion.li style={{ y: y1 }} className="layer" />
        <motion.li style={{ y: y2 }} className="layer" />
        <motion.li style={{ y: y3 }} className="layer" />
        <motion.li style={{ y: y4 }} className="layer" />
        <motion.li style={{ y: y5 }} className="layer" />
        <motion.li style={{ y: y6 }} className="layer" />
      </ul>

      {/* Main Content Area */}
      <div className="content py-32 min-h-screen">
        <div className="info text-center px-4">
          <h1 className="font-bold mb-4 font-display">Antigravity Parallax</h1>
          <p className="max-w-md mx-auto text-gray-400">
            This is where you will add your content later. The parallax layers above will slide smoothly as you scroll.
          </p>
        </div>

        {/* Footer with custom Ion-Icons */}
        <footer>
          <ion-icon name="logo-instagram"></ion-icon>
          <ion-icon name="logo-github"></ion-icon>
          <ion-icon name="logo-twitter"></ion-icon>
        </footer>
      </div>
    </div>
  );
}

export default App;
