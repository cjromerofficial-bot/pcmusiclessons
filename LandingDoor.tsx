import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import * as Tone from "tone";
import { useLocation } from "wouter";

interface LandingDoorProps {
  onOpen: () => void;
}

export function LandingDoor({ onOpen }: LandingDoorProps) {
  const [isOpening, setIsOpening] = useState(false);
  const [, setLocation] = useLocation();

  const handleOpen = async () => {
    setIsOpening(true);
    
    // Start audio context if not started
    await Tone.start();
    
    // Play a happy major chord
    const synth = new Tone.PolySynth(Tone.Synth).toDestination();
    const now = Tone.now();
    // C Major chord spread out for a "magical" feel
    synth.triggerAttackRelease(["C4", "E4", "G4", "C5"], "2n", now);
    synth.triggerAttackRelease(["C3", "G3"], "2n", now + 0.1);
    
    // Wait for keys animation before opening curtains
    setTimeout(() => {
      onOpen();
    }, 1500); 
  };

  const handleClaimSpot = () => {
    // Navigate directly to booking
    setLocation("/booking");
  };

  // Generate piano keys
  const whiteKeys = Array.from({ length: 14 });
  const blackKeys = [0, 1, 3, 4, 5, 7, 8, 10, 11, 12]; // Indices where black keys should be

  return (
    <motion.div
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }} // Faster fade out when navigating away
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-slate-900"
    >
      <AnimatePresence>
        {!isOpening && (
          <>
            {/* Left Curtain */}
            <motion.div
              initial={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
              className="absolute left-0 top-0 h-full w-1/2 bg-[url('/images/stage-curtain.png')] bg-cover bg-center border-r-4 border-yellow-600/30 shadow-2xl z-20"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
            </motion.div>

            {/* Right Curtain */}
            <motion.div
              initial={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
              className="absolute right-0 top-0 h-full w-1/2 bg-[url('/images/stage-curtain.png')] bg-cover bg-center border-l-4 border-yellow-600/30 shadow-2xl z-20"
            >
              <div className="absolute inset-0 bg-gradient-to-l from-black/60 to-transparent" />
            </motion.div>

            {/* Content Layer (Above Curtains initially) */}
            <motion.div
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              className="relative z-30 max-w-2xl px-6 text-center text-white"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mb-8"
              >
                <h1 className="font-heading text-4xl md:text-6xl font-bold tracking-tight mb-4 text-white drop-shadow-lg">
                  The Music Studio That Comes to <span className="text-primary">Your Living Room</span>
                </h1>
                <p className="text-xl text-white/90 font-light mb-8">
                  Grand Opening: Book your first Remote Trial Lesson for 50% off.
                </p>
              </motion.div>

              <div className="flex flex-col items-center gap-6">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-white font-bold text-lg px-8 py-6 rounded-full shadow-[0_0_30px_rgba(249,115,22,0.6)] animate-pulse"
                  onClick={handleClaimSpot}
                >
                  Claim Virtual Spot
                </Button>
                
                <button 
                  onClick={handleOpen}
                  className="group flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm font-medium tracking-wide uppercase"
                  data-testid="button-enter-studio"
                >
                  <span>I'd like to see the full studio first</span>
                  <span className="block h-px w-8 bg-white/30 group-hover:w-12 transition-all" />
                </button>
              </div>
            </motion.div>

            {/* Piano Keys Animation Layer */}
            <div className="absolute bottom-0 left-0 right-0 h-48 z-40 flex items-end justify-center pointer-events-none">
              {/* White Keys */}
              <div className="flex h-full w-full max-w-4xl mx-auto relative">
                {whiteKeys.map((_, i) => (
                  <motion.div
                    key={`white-${i}`}
                    initial={{ y: "100%" }}
                    animate={isOpening ? { y: ["100%", "0%", "10%"] } : { y: "100%" }}
                    transition={{ 
                      duration: 0.6, 
                      delay: i * 0.03, // Ripple effect
                      ease: "backOut" 
                    }}
                    className="flex-1 bg-white border border-gray-300 rounded-b-md mx-[1px] shadow-md h-full relative"
                  />
                ))}
                
                {/* Black Keys (Overlaid) */}
                <div className="absolute inset-0 flex h-32 w-full pointer-events-none pl-[2%]">
                  {whiteKeys.map((_, i) => {
                    if (blackKeys.includes(i % 14)) {
                       // Simple logic to place black keys roughly correctly 
                       // This isn't musically perfect spacing but visually sufficient for the animation
                       const isSkipped = i === 2 || i === 6 || i === 9 || i === 13; 
                       if(isSkipped) return null;

                       return (
                        <motion.div
                          key={`black-${i}`}
                          initial={{ y: "100%" }}
                          animate={isOpening ? { y: ["100%", "0%", "10%"] } : { y: "100%" }}
                          transition={{ 
                            duration: 0.6, 
                            delay: i * 0.03 + 0.1, 
                            ease: "backOut" 
                          }}
                          className="w-[4%] bg-black h-full absolute rounded-b-md shadow-lg z-10"
                          style={{ 
                            left: `${(i + 1) * 7.14 - 2}%` // Approximate positioning
                          }}
                        />
                       );
                    }
                    return null;
                  })}
                </div>
              </div>
            </div>
          </>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
