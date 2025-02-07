"use client"

import { useState,useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Heart, FlowerIcon as Rose, Stars, MessageCircleHeartIcon as MessageHeart, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import RoseIcon from "@/components/Rose"

export default function RoseDay() {
  const [showMessage1, setShowMessage1] = useState(false)
  const [showMessage2, setShowMessage2] = useState(false)
  const [showMessage3, setShowMessage3] = useState(false)

  return (

    <main className="min-h-screen w-full overflow-hidden">
    {/* Elegant Romantic Theme */}
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-pink-200 via-rose-200 to-pink-300 p-6">
      <FloatingRoses />
      <div className="container relative z-10 mx-auto flex min-h-screen flex-col items-center justify-center space-y-8">
        <motion.h1
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            duration: 1.5,
          }}
          className="text-center text-5xl font-bold text-rose-700 md:text-7xl"
        >
          Happy Rose Day, My Love!{" "}
          <RoseIcon className="ml-2 inline-block h-12 w-12 animate-bounce" />
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center text-xl text-rose-600"
        >
          You're the icing on my cupcake and the Wi-Fi to my heart! 😘
        </motion.p>
        <Button
          onClick={() => setShowMessage1(!showMessage1)}
          className="group relative overflow-hidden rounded-full bg-white px-8 py-4 text-rose-500 shadow-lg transition-all hover:bg-rose-50 hover:text-rose-600 hover:shadow-rose-200/50"
        >
          <Heart className="mr-2 inline-block h-4 w-4" />
          Tap for a Sweet Surprise <br/>(Spoiler: It's a Hug from Me)
          <span className="absolute inset-0 -z-10 animate-pulse rounded-full bg-rose-100/50" />
        </Button>
        <AnimatePresence>
          {showMessage1 && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              className="text-center text-lg text-rose-600"
            >
              Being with you is like eating my favorite chocolate – sweet, a little
              addictive, and I never want it to end! 🍫❤️
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  

      {/* Starry Night Love Theme */}
      {/*<section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-purple-900 via-purple-800 to-rose-900 p-6">
        <StarryBackground />
        <FloatingPetals />
        <div className="container relative z-10 mx-auto flex min-h-screen flex-col items-center justify-center space-y-8">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-center text-5xl font-bold text-yellow-300 md:text-7xl"
          >
            <Stars className="mr-2 inline-block h-8 w-8" />
            Happy Rose Day
            <Stars className="ml-2 inline-block h-8 w-8" />
          </motion.h2>
          <p className="text-center text-2xl text-yellow-200">"Jaise gulaab apni khushboo se sabko confuse kar deta hai, <br/> waise hi tum mere dimag ko thoda sa pyaar aur thoda sa chaos se confuse kar deti ho!"</p>
          <Button
            onClick={() => setShowMessage2(!showMessage2)}
            className="group rounded-full bg-purple-700/50 px-8 py-4 text-yellow-200 backdrop-blur-sm transition-all hover:bg-purple-600/50"
          >
            <MessageHeart className="mr-2 inline-block h-4 w-4" />
            💖 Prem Ki Madhur Baat Sunne Ke Liye Tap Karein ✨
          </Button>
          <AnimatePresence>
            {showMessage2 && (
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                className="text-center text-3xl text-yellow-200"
              >
                Pyaar esa karo <br/> Wo kahe rose <br/>Tum suno propose<br/> (kyunki tumhare saath zindagi ek cute si love story lagti hai)
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section> */}

      <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-purple-900 via-purple-800 to-rose-900 p-6">
        <StarryBackground />
        <FloatingPetals />
        <div className="container relative z-10 mx-auto flex min-h-screen flex-col items-center justify-center space-y-8">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="text-center text-5xl font-extrabold text-yellow-300 md:text-7xl drop-shadow-2xl"
          >
            <Stars className="mr-2 inline-block h-8 w-8 animate-spin-slow" />
            Happy Rose Day
            <Stars className="ml-2 inline-block h-8 w-8 animate-spin-slow" />
          </motion.h2>
          <p className="text-center text-2xl text-yellow-200 md:text-3xl leading-relaxed">
            "Jaise gulaab apni khushboo se sabko confuse kar deta hai, <br/> 
            waise hi tum mere dimag ko thoda sa pyaar aur thoda sa chaos se confuse kar deti ho!"
          </p>
          <Button
            onClick={() => setShowMessage2(!showMessage2)}
            className="group rounded-full bg-purple-700/70 px-8 py-4 text-yellow-200 backdrop-blur-sm transition-all hover:bg-purple-600/80 transform hover:scale-105"
          >
            <MessageHeart className="mr-2 inline-block h-4 w-4" />
            💖 Prem Ki Madhur Baat Sunne Ke Liye Tap Karein ✨
          </Button>
          <AnimatePresence>
            {showMessage2 && (
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                className="text-center text-3xl text-yellow-200"
              >
                Pyaar esa karo <br /> 
                Wo kahe rose <br />
                Tum suno propose <br />
                <span className="text-xl italic">(kyunki tumhare saath zindagi ek cute si love story lagti hai)</span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Minimalist Love Letter Theme */}
      <section className="relative min-h-screen w-full overflow-hidden bg-cream p-6">
        <div className="container relative z-10 mx-auto flex min-h-screen flex-col items-center justify-center space-y-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="max-w-2xl rounded-lg bg-white p-8 shadow-xl"
          >
            <h3 className="mb-6 text-center font-serif text-4xl text-rose-700">My Dearest Love ❤️</h3>
            <p className="mb-6 text-center font-serif text-lg text-gray-700">
              "Roses are red, violets are blue,
              <br />
              My world is perfect with you"
            </p>
            <div className="flex justify-center">
              <Button
                onClick={() => setShowMessage3(!showMessage3)}
                className="group relative rounded-md border border-rose-200 bg-white px-8 py-4 text-rose-600 transition-all hover:bg-rose-50"
              >
                <Sparkles className="mr-2 inline-block h-4 w-4" />
                Open My Love Letter
              </Button>
            </div>
            <AnimatePresence>
              {showMessage3 && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="mt-6 overflow-hidden text-center font-serif text-gray-600"
                >
                  I just wanted to take a moment to tell you how much you mean to me. Every time I’m with you, everything feels right. Your smile, your laugh, the way you make me feel — it’s all so special.

I never knew love could feel like this, but with you, I feel complete. You make my world brighter, and I’m so thankful to have you by my side.

I promise to love you always, through every moment, no matter where life takes us.
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

function FloatingRoses() {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });

      // Update on resize
      const handleResize = () =>
        setWindowSize({ width: window.innerWidth, height: window.innerHeight });

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          initial={{
            x: Math.random() * windowSize.width,
            y: -100,
            rotate: 0,
            opacity: 0.8,
          }}
          animate={{
            y: windowSize.height + 100,
            rotate: 360,
            opacity: 0,
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 5,
          }}
          className="absolute text-rose-400"
        >
          <Rose className="h-6 w-6" />
        </motion.div>
      ))}
    </div>
  );
}


function StarryBackground() {
  return (
    <div className="absolute inset-0">
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0.1 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.5,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            delay: Math.random() * 2,
          }}
          className="absolute h-1 w-1 rounded-full bg-yellow-200"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </div>
  )
}

function FloatingPetals() {
  const [windowWidth, setWindowWidth] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    setWindowHeight(window.innerHeight);
  }, []);

  if (!windowWidth || !windowHeight) return null; // Don't render until window sizes are available

  return (
    <div className="absolute inset-0 overflow-hidden">
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          initial={{
            x: -100,
            y: Math.random() * windowHeight,
            rotate: 0,
          }}
          animate={{
            x: windowWidth + 100,
            rotate: 360,
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 5,
          }}
          className="absolute text-rose-300/30"
        >
          <Rose className="h-8 w-8" />
        </motion.div>
      ))}
    </div>
  );
}